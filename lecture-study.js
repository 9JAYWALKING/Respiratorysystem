/* Keep both reading states mounted, but show only the selected lecture tab. */
const lectureStudyStates = new Map();
function scrollLectureStudyQuestion(pane) {
  if (!pane) return;
  pane.scrollTop = 0;
  if (window.matchMedia('(max-width: 900px)').matches && !pane.closest('.lecture-workspace')?.dataset.expanded) {
    pane.closest('.lecture-pane')?.scrollIntoView({block:'start', behavior:'auto'});
  }
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
function renderLectureStudy(course, target) {
  const bar = document.querySelector('#detail-view .detail-topline');
  bar?.querySelector('.lecture-view-tabs')?.remove();
  if (bar) {
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
    const chapter = lectureStudyChapters(course).find(item =>
      item.slug === link.dataset.studyChapter && item.numbers.includes(target.questionNumber)
    ) || lectureStudyChapters(course).find(item => item.numbers.includes(target.questionNumber));
    const question = jblQuestions.find(item => Number(item.globalNumber) === target.questionNumber);
    if (!question || (!chapter && !questionBelongsToCourse(question,course.id))) return false;
    lectureStudyState(course).chapter = chapter?.slug || '';
    const questions = lectureStudyQuestions(course);
    viewerState('course-' + course.id).index = questions.findIndex(item => Number(item.globalNumber) === target.questionNumber);
    setLectureStudyView(course,'j');
    renderCourseJ(course);
    const pane = workspace.querySelector('[data-course-j-host]');
    scrollLectureStudyQuestion(pane);
    const heading = pane.querySelector('.jbl-title');
    if (heading) { heading.setAttribute('tabindex','-1'); heading.focus({preventScroll:true}); }
    return true;
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
