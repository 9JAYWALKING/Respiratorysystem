/* One local preference for custom swipes and question explanation double taps. */
window.RespiratoryGestures = (() => {
  const key = 'respiratory-gestures-enabled-v1';
  let enabled = true;
  try { enabled = localStorage.getItem(key) !== 'false'; } catch (_) {}
  const apply = () => { document.documentElement.dataset.studyGestures = enabled ? 'on' : 'off'; };
  function setEnabled(value, persist = true) {
    enabled = Boolean(value);
    if (persist) { try { localStorage.setItem(key,String(enabled)); } catch (_) {} }
    apply();
    document.dispatchEvent(new CustomEvent('study-gestures-change',{detail:{enabled}}));
  }
  apply();
  window.addEventListener('storage',event => {
    if (event.key === key || event.key === null) setEnabled(event.newValue !== 'false',false);
  });
  return {isEnabled:()=>enabled,setEnabled};
})();

/* Keep both reading states mounted, but show only the selected lecture tab. */
const lectureStudyStates = new Map();
function scrollLectureStudyQuestion(pane) {
  if (!pane) return;
  pane.scrollTop = 0;
  if (pane.closest('.lecture-workspace')?.dataset.expanded || document.body.classList.contains('context-link-open')) return;
  document.dispatchEvent(new CustomEvent('lecture-question-navigation'));
  const box = pane.closest('.lecture-pane');
  if (!box) return;
  const headerBottom = document.querySelector('.masthead')?.getBoundingClientRect().bottom || 0;
  const top = window.scrollY + box.getBoundingClientRect().top - headerBottom;
  window.scrollTo({top:Math.max(0,top),behavior:'auto'});
}
function lectureStudyState(course) {
  const id = Number(course.id);
  if (!lectureStudyStates.has(id)) lectureStudyStates.set(id, { chapter:'', expanded:'', view:'wiki' });
  return lectureStudyStates.get(id);
}
function lectureStudyViewerKey(course) {
  return (lectureStudyState(course).view === 'jbl' ? 'course-jbl-' : 'course-') + course.id;
}
function lectureStudyCourseForKey(key) {
  const match = String(key).match(/^course-(?:jbl-)?(\d+)$/);
  return match ? byId(Number(match[1])) : null;
}
let lectureJblWikiStatuses;
const lectureJblWikiStatusKey = 'respiratory-jbl-wiki-status-v1';
function lectureJblWikiStatus(id) {
  if (!lectureJblWikiStatuses) {
    const saved = readStudyStorage(lectureJblWikiStatusKey, {});
    lectureJblWikiStatuses = saved && typeof saved === 'object' && !Array.isArray(saved) ? saved : {};
  }
  const status = lectureJblWikiStatuses[id];
  return Object.hasOwn(questionStudyStatuses, status) ? status : 'unanswered';
}
function saveLectureJblWikiStatus(id, status) {
  lectureJblWikiStatus(id);
  const next = {...lectureJblWikiStatuses, [id]:status};
  if (!writeStudyStorage(lectureJblWikiStatusKey, next)) return false;
  lectureJblWikiStatuses = next;
  refreshQuestionStudyStatus(id);
  return true;
}
function lectureJblSectionSource(source, full, courseId) {
  const definitions = new Map([...full.matchAll(/\[\*([^\s\]]+)\s+([^\]]+)\]/g)].map(match => [match[1],match[2]]));
  const seen = new Set();
  return source.replace(/\[\*([^\s\]]+)(?:\s+([^\]]+))?\]/g, (whole,name,body) => {
    if (seen.has(name)) return `[*${name}]`;
    seen.add(name);
    const content = body || definitions.get(name);
    return content ? `[*${name} ${content}]` : whole;
  }).replace(/\[\[#([^\]]+)\]\]/g, `[[${courseId}강#$1]]`);
}
function lectureJblGroups(course) {
  const full = String(lectureNoteSources[course.id] || '').replace(/\r\n?/g,'\n');
  if (!full.trim()) return [];
  const sections = wikiEditableSections(full);
  const available = new Map(jblQuestions.map(question => [Number(question.globalNumber),question]));
  const groups = [];
  const add = (slug,heading,source,parent='',sourceCourse=course.id,unlinked=false) => {
    const sourceFull = String(lectureNoteSources[sourceCourse] || full);
    const numbers = [...new Set([...source.matchAll(/\{\{(\d+)\}\}/g)].map(match=>Number(match[1])))].filter(number=>available.has(number));
    groups.push({slug,bookmarkSlug:slug,heading,parent,source:lectureJblSectionSource(source,sourceFull,sourceCourse),sourceCourse:Number(sourceCourse),numbers,unlinked});
  };
  const first = sections.find(section=>section.level>=2);
  const lead = full.slice(0,first?.start ?? full.length).split('\n').filter(line=>!/^=\s+.*\s+=$/.test(line)&&!/^@(summary|tag)\s/.test(line)).join('\n').trim();
  if (lead) add('lecture-introduction','강의 요약',lead);
  let parent = '';
  for (const section of sections) {
    if (section.level === 2) {
      parent = section.heading;
      const child = sections.find(item=>item.level===3 && item.start>section.start && item.start<section.end);
      const source = full.slice(section.start,child ? child.start : section.end).trim();
      const body = source.split('\n').slice(1).join('\n').trim();
      if (body) add(section.slug,section.heading,source);
    } else if (section.level === 3) add(section.slug,section.heading,section.source,parent);
  }
  const linked = new Set(groups.flatMap(group=>group.numbers));
  const unlinked = jblQuestions.filter(question=>questionBelongsToCourse(question,course.id)&&!linked.has(Number(question.globalNumber))).sort((a,b)=>Number(a.globalNumber)-Number(b.globalNumber));
  const supplements = new Map();
  for (const question of unlinked) {
    let origin;
    for (const match of String(question.explanation||'').matchAll(/\[\[(\d+)강#([^|\]]+)/g)) {
      const sourceCourse = Number(match[1]), source = lectureNoteSources[sourceCourse];
      if (!source) continue;
      const section = wikiEditableSections(source).find(item=>item.slug===match[2] || normalizeWikiKey(item.heading)===normalizeWikiKey(match[2]));
      if (section && section.level>=2) { origin={sourceCourse,section};break; }
    }
    const key = origin ? `unlinked-${origin.sourceCourse}-${origin.section.slug}` : 'unlinked-questions';
    if (!supplements.has(key)) supplements.set(key,{origin,questions:[]});
    supplements.get(key).questions.push(question);
  }
  for (const [slug,{origin,questions}] of supplements) {
    const heading = origin?.section.heading || 'Wiki 유형 미연결 문항';
    const source = origin?.section.source || '앞선 Wiki 문단에 문항 링크가 없는 강의 문항이다. 각 문제를 풀고 해설에서 필요한 개념을 확인한다.';
    add(slug,heading,source,origin ? `${origin.sourceCourse}강 · 해설에 연결된 문단` : '',origin?.sourceCourse || course.id,true);
    groups.at(-1).numbers = questions.map(question=>Number(question.globalNumber));
    groups.at(-1).bookmarkSlug = origin?.section.slug || '';
  }
  return groups;
}
function lectureJblWikiCard(course,group) {
  return {studyKind:'wiki',id:`jbl-wiki:${course.id}:${group.slug}`,displayId:'Wiki',globalNumber:null,
    question:group.heading,passage:'',choices:[],images:[],answerIndices:[],answerIndex:null,answerLabel:'',explanation:'',
    lectureIds:[group.sourceCourse],group,source:group.parent || `${course.id}강`,professor:course.professor};
}
function lectureJblEntries(course) {
  const view = lectureStudyState(course), state = viewerState('course-jbl-'+course.id), filters=state.filters||{};
  const statuses = filters.statuses||[], filtering=Boolean(statuses.length||filters.favoritesOnly);
  const favorites = question => question.studyKind==='wiki'
    ? wikiBookmarks.some(bookmark=>bookmark.courseId===question.group.sourceCourse&&bookmark.slug===question.group.bookmarkSlug)
    : jblFavorites.has(question.id);
  const matches = item => !filtering || statuses.includes(questionStudyStatus(item.id)) || Boolean(filters.favoritesOnly&&favorites(item));
  const byNumber = new Map(jblQuestions.map(question=>[Number(question.globalNumber),question]));
  const result=[];
  for (const group of lectureJblGroups(course).filter(group=>!view.jblChapter||group.slug===view.jblChapter)) {
    const note = lectureJblWikiCard(course,group);
    let questions = group.numbers.map(number=>byNumber.get(number)).filter(question=>question&&matches(question));
    if (filtering && !matches(note) && !questions.length) continue;
    if (state.randomEnabled) {
      const signature=JSON.stringify(questions.map(question=>question.id));
      const cache=state.jblRandomGroups ||= {};
      if (cache[group.slug]?.signature!==signature) cache[group.slug]={signature,ids:shuffleQuestions(questions).map(question=>question.id)};
      const byId=new Map(questions.map(question=>[question.id,question]));
      questions=cache[group.slug].ids.map(id=>byId.get(id)).filter(Boolean);
    }
    result.push(note,...questions);
  }
  return result;
}
function lectureStudyViewerQuestions(course) {
  return lectureStudyState(course).view==='jbl' ? lectureJblEntries(course) : lectureStudyQuestions(course);
}
function lectureJblWikiCardMarkup(card) {
  const course=byId(card.lectureIds[0])||emptyRenderCourse;
  const source=card.group.source.split('\n').filter((line,index)=>index!==0||!parseWikiHeading(line)).join('\n');
  const bookmarked=wikiBookmarks.some(bookmark=>bookmark.courseId===card.group.sourceCourse&&bookmark.slug===card.group.bookmarkSlug);
  const favorite=card.group.bookmarkSlug ? `<button class="jbl-favorite ${bookmarked?'active':''}" type="button" data-jbl-wiki-favorite aria-pressed="${bookmarked}" aria-label="문단 즐겨찾기 ${bookmarked?'해제':'추가'}">${bookmarked?'★':'☆'}</button>` : '';
  return `<article class="jbl-card jbl-wiki-card" data-jbl-wiki-card="${escapeHtml(card.id)}"><header class="jbl-card-head"><div class="jbl-meta"><div class="jbl-author-source"><span class="jbl-prof">${card.group.unlinked?'Wiki 유형 미연결':'Wiki'}</span><div class="jbl-source">${escapeHtml(card.source)}</div></div><div class="jbl-meta-right">${questionStudyStatusMarkup(card.id)}<span class="jbl-qid jbl-wiki-label">Wiki</span>${favorite}</div></div><h2 class="jbl-title">${renderWikiInline(card.question,course,{items:[],named:new Map()},false)}</h2></header><div class="jbl-card-body"><div class="jbl-wiki-content">${renderJblWikiFragment(source,card,'type')}</div></div></article>`;
}
function bindLectureJblWikiCard(container,card) {
  const content=container.querySelector('.jbl-wiki-content');
  namespaceContextPreviewIds(content,'jbl-type-'+card.id.replace(/[^a-zA-Z0-9_-]/g,'-'));
  bindWikiDocument(content,byId(card.lectureIds[0])||emptyRenderCourse);
  container.querySelector('[data-study-status]')?.addEventListener('change',event=>saveQuestionStudyStatus(card.id,event.currentTarget.value,true));
  container.querySelector('[data-jbl-wiki-favorite]')?.addEventListener('click',()=>{
    const group=card.group,key=`${group.sourceCourse}#${group.bookmarkSlug}`;
    const next=wikiBookmarks.filter(bookmark=>bookmark.key!==key);
    if (next.length===wikiBookmarks.length) next.push({key,courseId:group.sourceCourse,slug:group.bookmarkSlug,heading:group.heading,link:`[[${group.sourceCourse}강#${group.bookmarkSlug}|${group.heading}]]`});
    if (!writeStudyStorage(wikiBookmarkKey,next)) return;
    wikiBookmarks=next;
    document.querySelectorAll('[data-course-wiki] [data-wiki-section]').forEach(heading=>{
      if (heading.dataset.wikiSection!==group.bookmarkSlug) return;
      const button=heading.querySelector('.wiki-bookmark');if (!button) return;
      const active=next.some(bookmark=>bookmark.key===key);
      button.textContent=active?'★':'☆';button.setAttribute('aria-pressed',String(active));
    });
    container.questionViewer.rerender();
  });
}
function jumpLectureJblQuestion(course,question) {
  const view=lectureStudyState(course),state=viewerState('course-jbl-'+course.id);
  let entries=lectureJblEntries(course),index=entries.findIndex(item=>item.id===question.id);
  if (index<0 && questionBelongsToCourse(question,course.id)) {
    view.jblChapter='';state.filters={};state.jblRandomGroups={};
    entries=lectureJblEntries(course);index=entries.findIndex(item=>item.id===question.id);
  }
  if (index<0) return false;
  state.index=index;renderCourseJ(course);scrollLectureStudyQuestion(document.querySelector('[data-course-j-host]'));
  return true;
}
function lectureStudyChapters(course) {
  const available = new Set(jblQuestions.map(question => Number(question.globalNumber)));
  return wikiEditableSections(lectureNoteSources[course.id] || '')
    .filter(section => section.level === 3)
    .map(section => ({
      slug:section.slug, heading:section.heading,
      numbers:[...new Set([...section.source.matchAll(/\{\{(\d+)\}\}/g)].map(match => Number(match[1])))].filter(number => available.has(number))
    }));
}
function lectureStudyBaseQuestions(course) {
  const state = lectureStudyState(course);
  const chapter = lectureStudyChapters(course).find(item => item.slug === state.chapter);
  if (chapter?.numbers.length) return chapter.numbers.map(number => jblQuestions.find(question => Number(question.globalNumber) === number)).filter(Boolean);
  state.chapter = '';
  return jblQuestions.filter(question => questionBelongsToCourse(question, course.id)).sort((a,b) => Number(a.globalNumber)-Number(b.globalNumber));
}
function lectureStudyQuestions(course) {
  const state = viewerState('course-' + course.id);
  const filters = state.filters || {};
  const statuses = filters.statuses || [];
  const questions = lectureStudyBaseQuestions(course).filter(question =>
    (!statuses.length && !filters.favoritesOnly) || statuses.includes(questionStudyStatus(question.id)) ||
    (filters.favoritesOnly && jblFavorites.has(question.id)));
  if (!state.randomEnabled) return questions;
  const signature = JSON.stringify(questions.map(question => question.id));
  if (state.randomSignature !== signature) {
    state.randomSignature = signature;
    state.randomOrder = shuffleQuestions(questions).map(question => question.id);
  }
  const byId = new Map(questions.map(question => [question.id, question]));
  return (state.randomOrder || []).map(id => byId.get(id)).filter(Boolean);
}
function refreshLectureStudyLinks(course) {
  const wiki = document.querySelector('#content-panel [data-course-wiki]');
  if (!wiki) return;
  let chapter = '';
  wiki.querySelectorAll('h5[data-wiki-level="3"], [data-jbl-question-link]').forEach(element => {
    if (element.matches('h5')) chapter = element.dataset.wikiSection;
    else element.dataset.studyChapter = chapter;
  });
  const activeNumber = lectureStudyViewerQuestions(course)[viewerState(lectureStudyViewerKey(course)).index]?.globalNumber;
  wiki.querySelectorAll('[data-jbl-question-link]').forEach(link => {
    const active = Number(link.dataset.jblQuestionLink) === Number(activeNumber);
    link.classList.toggle('is-study-current', active);
    if (active) link.setAttribute('aria-current', 'true');
    else link.removeAttribute('aria-current');
  });
}
function renderLectureStudyFilter(course) {
  const select = document.querySelector('#content-panel [data-lecture-chapter]');
  if (!select) return;
  const state = lectureStudyState(course);
  const jbl = state.view==='jbl';
  const chapters = jbl ? lectureJblGroups(course) : lectureStudyChapters(course).filter(chapter => chapter.numbers.length);
  const total = jblQuestions.filter(question => questionBelongsToCourse(question, course.id)).length;
  select.innerHTML = '<option value="">' + (jbl ? '전체 유형 · '+chapters.length : '전체 문항 · '+total) + '</option>' + chapters.map(chapter =>
    '<option value="' + escapeHtml(chapter.slug) + '">' + escapeHtml(chapter.heading) + ' · ' + chapter.numbers.length + '</option>'
  ).join('');
  select.value = jbl ? state.jblChapter||'' : state.chapter;
  refreshLectureStudyLinks(course);
}
function syncLectureStudyView(course) {
  const state = lectureStudyState(course);
  const view = state.expanded==='wiki' ? 'wiki' : state.view || 'wiki';
  const workspace = document.querySelector('#content-panel .lecture-workspace');
  if (!workspace) return;
  workspace.dataset.view = view;
  document.body.classList.toggle('lecture-j-active', view === 'j' || view === 'jbl');
  workspace.querySelectorAll('[data-lecture-pane]').forEach(section => {
    const hidden = section.dataset.lecturePane !== (view==='jbl' ? 'j' : view);
    section.hidden = hidden;
    section.inert = hidden;
    section.setAttribute('aria-hidden', String(hidden));
  });
  document.querySelectorAll('[data-lecture-view]').forEach(button => {
    button.setAttribute('aria-pressed', String(button.dataset.lectureView === view));
  });
}
function setLectureStudyView(course, view) {
  if (!['wiki','j','jbl'].includes(view) || (view==='jbl'&&!String(lectureNoteSources[course.id]||'').trim())) return;
  closeQuestionExplanationSplit(false);
  const changed = lectureStudyState(course).view !== view;
  lectureStudyState(course).view = view;
  activeDetailTab = view === 'j' ? 'KMLE' : view==='jbl' ? 'JBL' : '정리본';
  if (changed) renderCourseJ(course);
  setLectureStudyExpanded(course, '');
  history.replaceState({...(history.state || {}), detailTab:activeDetailTab}, '', location.href);
}
function setLectureStudyExpanded(course, pane) {
  const workspace = document.querySelector('#content-panel .lecture-workspace');
  if (!workspace) return;
  const state = lectureStudyState(course);
  state.expanded = pane || '';
  if (pane && !(pane==='j'&&state.view==='jbl')) state.view = pane;
  workspace.dataset.expanded = state.expanded;
  document.body.classList.toggle('lecture-pane-expanded', Boolean(state.expanded));
  const masthead = document.querySelector('.masthead');
  workspace.style.setProperty('--lecture-top', ((masthead?.getBoundingClientRect().height || 48) + 10) + 'px');
  workspace.querySelectorAll('[data-lecture-pane]').forEach(section => {
    const hidden = Boolean(state.expanded && section.dataset.lecturePane !== state.expanded);
    section.inert = hidden;
    if (hidden) section.setAttribute('aria-hidden','true');
    else section.removeAttribute('aria-hidden');
  });
  workspace.querySelectorAll('[data-lecture-expand]').forEach(button => {
    const active = button.dataset.lectureExpand === state.expanded;
    const label = active ? '강의 화면으로 돌아가기' : (button.dataset.lectureExpand === 'wiki' ? 'Wiki' : '관련 문항') + ' 전체화면으로 확대';
    button.setAttribute('aria-label',label);
    button.setAttribute('aria-pressed',String(active));
    button.title = label;
    button.textContent = active ? '↙' : '−';
  });
  syncLectureStudyView(course);
}
function resetLectureStudyExpansion() {
  document.body.classList.remove('lecture-pane-expanded');
  for (const state of lectureStudyStates.values()) state.expanded = '';
  const workspace = document.querySelector('.lecture-workspace');
  if (workspace) {
    workspace.dataset.expanded = '';
    workspace.querySelectorAll('[data-lecture-pane]').forEach(section => { section.inert = false; section.removeAttribute('aria-hidden'); });
  }
}
function bindLectureTabSwipe(bar, course) {
  bar._lectureSwipeCleanup?.();
  let start = null, suppressClickUntil = 0;
  let previewPane = null;
  const minDistance = 48, horizontalRatio = 1.15, verticalDistance = 24;
  const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const resetPreview = () => {
    if (previewPane) { previewPane.style.removeProperty('transform');previewPane.style.removeProperty('filter'); }
    previewPane = null;
  };
  const release = id => {
    try { if (bar.hasPointerCapture?.(id)) bar.releasePointerCapture(id); } catch (_) {}
  };
  const cancel = event => {
    // Touch initially captures the pressed child (e.g. a tab button). Its
    // capture-loss event bubbles when we take over; that is not a cancellation.
    if (event?.type === 'lostpointercapture' && event.target !== bar) return;
    if (event && start && event.pointerId !== start.id) return;
    const gesture = start; start = null;
    if (gesture?.horizontal) suppressClickUntil = Date.now()+500;
    resetPreview();
    if (gesture) release(gesture.id);
  };
  const down = event => {
    if (!window.RespiratoryGestures.isEnabled()) { cancel(); return; }
    if (event.isPrimary === false) { cancel(); return; }
    if ((event.button != null && event.button !== 0) || event.target.closest('input,select,textarea,[contenteditable="true"]')) return;
    cancel();
    // A fresh tap after a swipe is intentional, not its synthetic trailing click.
    suppressClickUntil = 0;
    start = {id:event.pointerId,x:event.clientX,y:event.clientY,horizontal:false};
  };
  const move = event => {
    if (!window.RespiratoryGestures.isEnabled()) { cancel(); return; }
    if (!start || event.pointerId !== start.id) return;
    const dx = Math.abs(event.clientX-start.x), dy = Math.abs(event.clientY-start.y);
    // Keep a small undecided zone for natural diagonal starts. Clear vertical
    // gestures still belong to the browser's native scroll/pinch handling.
    if (!start.horizontal && dy >= verticalDistance && dy > dx*1.35) { cancel(); return; }
    if (!start.horizontal && dx >= 14 && dx > dy*horizontalRatio) {
      start.horizontal = true;
      try { bar.setPointerCapture?.(event.pointerId); } catch (_) {}
    }
    if (start.horizontal) {
      // Retain the horizontal intent through normal hand drift, but let an
      // obvious turn into a vertical gesture cancel without changing tabs.
      if (dy > Math.max(64,dx*1.6)) { cancel(); return; }
      if (!reducedMotion()) {
        previewPane = document.querySelector('.lecture-pane:not([hidden])');
        if (previewPane) {
          previewPane.getAnimations?.().forEach(animation => animation.cancel());
          previewPane.style.transform = `translateX(${Math.max(-12,Math.min(12,(event.clientX-start.x)*.1))}px)`;
          previewPane.style.filter = `blur(${Math.min(.7,dx/160)}px)`;
        }
      }
      if (event.cancelable) event.preventDefault();
    }
  };
  const up = event => {
    if (!window.RespiratoryGestures.isEnabled()) { cancel(); return; }
    if (!start || event.pointerId !== start.id) return;
    const gesture = start; start = null;
    resetPreview();
    const dx = Math.abs(event.clientX-gesture.x), dy = Math.abs(event.clientY-gesture.y);
    if (gesture.horizontal || dx >= 10) suppressClickUntil = Date.now()+500;
    release(event.pointerId);
    // No speed or duration limit: a deliberate slow drag is also a swipe.
    // Once intent is established, do not reject it just for the release angle.
    if (dx < minDistance || (gesture.horizontal ? dy > Math.max(64,dx*1.6) : dx <= dy*horizontalRatio)) return;
    const state = lectureStudyState(course);
    const views = ['wiki','j'];
    if (String(lectureNoteSources[course.id]||'').trim()) views.push('jbl');
    const nextIndex = views.indexOf(state.view) + (event.clientX < gesture.x ? 1 : -1);
    if (nextIndex < 0 || nextIndex >= views.length) return;
    setLectureStudyView(course,views[nextIndex]);
    if (!reducedMotion()) {
      const pane = document.querySelector('.lecture-pane:not([hidden])');
      pane?.getAnimations?.().forEach(animation => animation.cancel());
      pane?.animate?.([
        {transform:`translateX(${event.clientX < gesture.x ? 14 : -14}px)`,filter:'blur(.7px)',opacity:.82},
        {transform:'translateX(0)',filter:'blur(0)',opacity:1}
      ],{duration:280,easing:'cubic-bezier(.2,.75,.25,1)'});
    }
  };
  const click = event => {
    if (Date.now() < suppressClickUntil && event.detail !== 0) {
      event.preventDefault();event.stopImmediatePropagation();
    }
  };
  const preferenceChanged = () => { cancel(); suppressClickUntil = 0; };
  document.addEventListener('study-gestures-change',preferenceChanged);
  bar.addEventListener('pointerdown',down);
  bar.addEventListener('pointermove',move);
  bar.addEventListener('pointerup',up);
  bar.addEventListener('pointercancel',cancel);
  bar.addEventListener('lostpointercapture',cancel);
  bar.addEventListener('click',click,true);
  bar._lectureSwipeCleanup = () => {
    cancel();
    document.removeEventListener('study-gestures-change',preferenceChanged);
    bar.removeEventListener('pointerdown',down);bar.removeEventListener('pointermove',move);
    bar.removeEventListener('pointerup',up);bar.removeEventListener('pointercancel',cancel);
    bar.removeEventListener('lostpointercapture',cancel);bar.removeEventListener('click',click,true);
  };
}
function renderLectureStudy(course, target) {
  const bar = document.querySelector('#detail-view .detail-topline');
  bar?.querySelector('.lecture-view-tabs')?.remove();
  if (bar) {
    // Include the coloured bar's padding, not just its inner title row.
    bar._lectureSwipeCleanup?.();
    bindLectureTabSwipe(bar.closest('.detail-bar') || bar,course);
    const tabs = document.createElement('div');
    tabs.className = 'lecture-view-tabs';
    tabs.setAttribute('role','group');
    tabs.setAttribute('aria-label','강의 화면 선택');
    tabs.innerHTML = '<button type="button" data-lecture-view="wiki" aria-controls="lecture-wiki">Wiki</button><button type="button" data-lecture-view="j" aria-controls="lecture-questions">J</button><button type="button" data-lecture-view="jbl" aria-controls="lecture-questions" ' + (String(lectureNoteSources[course.id]||'').trim() ? '' : 'disabled title="Wiki가 준비되면 사용할 수 있습니다."') + '>JBL</button>';
    bar.insertBefore(tabs, bar.querySelector('.detail-course-controls'));
    tabs.querySelectorAll('button').forEach(button => button.addEventListener('click', () => setLectureStudyView(course,button.dataset.lectureView)));
  }
  lectureStudyState(course).view = activeDetailTab === 'JBL' && String(lectureNoteSources[course.id]||'').trim() ? 'jbl' : activeDetailTab === 'KMLE' || activeDetailTab === 'JBL' ? 'j' : 'wiki';
  target.innerHTML = '<div class="lecture-workspace" data-lecture-course="' + course.id + '">' +
    '<section class="lecture-pane lecture-wiki-pane" data-lecture-pane="wiki" aria-label="강의 Wiki">' +
      '<header class="lecture-pane-head" data-lecture-head="wiki"><strong>Wiki</strong><button type="button" class="lecture-pane-expand" data-lecture-expand="wiki">−</button></header>' +
      '<div class="lecture-pane-body" data-course-wiki id="lecture-wiki"></div></section>' +
    '<section class="lecture-pane lecture-j-pane" data-lecture-pane="j" aria-label="관련 문항">' +
      '<header class="lecture-pane-head" data-lecture-head="j"><label class="lecture-chapter-label"><span class="sr-only">관련 문항 범위</span><select data-lecture-chapter aria-label="관련 문항 범위"></select></label><button type="button" class="lecture-pane-expand" data-lecture-expand="j">−</button></header>' +
      '<div class="lecture-pane-body" data-course-j-host id="lecture-questions"></div>' +
      '<nav class="jbl-inline-nav" data-course-j-nav aria-label="관련 문항 탐색"></nav></section></div>';
  const wiki = target.querySelector('[data-course-wiki]');
  if (!renderLectureNote(course,wiki)) wiki.innerHTML = '<div class="study-empty-wiki">Wiki가 아직 준비되지 않았습니다.</div>';
  target.querySelectorAll('[data-lecture-expand]').forEach(button => button.addEventListener('click', () => {
    setLectureStudyExpanded(course,lectureStudyState(course).expanded === button.dataset.lectureExpand ? '' : button.dataset.lectureExpand);
  }));
  target.querySelectorAll('[data-lecture-head]').forEach(head => head.addEventListener('dblclick',event => {
    if (event.target.closest('button,select,option')) return;
    setLectureStudyExpanded(course,lectureStudyState(course).expanded === head.dataset.lectureHead ? '' : head.dataset.lectureHead);
  }));
  target.querySelector('[data-lecture-chapter]').addEventListener('change',event => {
    const view=lectureStudyState(course);
    if (view.view==='jbl') view.jblChapter=event.target.value;
    else view.chapter=event.target.value;
    viewerState(lectureStudyViewerKey(course)).index = 0;
    renderCourseJ(course);
    scrollLectureStudyQuestion(target.querySelector('[data-course-j-host]'));
  });
  renderCourseJ(course);
  setLectureStudyExpanded(course,lectureStudyState(course).expanded);
}
function handleLectureStudyLink(link, target) {
  if (contextLinkState.active || !link.closest('.lecture-workspace')) return false;
  const workspace = link.closest('.lecture-workspace');
  const course = byId(Number(workspace.dataset.lectureCourse));
  if (!course) return false;
  if (target.type === 'j') {
    // Preserve the Wiki and let the shared split viewer use its document sequence.
    return false;
  }
  if (target.type === 'wiki' && target.courseId === Number(course.id)) {
    setLectureStudyView(course,'wiki');
    queueWikiSectionScroll(workspace.querySelector('[data-course-wiki]'),target.section);
    return true;
  }
  return false;
}
document.addEventListener('keydown',event => {
  if (event.key !== 'Escape' || event.defaultPrevented || contextLinkState.active || document.querySelector('dialog[open],.wiki-section-editor-overlay,#jbl-image-modal.show')) return;
  const workspace = document.querySelector('#detail-view:not([hidden]) .lecture-workspace');
  if (!workspace?.dataset.expanded) return;
  event.preventDefault();
  const pane = workspace.dataset.expanded;
  setLectureStudyExpanded(byId(Number(workspace.dataset.lectureCourse)), '');
  workspace.querySelector('[data-lecture-expand="' + pane + '"]')?.focus({preventScroll:true});
});
// One question/answer workspace for standalone, course and linked J viewers.
// The original viewer stays intact behind it; both cards share its answer state.
const questionExplanationViewers = new WeakMap();
const questionExplanationState = { active:false, rendering:false, split:null };

function openQuestionExplanationSplit(state, question, rerender) {
  const viewer = questionExplanationViewers.get(state);
  if (!viewer || !question || state.editing) return;
  if (questionExplanationState.active) closeQuestionExplanationSplit(false);
  const split = document.createElement('div');
  split.className = 'context-link-split jbl-explanation-split';
  split.setAttribute('role','group');
  split.setAttribute('aria-label','문제와 해설 나란히 보기');
  split.innerHTML = `<section class="context-link-source jbl-explanation-question" aria-label="문제"><div data-explanation-question-root></div><nav class="context-question-nav" data-explanation-question-nav aria-label="문항 탐색"></nav></section><aside class="context-link-target" aria-label="해설"><header class="context-link-head" title="더블클릭으로 전체화면 전환"><strong class="context-link-title">${escapeHtml(question.displayId)} 해설</strong><div class="context-link-controls"><button class="context-link-control context-link-expand" type="button" data-explanation-expand aria-label="해설 전체화면으로 확대" aria-pressed="false">−</button><button class="context-link-control context-link-close" type="button" data-explanation-close aria-label="해설 닫기">×</button></div></header><div class="context-link-body" data-explanation-body tabindex="-1"></div></aside>`;
  const suspended = [document.querySelector('main'), contextLinkState.active ? contextLinkState.target : null]
    .filter(Boolean).map(element => ({element,inert:element.inert,hidden:element.getAttribute('aria-hidden')}));
  for (const {element} of suspended) {
    element.inert = true;
    element.setAttribute('aria-hidden','true');
    element.setAttribute('data-explanation-suspended','');
  }
  Object.assign(questionExplanationState,{active:true,rendering:false,split,state,question,viewer,rerender,suspended,
    expanded:false,root:split.querySelector('[data-explanation-question-root]'),nav:split.querySelector('[data-explanation-question-nav]'),
    body:split.querySelector('[data-explanation-body]'),revision:0});
  document.body.append(split);
  document.body.classList.add('jbl-explanation-open');
  split.querySelector('[data-explanation-close]').addEventListener('click',()=>closeQuestionExplanationSplit());
  split.querySelector('[data-explanation-expand]').addEventListener('click',toggleQuestionExplanationExpanded);
  split.querySelector('.context-link-head').addEventListener('dblclick',event=>{
    if (event.target.closest('button,a,input,textarea,select')) return;
    event.preventDefault();toggleQuestionExplanationExpanded();
  });
  syncQuestionExplanationSplit();
  split.querySelector('[data-explanation-close]').focus({preventScroll:true});
}

function syncQuestionExplanationSplit() {
  const panel = questionExplanationState;
  if (!panel.active || panel.rendering) return;
  const viewer = questionExplanationViewers.get(panel.state);
  const current = viewer?.questions[panel.state.index];
  if (!current || current.id !== panel.question.id || !panel.state.explanationShown[current.id] || panel.state.editing) {
    closeQuestionExplanationSplit(false, !current || current.id !== panel.question.id || Boolean(panel.state.editing), false);
    return;
  }
  panel.viewer = viewer;
  panel.rendering = true;
  const scroll = panel.root.scrollTop, answerScroll = panel.body.scrollTop;
  try {
    renderQuestionCard(panel.root,viewer.questions,viewer.key,viewer.rerender);
    // Duplicate preview IDs must never shadow the live editor or Wiki anchors.
    namespaceContextPreviewIds(panel.root,`explanation-question-${++panel.revision}`);
    panel.body.innerHTML = questionExplanationMarkup(current);
    namespaceContextPreviewIds(panel.body,`explanation-answer-${panel.revision}`);
    bindWikiDocument(panel.body,byId(current.lectureIds?.[0]) || emptyRenderCourse);
    const context = viewer.key.startsWith('context-link-question-');
    const position = context ? contextQuestionPosition(contextLinkState.stack.at(-1)) : null;
    const questions = context ? position.numbers.map(n=>jblQuestions.find(q=>q.globalNumber===n)) : viewer.questions;
    panel.nav.innerHTML = navMarkup({...panel.state,index:context ? position.index : panel.state.index},questions);
    panel.nav.querySelector('[data-jbl-explanation]').addEventListener('click',()=>closeQuestionExplanationSplit());
    bindQuestionPageNav(panel.nav,moveQuestionExplanation);
    panel.root.scrollTop = scroll;
    panel.body.scrollTop = answerScroll;
  } finally { panel.rendering = false; }
}

function closeQuestionExplanationSplit(restoreFocus = true, conceal = true, rerender = true, animate = restoreFocus !== false) {
  const panel = questionExplanationState;
  if (!panel.active) return;
  const {state,question,viewer,suspended,split} = panel;
  if (animate && animateSplitClose(split, () => {
    if (panel.split === split) closeQuestionExplanationSplit(restoreFocus, conceal, rerender, false);
  })) return;
  cancelSplitCloseMotion(split);
  panel.active = false;
  if (conceal) {
    state.answerShown[question.id] = false;
    state.explanationShown[question.id] = false;
    (state.feedbackHidden ||= {})[question.id] = true;
  }
  hideWikiFootnotePreview();
  for (const {element,inert,hidden} of suspended) {
    element.inert = inert;
    if (hidden == null) element.removeAttribute('aria-hidden');
    else element.setAttribute('aria-hidden',hidden);
    element.removeAttribute('data-explanation-suspended');
  }
  split.remove();
  document.body.classList.remove('jbl-explanation-open');
  Object.assign(panel,{split:null,root:null,body:null,nav:null,viewer:null,state:null,question:null,suspended:[],expanded:false});
  if (rerender) viewer.rerender();
  if (restoreFocus) {
    const nav = viewer.key.startsWith('context-link-question-') ? contextLinkState.nav
      : document.querySelector(viewer.key==='jbl-all' ? '#jbl-standalone .jbl-bottom-inner' : '[data-course-j-nav]');
    nav?.querySelector('[data-jbl-explanation]')?.focus({preventScroll:true});
  }
}

function moveQuestionExplanation(direction) {
  const panel = questionExplanationState;
  if (!panel.active || ![-1,1].includes(direction)) return;
  const {viewer,state} = panel;
  if (viewer.key.startsWith('context-link-question-')) {
    const {numbers,index}=contextQuestionPosition(contextLinkState.stack.at(-1));
    if (index+direction<0 || index+direction>=numbers.length) return;
    closeQuestionExplanationSplit(false);
    moveContextWikiQuestion(direction);
  } else {
    if (state.index+direction<0 || state.index+direction>=viewer.questions.length) return;
    closeQuestionExplanationSplit(false);
    state.index+=direction;
    // Moving never reveals the following answer automatically.
    const next=viewer.questions[state.index];
    state.answerShown[next.id]=false;state.explanationShown[next.id]=false;
    viewer.rerender();scrollCurrentQuestionToTop(viewer.key);
  }
}

function toggleQuestionExplanationExpanded() {
  const panel=questionExplanationState;
  if (!panel.active) return;
  panel.expanded=!panel.expanded;
  panel.split.classList.toggle('is-expanded',panel.expanded);
  const source=panel.split.querySelector('.context-link-source');
  source.inert=panel.expanded;
  source.setAttribute('aria-hidden',String(panel.expanded));
  const button=panel.split.querySelector('[data-explanation-expand]');
  button.setAttribute('aria-pressed',String(panel.expanded));
  button.setAttribute('aria-label',panel.expanded ? '문제와 해설 분할 화면으로 돌아가기' : '해설 전체화면으로 확대');
}

function handleQuestionExplanationShortcut(event) {
  if (event.defaultPrevented || event.repeat || event.isComposing || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
  if (document.querySelector('dialog[open],.wiki-section-editor-overlay,#jbl-image-modal.show')) return;
  if (event.target.closest?.('input,textarea,select,[contenteditable="true"]')) return;
  if (event.key==='Escape') {event.preventDefault();closeQuestionExplanationSplit();return;}
  if (event.target.closest?.('button,a') && !event.target.closest('[data-explanation-question-nav]')) return;
  if (event.code==='Space') {event.preventDefault();closeQuestionExplanationSplit();}
  else if (event.key==='ArrowLeft' || event.key==='ArrowRight') {event.preventDefault();moveQuestionExplanation(event.key==='ArrowRight'?1:-1);}
}

// Question gestures are separate from the lecture title's Wiki/J/JBL swipe.
// Touch Events let us cancel only an intentional horizontal drag, without
// disabling native vertical scrolling, pinch zoom, or scrollable tables.
(function bindQuestionGestures() {
  const excluded = 'button,a,input,select,textarea,label,summary,[role="button"],[contenteditable],img,video,canvas,iframe,table,pre,nav,.jbl-editor,.wiki-section-editor,.context-link-head,.lecture-pane-head,.jbl-topbar';
  const surfaces = '[data-jbl-choice-viewer],.jbl-card,.jbl-card-head,.jbl-card-body,.jbl-choices,.jbl-meta,.jbl-meta-right,.jbl-author-source,.jbl-page-block,.jbl-passage,.jbl-passage-text,.jbl-wrap,#jbl-standalone,#jbl-view,[data-course-j-host],.lecture-j-pane,.context-link-body,.context-link-target,.jbl-explanation-question,[data-explanation-body]';
  const scopes = '[data-jbl-choice-viewer],.jbl-wrap,#jbl-standalone,#jbl-view,[data-course-j-host],.lecture-j-pane,.context-link-body,.context-link-target,.jbl-explanation-question';
  let gesture = null, lastTap = null, touchDoubleUntil = 0, pendingClick = null;
  const blocked = () => !window.RespiratoryGestures.isEnabled() || Boolean(document.querySelector('dialog[open],.wiki-section-editor-overlay,#jbl-image-modal.show'));
  const selectedText = () => Boolean(window.getSelection?.()?.toString().trim());

  function contextFor(target, blankOnly = false) {
    if (!(target instanceof Element) || blocked() || selectedText()) return null;
    if (target.closest(excluded+', [hidden], [inert], [aria-hidden="true"], .is-closing')) return null;
    if (blankOnly && !target.matches(surfaces)) return null;
    let root = target.closest('[data-jbl-choice-viewer]');
    if (!root && target.closest('[data-explanation-body]') && questionExplanationState.active) root = questionExplanationState.root;
    if (!root && target.matches(surfaces)) root = target.closest(scopes)?.querySelector('[data-jbl-choice-viewer]');
    if (!root?.isConnected || root.closest('[hidden],[inert],[aria-hidden="true"]')) return null;
    const viewer = root.questionViewer, state = viewer && viewerState(viewer.key);
    const question = viewer?.questions[state?.index];
    if (!question || state.editing) return null;
    let nav;
    if (root.hasAttribute('data-explanation-question-root')) nav = questionExplanationState.nav;
    else if (viewer.key.startsWith('context-link-question-')) nav = contextLinkState.nav;
    else if (viewer.key === 'jbl-all') nav = root.closest('#jbl-standalone')?.querySelector('.jbl-bottom-inner');
    else nav = root.closest('.lecture-j-pane')?.querySelector('[data-course-j-nav]');
    return nav ? {root, viewer, state, question, nav, id:viewer.key+':'+question.id} : null;
  }

  function perform(context, direction = 0) {
    if (!context || !context.root.isConnected || blocked() || selectedText() || context.state.editing) return false;
    if (context.root.closest('[hidden],[inert],[aria-hidden="true"],.is-closing') || context.viewer.questions[context.state.index]?.id !== context.question.id) return false;
    const selector = direction < 0 ? '[data-jbl-prev],[data-context-question-prev]'
      : direction > 0 ? '[data-jbl-next],[data-context-question-next]' : '[data-jbl-explanation]';
    const button = context.nav.querySelector(selector);
    if (!button || button.disabled || button.getAttribute('aria-disabled') === 'true') return false;
    // Use the existing controls to preserve Wiki order, filters, answer state,
    // scroll restoration, and the split pane's opening/closing animation.
    button.click();
    return true;
  }

  function horizontallyScrollable(target) {
    for (let node = target; node instanceof Element && node !== document.body; node = node.parentElement) {
      if (node.scrollWidth > node.clientWidth + 2 && /auto|scroll/.test(getComputedStyle(node).overflowX)) return true;
    }
    return false;
  }
  const cancel = () => { gesture = null; lastTap = null; };
  document.addEventListener('study-gestures-change',() => {
    cancel(); pendingClick = null; touchDoubleUntil = 0;
  });
  const suppressCompatibilityClick = point => { pendingClick = {x:point.clientX,y:point.clientY,until:Date.now()+650}; };

  document.addEventListener('dblclick', event => {
    if (event.defaultPrevented || (event.button != null && event.button !== 0)) return;
    const context = contextFor(event.target,true);
    if (!context) return;
    event.preventDefault();
    // Some browsers also synthesize dblclick after our two touchend events.
    if (Date.now() < touchDoubleUntil) return;
    perform(context);
  });

  document.addEventListener('touchstart', event => {
    pendingClick = null; // A fresh intentional tap must work immediately.
    if (event.defaultPrevented || event.touches.length !== 1) { cancel(); return; }
    const context = contextFor(event.target);
    if (!context || horizontallyScrollable(event.target)) { cancel(); return; }
    const point = event.touches[0];
    // Leave the iOS screen-edge history gesture alone.
    if (point.clientX < 24 || point.clientX > window.innerWidth-24) { cancel(); return; }
    gesture = {context,target:event.target,touchId:point.identifier,x:point.clientX,y:point.clientY,
      time:Date.now(),maxDistance:0,horizontal:false,blank:Boolean(contextFor(event.target,true))};
  },{passive:true});

  document.addEventListener('touchmove', event => {
    if (!gesture) return;
    if (event.touches.length !== 1 || event.defaultPrevented || selectedText()) { cancel(); return; }
    const point = event.touches[0];
    if (point.identifier !== gesture.touchId) { cancel(); return; }
    const dx = Math.abs(point.clientX-gesture.x), dy = Math.abs(point.clientY-gesture.y);
    gesture.maxDistance = Math.max(gesture.maxDistance,dx,dy);
    if (!gesture.horizontal && dy >= 12 && dy >= dx) { cancel(); return; }
    if (!gesture.horizontal && dx >= 14 && dx > dy*1.5) { gesture.horizontal = true; lastTap = null; }
    if (gesture.horizontal) {
      if (dy > Math.max(64,dx)) { cancel(); return; }
      if (!event.cancelable) { cancel(); return; }
      event.preventDefault();
    }
  },{passive:false});

  document.addEventListener('touchend', event => {
    const finished = gesture; gesture = null;
    if (!finished) return;
    const point = Array.from(event.changedTouches).find(touch => touch.identifier === finished.touchId);
    if (!point || event.touches.length || event.defaultPrevented || selectedText()) { lastTap = null; return; }
    const context = contextFor(finished.target);
    if (!context || context.id !== finished.context.id || context.root !== finished.context.root) { lastTap = null; return; }
    const dx = point.clientX-finished.x, dy = point.clientY-finished.y;
    const distance = Math.max(Math.abs(dx),Math.abs(dy),finished.maxDistance);
    if (finished.horizontal) {
      lastTap = null;
      if (event.cancelable) event.preventDefault();
      suppressCompatibilityClick(point);
      // Deliberate slow swipes count too; speed is not a requirement.
      if (Math.abs(dx) >= 48 && Math.abs(dx) > Math.abs(dy)*1.35) perform(context,dx < 0 ? 1 : -1);
      return;
    }
    if (!finished.blank || distance > 10 || Date.now()-finished.time > 350) { lastTap = null; return; }
    const now = Date.now();
    if (lastTap && lastTap.id === context.id && now-lastTap.time <= 340 && Math.hypot(point.clientX-lastTap.x,point.clientY-lastTap.y) <= 28) {
      lastTap = null; touchDoubleUntil = now+650;
      if (event.cancelable) event.preventDefault();
      suppressCompatibilityClick(point);
      perform(context);
    } else lastTap = {id:context.id,time:now,x:point.clientX,y:point.clientY};
  },{passive:false});

  document.addEventListener('touchcancel',cancel,{passive:true});
  document.addEventListener('click',event => {
    if (!pendingClick || event.detail === 0) return;
    const pending = pendingClick; pendingClick = null;
    if (Date.now() <= pending.until && Math.hypot(event.clientX-pending.x,event.clientY-pending.y) <= 40) {
      event.preventDefault();event.stopImmediatePropagation();
    }
  },true);
})();

