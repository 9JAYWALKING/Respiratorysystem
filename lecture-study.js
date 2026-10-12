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
  const activeNumber = lectureStudyQuestions(course)[viewerState('course-' + course.id).index]?.globalNumber;
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
  const chapters = lectureStudyChapters(course).filter(chapter => chapter.numbers.length);
  const total = jblQuestions.filter(question => questionBelongsToCourse(question, course.id)).length;
  select.innerHTML = '<option value="">전체 문항 · ' + total + '</option>' + chapters.map(chapter =>
    '<option value="' + escapeHtml(chapter.slug) + '">' + escapeHtml(chapter.heading) + ' · ' + chapter.numbers.length + '</option>'
  ).join('');
  select.value = state.chapter;
  refreshLectureStudyLinks(course);
}
function syncLectureStudyView(course) {
  const state = lectureStudyState(course);
  const view = state.expanded || state.view || 'wiki';
  const workspace = document.querySelector('#content-panel .lecture-workspace');
  if (!workspace) return;
  workspace.dataset.view = view;
  document.body.classList.toggle('lecture-j-active', view === 'j');
  workspace.querySelectorAll('[data-lecture-pane]').forEach(section => {
    const hidden = section.dataset.lecturePane !== view;
    section.hidden = hidden;
    section.inert = hidden;
    section.setAttribute('aria-hidden', String(hidden));
  });
  document.querySelectorAll('[data-lecture-view]').forEach(button => {
    button.setAttribute('aria-pressed', String(button.dataset.lectureView === view));
  });
}
function setLectureStudyView(course, view) {
  lectureStudyState(course).view = view;
  activeDetailTab = view === 'j' ? 'KMLE' : '정리본';
  setLectureStudyExpanded(course, '');
  history.replaceState({...(history.state || {}), detailTab:activeDetailTab}, '', location.href);
}
function setLectureStudyExpanded(course, pane) {
  const workspace = document.querySelector('#content-panel .lecture-workspace');
  if (!workspace) return;
  const state = lectureStudyState(course);
  state.expanded = pane || '';
  if (pane) state.view = pane;
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
  const minDistance = 32, horizontalRatio = 1.15, verticalDistance = 24;
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
    if (event.isPrimary === false) { cancel(); return; }
    if ((event.button != null && event.button !== 0) || event.target.closest('input,select,textarea,[contenteditable="true"]')) return;
    cancel();
    // A fresh tap after a swipe is intentional, not its synthetic trailing click.
    suppressClickUntil = 0;
    start = {id:event.pointerId,x:event.clientX,y:event.clientY,horizontal:false};
  };
  const move = event => {
    if (!start || event.pointerId !== start.id) return;
    const dx = Math.abs(event.clientX-start.x), dy = Math.abs(event.clientY-start.y);
    // Keep a small undecided zone for natural diagonal starts. Clear vertical
    // gestures still belong to the browser's native scroll/pinch handling.
    if (!start.horizontal && dy >= verticalDistance && dy > dx*1.35) { cancel(); return; }
    if (!start.horizontal && dx >= 10 && dx > dy*horizontalRatio) {
      start.horizontal = true;
      try { bar.setPointerCapture?.(event.pointerId); } catch (_) {}
    }
    if (start.horizontal) {
      if (!reducedMotion()) {
        previewPane = document.querySelector('.lecture-pane:not([hidden])');
        if (previewPane) {
          previewPane.getAnimations?.().forEach(animation => animation.cancel());
          previewPane.style.transform = `translateX(${Math.max(-18,Math.min(18,(event.clientX-start.x)*.15))}px)`;
          previewPane.style.filter = `blur(${Math.min(1.4,dx/70)}px)`;
        }
      }
      if (event.cancelable) event.preventDefault();
    }
  };
  const up = event => {
    if (!start || event.pointerId !== start.id) return;
    const gesture = start; start = null;
    resetPreview();
    const dx = Math.abs(event.clientX-gesture.x), dy = Math.abs(event.clientY-gesture.y);
    if (gesture.horizontal || dx >= 10) suppressClickUntil = Date.now()+500;
    release(event.pointerId);
    if (dx < minDistance || dx <= dy*horizontalRatio) return;
    const state = lectureStudyState(course);
    setLectureStudyView(course,(state.expanded || state.view) === 'wiki' ? 'j' : 'wiki');
    if (!reducedMotion()) {
      const pane = document.querySelector('.lecture-pane:not([hidden])');
      pane?.getAnimations?.().forEach(animation => animation.cancel());
      pane?.animate?.([
        {transform:`translateX(${event.clientX < gesture.x ? 18 : -18}px)`,filter:'blur(1.4px)',opacity:.65},
        {transform:'translateX(0)',filter:'blur(0)',opacity:1}
      ],{duration:240,easing:'cubic-bezier(.2,.75,.25,1)'});
    }
  };
  const click = event => {
    if (Date.now() < suppressClickUntil && event.detail !== 0) {
      event.preventDefault();event.stopImmediatePropagation();
    }
  };
  bar.addEventListener('pointerdown',down);
  bar.addEventListener('pointermove',move);
  bar.addEventListener('pointerup',up);
  bar.addEventListener('pointercancel',cancel);
  bar.addEventListener('lostpointercapture',cancel);
  bar.addEventListener('click',click,true);
  bar._lectureSwipeCleanup = () => {
    cancel();
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
    tabs.innerHTML = '<button type="button" data-lecture-view="wiki" aria-controls="lecture-wiki">Wiki</button><button type="button" data-lecture-view="j" aria-controls="lecture-questions">J</button>';
    bar.insertBefore(tabs, bar.querySelector('.detail-course-controls'));
    tabs.querySelectorAll('button').forEach(button => button.addEventListener('click', () => setLectureStudyView(course,button.dataset.lectureView)));
  }
  lectureStudyState(course).view = activeDetailTab === 'KMLE' ? 'j' : 'wiki';
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
    lectureStudyState(course).chapter = event.target.value;
    viewerState('course-' + course.id).index = 0;
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
    panel.nav.querySelector('[data-jbl-prev]').addEventListener('click',()=>moveQuestionExplanation(-1));
    panel.nav.querySelector('[data-jbl-next]').addEventListener('click',()=>moveQuestionExplanation(1));
    panel.root.scrollTop = scroll;
    panel.body.scrollTop = answerScroll;
  } finally { panel.rendering = false; }
}

function closeQuestionExplanationSplit(restoreFocus = true, conceal = true, rerender = true) {
  const panel = questionExplanationState;
  if (!panel.active) return;
  const {state,question,viewer,suspended,split} = panel;
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

