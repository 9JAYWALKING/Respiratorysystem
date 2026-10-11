/* Small, buildless UI layer. Course/question/notes storage remains in the main app. */
(() => {
  'use strict';
  if (new URLSearchParams(location.search).get('examPreview') === '1') return;
  const app = window.RespiratoryStudy;
  if (!app) return;
  const shell = document.querySelector('.masthead');
  const actions = shell.querySelector('.top-actions');
  document.body.classList.add('study-ui');
  const icons = {
    search:'<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/>',
    tools:'<path d="M4 6h16M4 12h16M4 18h16"/><circle cx="9" cy="6" r="2" fill="currentColor"/><circle cx="15" cy="12" r="2" fill="currentColor"/><circle cx="8" cy="18" r="2" fill="currentColor"/>'
  };
  const svg = name => '<svg viewBox="0 0 24 24" aria-hidden="true">'+icons[name]+'</svg>';
  const escape = value => String(value ?? '').replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const button = (attr,label,icon) => {
    const el=document.createElement('button');el.type='button';el.className='study-icon-button';el.setAttribute(attr,'');el.setAttribute('aria-label',label);el.title=label;el.innerHTML=svg(icon);return el;
  };
  const search=button('data-study-search','Wiki · J 검색','search');
  const tools=button('data-study-tools','도구 열기','tools');
  tools.setAttribute('aria-haspopup','dialog');tools.setAttribute('aria-controls','study-control-center');tools.setAttribute('aria-expanded','false');
  actions.prepend(search);actions.append(tools);
  const context=document.createElement('span');context.dataset.studyContext='';
  shell.querySelector('.masthead-inner').insertBefore(context,actions);
  const dialog=document.createElement('dialog');dialog.id='study-control-center';dialog.setAttribute('aria-label','도구');document.body.append(dialog);
  let returnFocus=null, sourceScroll=0, scale=1;
  try {const stored=Number(localStorage.getItem('respiratory-reading-scale-v1'));if(stored>=.85 && stored<=1.3)scale=stored;} catch(_) {}
  function setScale(value) {
    scale=Math.round(Math.min(1.3,Math.max(.85,value))*100)/100;
    document.documentElement.style.setProperty('--study-text-scale',String(scale));
    try{localStorage.setItem('respiratory-reading-scale-v1',String(scale));}catch(_){}
    dialog.querySelector('output')?.replaceChildren(Math.round(scale*100)+'%');
    const minus=dialog.querySelector('[data-scale-minus]'),plus=dialog.querySelector('[data-scale-plus]');
    if(minus)minus.disabled=scale<=.85;if(plus)plus.disabled=scale>=1.3;
  }
  setScale(scale);
  function refreshNavigation() {
    const state=app.context(); const hash=state.hash;
    const course=state.courses.find(c=>hash==='#lecture-'+c.id);
    context.textContent=course ? course.id+'강 · '+course.title : hash.startsWith('#bookmarks')?'즐겨찾기':hash==='#jbl-wrong'?'오답 복습':hash.startsWith('#jbl')?'J':hash.startsWith('#schedule')?'시간표':'';
  }
  function finishClose() {
    if(!returnFocus)return;
    document.body.classList.remove('study-center-open');
    tools.setAttribute('aria-expanded','false');
    const opener=returnFocus;returnFocus=null;
    window.scrollTo({top:sourceScroll,behavior:'auto'});
    if(opener.isConnected)opener.focus({preventScroll:true});
  }
  function close() {if(dialog.open){if(dialog.close)dialog.close();else dialog.removeAttribute('open');}finishClose();}
  const visibleRoot=()=>document.querySelector('main>.view:not([hidden])');
  function proxy(selector) {close();visibleRoot()?.querySelector(selector)?.click();}
  function renderTools() {
    const state=app.context(),root=visibleRoot(), isJ=state.hash.startsWith('#jbl');
    const wiki=app.wikiTools();
    const proxyActions=[['[data-jbl-edit]','문항 편집'],['[data-personal-action="edit"]','문서 편집']].filter(([sel])=>root?.querySelector(sel));
    const options=(items,selected,label)=>'<option value="">'+label+'</option>'+items.map(([value,text])=>`<option value="${escape(value)}" ${String(selected)===String(value)?'selected':''}>${escape(text)}</option>`).join('');
    dialog.innerHTML=`<button class="study-center-grip" type="button" aria-label="도구 닫기 · 위로 쓸어올리기"></button>
      <div class="study-center-controls"><div class="study-center-theme"><button type="button" class="theme-button" data-theme-toggle></button><span>화면 모드</span></div><div class="study-font-control" aria-label="글자 크기"><button type="button" data-scale-minus aria-label="글자 작게">A−</button><output>${Math.round(scale*100)}%</output><button type="button" data-scale-plus aria-label="글자 크게">A＋</button></div></div>
      ${isJ ? `<section class="study-center-section"><h3>문항 필터</h3><div class="study-center-filters"><label>연도<select data-center-filter="year">${options(state.years.map(y=>[y,y]),state.filters.year,'전체 연도')}</select></label><label>강의<select data-center-filter="lectureId">${options(state.courses.map(c=>[c.id,c.id+'강 '+c.title]),state.filters.lectureId,'전체 강의')}</select></label><label>출제교수<select data-center-filter="professor">${options(state.professors.map(p=>[p,p]),state.filters.professor,'전체 교수')}</select></label><label><input type="checkbox" data-center-filter="favoritesOnly" ${state.filters.favoritesOnly?'checked':''}>즐겨찾기 문항만</label><label><input type="checkbox" data-center-filter="wrongOnly" ${state.filters.wrongOnly?'checked':''}>오답 문항만</label></div><form class="study-center-jump"><input name="number" inputmode="numeric" aria-label="문항 번호" placeholder="J 번호로 이동"><button type="submit">이동</button></form><div class="study-tool-buttons" style="margin-top:10px"><button type="button" data-center-random>무작위 순서</button></div></section>` : ''}
      ${wiki.available || wiki.editable || proxyActions.length ? `<section class="study-center-section"><h3>현재 화면</h3><div class="study-tool-buttons">${wiki.available ? `<button type="button" data-center-wiki-toggle aria-pressed="${wiki.collapsed}">${wiki.collapsed ? '모두 펼치기' : '모두 접기'}</button>` : ''}${wiki.editable ? '<button type="button" data-center-wiki-edit>Wiki 편집</button>' : ''}${proxyActions.map(([sel,label])=>`<button type="button" data-center-proxy="${escape(sel)}">${label}</button>`).join('')}</div></section>` : ''}`;
    dialog.querySelector('[data-scale-minus]').onclick=()=>setScale(scale-.05);
    dialog.querySelector('[data-scale-plus]').onclick=()=>setScale(scale+.05);
    dialog.querySelector('[data-center-wiki-toggle]')?.addEventListener('click',()=>{close();app.toggleWiki();});
    dialog.querySelector('[data-center-wiki-edit]')?.addEventListener('click',()=>{close();app.editWiki();});
    dialog.querySelectorAll('[data-center-proxy]').forEach(b=>b.onclick=()=>proxy(b.dataset.centerProxy));
    dialog.querySelectorAll('[data-center-filter]').forEach(input=>input.onchange=()=>{
      const value=input.type==='checkbox'?input.checked:input.value;
      app.filter({[input.dataset.centerFilter]:value});refreshNavigation();
    });
    const jump=dialog.querySelector('.study-center-jump');
    if(jump)jump.onsubmit=e=>{e.preventDefault();const value=jump.querySelector('input').value.trim();if(!value)return;close();app.jump(value);refreshNavigation();};
    dialog.querySelector('[data-center-random]')?.addEventListener('click',()=>{close();app.random();});
    gesture(dialog.querySelector('.study-center-grip'),-1,close,close);
    window.RespiratoryTheme.syncButtons();setScale(scale);
  }
  function positionTools() {
    const edge=12, viewportWidth=window.innerWidth, viewportHeight=window.innerHeight;
    const top=Math.max(edge,Math.min(shell.getBoundingClientRect().bottom+8,viewportHeight-84));
    const right=Math.max(edge,Math.min(viewportWidth-tools.getBoundingClientRect().right,viewportWidth-edge));
    dialog.style.setProperty('--study-center-top',top+'px');
    dialog.style.setProperty('--study-center-right',right+'px');
  }
  function open(opener) {
    if(dialog.open)return;
    shell.classList.remove('search-open');sourceScroll=window.scrollY;returnFocus=opener||tools;
    renderTools();positionTools();
    if(dialog.showModal)dialog.showModal();else dialog.setAttribute('open','');
    document.body.classList.add('study-center-open');tools.setAttribute('aria-expanded','true');
    dialog.querySelector('[data-theme-toggle]').focus({preventScroll:true});
  }
  function gesture(element,direction,onSwipe,onClick) {
    let start=null,ignoreClickUntil=0;
    element.addEventListener('pointerdown',e=>{
      if(!e.isPrimary||e.button!==0)return;
      // Header swipes start only on its background, never on navigation or search controls.
      if(!onClick && e.target.closest('button, a, input, select, textarea'))return;
      start={id:e.pointerId,x:e.clientX,y:e.clientY};element.setPointerCapture?.(e.pointerId);
    });
    element.addEventListener('pointerup',e=>{
      if(!start||e.pointerId!==start.id)return;
      const dx=e.clientX-start.x,dy=e.clientY-start.y;start=null;
      if(Math.max(Math.abs(dx),Math.abs(dy))>10)ignoreClickUntil=Date.now()+600;
      if(dy*direction>=40&&Math.abs(dy)>Math.abs(dx)*1.4)onSwipe(element);
    });
    element.addEventListener('pointercancel',()=>{start=null;ignoreClickUntil=Date.now()+600;});
    element.addEventListener('click',()=>{if(Date.now()>ignoreClickUntil)onClick?.(element);});
  }
  gesture(shell.querySelector('.masthead-inner'),1,()=>open(tools),null);
  tools.onclick=()=>dialog.open?close():open(tools);
  search.onclick=()=>{close();shell.classList.toggle('search-open');const expanded=shell.classList.contains('search-open');search.setAttribute('aria-expanded',String(expanded));if(expanded)shell.querySelector('[data-global-search-input]').focus();};
  dialog.addEventListener('cancel',e=>{e.preventDefault();close();});dialog.addEventListener('close',finishClose);
  dialog.addEventListener('click',e=>{if(e.target!==dialog)return;const rect=dialog.getBoundingClientRect();if(e.clientX<rect.left||e.clientX>rect.right||e.clientY<rect.top||e.clientY>rect.bottom)close();});
  document.addEventListener('keydown',e=>{if(e.key==='Escape')shell.classList.remove('search-open');});
  document.addEventListener('click',e=>{if(shell.classList.contains('search-open')&&!shell.contains(e.target))shell.classList.remove('search-open');});
  window.addEventListener('hashchange',()=>{close();refreshNavigation();});window.addEventListener('popstate',()=>{close();refreshNavigation();});
  window.addEventListener('resize',()=>{if(dialog.open)positionTools();});
  const observer=new MutationObserver(()=>refreshNavigation());
  document.querySelectorAll('main>.view').forEach(view=>observer.observe(view,{attributes:true,attributeFilter:['hidden']}));
  refreshNavigation();
})();
