/* Small, buildless UI layer. Course/question/notes storage remains in the main app. */
(() => {
  'use strict';
  if (new URLSearchParams(location.search).get('examPreview') === '1') return;
  const app = window.RespiratoryStudy;
  if (!app) return;
  const shell = document.querySelector('.masthead');
  const syncHeaderHeight=()=>document.documentElement.style.setProperty('--study-header-height',shell.getBoundingClientRect().height+'px');
  const headerObserver=new ResizeObserver(syncHeaderHeight);
  headerObserver.observe(shell);
  syncHeaderHeight();
  const actions = shell.querySelector('.top-actions');
  document.body.classList.add('study-ui');
  const icons = {
    collapse:'<path d="M5 12h14"/>',
    expand:'<path d="M5 12h14M12 5v14"/>',
    correct:'<circle cx="12" cy="12" r="8"/>',
    uncertain:'<path d="M12 4 22 21H2Z"/>',
    wrong:'<path d="m5 5 14 14M19 5 5 19"/>',
    favorite:'<path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9Z"/>',
    shuffle:'<path d="M3 6h3c5 0 7 12 12 12h3m-4-4 4 4-4 4M3 18h3c5 0 7-12 12-12h3m-4-4 4 4-4 4"/>',
    hand:'<path d="M18 11V7a2 2 0 0 0-4 0v4M14 10V5a2 2 0 0 0-4 0v6M10 10.5V7a2 2 0 0 0-4 0v9M18 8a2 2 0 0 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-1-6-3l-3.6-4.8a2 2 0 0 1 3.2-2.4L6 13"/>',
    edit:'<path d="m15 5 4 4M4 20l4-1L20 7a2.8 2.8 0 0 0-4-4L4 15l-1 6Z"/>',
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
  const dialog=document.createElement('dialog');dialog.id='study-control-center';dialog.setAttribute('aria-label','도구');document.body.append(dialog);
  const recall=document.createElement('button');
  recall.type='button';recall.className='study-lecture-recall';recall.hidden=true;
  recall.setAttribute('aria-label','강의 제목 바 펼치기');recall.setAttribute('aria-expanded','false');
  recall.innerHTML='<span aria-hidden="true"></span>';document.body.append(recall);
  let recalledBar=null,barPlaceholder=null;
  function closeRecalledBar() {
    recalledBar?.classList.remove('is-recalled');
    barPlaceholder?.remove();barPlaceholder=null;recalledBar=null;
    recall.setAttribute('aria-expanded','false');recall.setAttribute('aria-label','강의 제목 바 펼치기');
  }
  function syncLectureRecall() {
    if(document.body.classList.contains('context-link-open')){
      closeRecalledBar();recall.hidden=true;return;
    }
    const bar=document.querySelector('#detail-view:not([hidden]) .detail-bar');
    if(!bar || (recalledBar && recalledBar!==bar))closeRecalledBar();
    if(!bar){recall.hidden=true;return;}
    const edge=shell.getBoundingClientRect().bottom;
    const rect=(barPlaceholder||bar).getBoundingClientRect();
    const outside=rect.bottom<=edge+1;
    if(!outside && recalledBar)closeRecalledBar();
    recall.hidden=!outside;
  }
  recall.addEventListener('click',()=>{
    if(recalledBar){closeRecalledBar();syncLectureRecall();return;}
    const bar=document.querySelector('#detail-view:not([hidden]) .detail-bar');if(!bar)return;
    barPlaceholder=document.createElement('div');barPlaceholder.className='study-lecture-placeholder';
    const rect=bar.getBoundingClientRect();barPlaceholder.style.height=rect.height+'px';
    bar.before(barPlaceholder);recalledBar=bar;bar.classList.add('is-recalled');
    recall.setAttribute('aria-expanded','true');recall.setAttribute('aria-label','강의 제목 바 접기');
  });
  document.addEventListener('scroll',syncLectureRecall,{passive:true,capture:true});
  document.addEventListener('context-link-visibility',syncLectureRecall);
  document.addEventListener('lecture-question-navigation',()=>{closeRecalledBar();syncLectureRecall();});
  window.addEventListener('resize',syncLectureRecall);
  new MutationObserver(syncLectureRecall).observe(document.querySelector('main'),{childList:true,subtree:true,attributes:true,attributeFilter:['hidden']});
  const minScale=.5, maxScale=1.5;
  let returnFocus=null, sourceScroll=0, scale=1;
  let closeTimer=null, motionVersion=0, travel=120;
  const reducedMotion=()=>window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function reveal(progress, dragging=false) {
    const value=Math.max(0,Math.min(1,progress));
    dialog.classList.toggle('is-dragging',dragging);
    dialog.style.setProperty('--study-center-y',(-travel*(1-value))+'px');
    dialog.style.setProperty('--study-center-opacity',String(value));
    dialog.style.setProperty('--study-center-backdrop',String(value));
  }
  function stopClosing() {
    motionVersion++;
    if(closeTimer!==null){window.clearTimeout(closeTimer);closeTimer=null;}
    dialog.classList.remove('is-closing');
  }
  try {const stored=Number(localStorage.getItem('respiratory-reading-scale-v1'));if(stored>=minScale && stored<=maxScale)scale=stored;} catch(_) {}
  function setScale(value) {
    scale=Math.round(Math.min(maxScale,Math.max(minScale,value))*100)/100;
    document.documentElement.style.setProperty('--study-text-scale',String(scale));
    try{localStorage.setItem('respiratory-reading-scale-v1',String(scale));}catch(_){}
    dialog.querySelector('output')?.replaceChildren(Math.round(scale*100)+'%');
    const minus=dialog.querySelector('[data-scale-minus]'),plus=dialog.querySelector('[data-scale-plus]');
    if(minus)minus.disabled=scale<=minScale;if(plus)plus.disabled=scale>=maxScale;
  }
  setScale(scale);
  function finishClose() {
    stopClosing();
    dialog.removeAttribute('data-preview');
    dialog.classList.remove('is-dragging');
    if(!returnFocus)return;
    document.body.classList.remove('study-center-open');
    tools.setAttribute('aria-expanded','false');
    const opener=returnFocus;returnFocus=null;
    window.scrollTo({top:sourceScroll,behavior:'auto'});
    if(opener.isConnected)opener.focus({preventScroll:true});
  }
  function close(animated=false) {
    if(!dialog.open&&!dialog.hasAttribute('data-preview'))return;
    stopClosing();
    const finish=()=>{if(dialog.open){if(dialog.close)dialog.close();else dialog.removeAttribute('open');}finishClose();};
    if(!animated||reducedMotion()){finish();return;}
    dialog.classList.add('is-closing');reveal(0);
    const version=motionVersion;
    closeTimer=window.setTimeout(()=>{if(version===motionVersion)finish();},260);
  }
  const dismiss=()=>close(true);
  const visibleRoot=()=>document.querySelector('main>.view:not([hidden])');
  function proxy(selector) {close();visibleRoot()?.querySelector(selector)?.click();}
  function syncGestureButton() {
    const toggle=dialog.querySelector('[data-center-gestures]');
    if(!toggle)return;
    const enabled=window.RespiratoryGestures.isEnabled();
    toggle.dataset.enabled=String(enabled);
    toggle.querySelector('[data-gesture-label]').textContent=enabled?'제스처 끄기':'제스처 켜기';
    toggle.title='스와이프·해설 더블클릭 '+(enabled?'켜짐':'꺼짐');
  }
  function renderTools() {
    const expandedFilters=new Set(Array.from(dialog.querySelectorAll('[data-center-multi][open]'),element=>element.dataset.centerMulti));
    const scrollTop=dialog.scrollTop;
    const state=app.context(),root=visibleRoot(), isJ=state.hash.startsWith('#jbl');
    const questionFilters=app.questionFilterContext();
    if(questionFilters){state.filters=questionFilters.filters;state.randomEnabled=questionFilters.randomEnabled;}
    const wiki=app.wikiTools();
    const question=app.questionTools();
    const documentEdit=root?.querySelector('[data-personal-action="edit"]');
    const canEditDocument=Boolean(documentEdit && !documentEdit.disabled && !documentEdit.closest('[hidden], [aria-hidden="true"]') && !document.querySelector('.context-link-split'));
    const editButton=(attr,label)=>`<button type="button" ${attr}><span class="study-edit-icon" aria-hidden="true">${svg('edit')}</span><span>${label}</span></button>`;
    const editActions=[
      wiki.editable ? editButton('data-center-wiki-edit','Wiki 편집') : '',
      question.available ? editButton('data-center-question-edit',question.editing ? '문항 편집 닫기' : '문항 편집') : '',
      canEditDocument ? editButton('data-center-proxy="[data-personal-action=&quot;edit&quot;]"','문서 편집') : ''
    ].join('');
    const filterIcons=[['correct','정답 문항'],['uncertain','보류 문항'],['wrong','오답 문항'],['favorite','즐겨찾기 문항']].map(([key,label])=>{
      const selected=key==='favorite'?state.filters.favoritesOnly:(state.filters.statuses||[]).includes(key)||(key==='wrong'&&state.filters.wrongOnly);
      return `<button type="button" class="study-filter-icon" data-center-status="${key}" aria-label="${label}" title="${label}" aria-pressed="${Boolean(selected)}">${svg(key)}</button>`;
    }).join('');
    const options=(items,selected,label)=>'<option value="">'+label+'</option>'+items.map(([value,text])=>`<option value="${escape(value)}" ${String(selected)===String(value)?'selected':''}>${escape(text)}</option>`).join('');
    const multiFilter=(key,label,items,allLabel)=>{
      const selected=new Set(app.filterValues(state.filters[key]));
      const summary=items.filter(([value])=>selected.has(String(value))).map(([,text,shortLabel=text])=>shortLabel).join(', ')||allLabel;
      return `<div class="study-multi-filter"><span id="study-filter-${key}">${label}</span><details data-center-multi="${key}" ${expandedFilters.has(key)?'open':''}><summary aria-label="${label} 복수 선택"><span data-center-multi-summary>${escape(summary)}</span></summary><div class="study-multi-options" role="group" aria-labelledby="study-filter-${key}"><button type="button" data-center-multi-clear="${key}" aria-pressed="${!selected.size}">${allLabel}</button>${items.map(([value,text,shortLabel=text])=>`<label><input type="checkbox" data-center-multi-value="${key}" data-summary-label="${escape(shortLabel)}" value="${escape(value)}" ${selected.has(String(value))?'checked':''}><span>${escape(text)}</span></label>`).join('')}</div></details></div>`;
    };
    const isJbl=questionFilters?.mode==='jbl';
    const chapterFilter=questionFilters?.course ? `<div class="study-center-filters"><label>${isJbl?'유형':'세부 분류'}<select data-center-chapter aria-label="관련 문항 범위">${options(questionFilters.chapters.map(item=>[item.slug,item.heading+' · '+item.count]),questionFilters.chapter,(isJbl?'전체 유형 · ':'전체 문항 · ')+questionFilters.total)}</select></label></div>` : '';
    dialog.innerHTML=`<button class="study-center-grip" type="button" aria-label="도구 닫기 · 위로 쓸어올리기"></button>
      <div class="study-center-controls"><div class="study-center-theme"><button type="button" class="theme-button" data-theme-toggle></button><span>화면 모드</span></div><div class="study-font-control" aria-label="글자 크기"><button type="button" data-scale-minus aria-label="글자 작게">A−</button><output>${Math.round(scale*100)}%</output><button type="button" data-scale-plus aria-label="글자 크게">A＋</button></div></div>
      <button type="button" class="study-random-toggle study-gesture-toggle" data-center-gestures><span class="study-filter-icon" aria-hidden="true">${svg('hand')}</span><span data-gesture-label></span></button>
      ${questionFilters ? `<section class="study-center-section"><h3>${isJbl?'학습 필터':'문항 필터'}</h3>${isJ ? `<div class="study-center-filters">${multiFilter('year','연도',state.years.map(y=>[y,y]),'전체 연도')}${multiFilter('lectureId','강의',state.courses.map(c=>[c.id,c.id+'강 '+c.title,c.id+'강']),'전체 강의')}${multiFilter('professor','출제교수',state.professors.map(p=>[p,p]),'전체 교수')}</div>` : ''}<div class="study-status-filters" role="group" aria-label="문항 상태 · 중복 선택 가능">${filterIcons}</div><button type="button" class="study-random-toggle" data-center-random aria-pressed="${state.randomEnabled}" aria-label="문항 순서 랜덤 ${state.randomEnabled?'켜짐':'꺼짐'}"><span class="study-filter-icon">${svg('shuffle')}</span><span>${isJbl?'유형 안 문항 순서 랜덤':'문항 순서 랜덤'}</span></button></section>` : ''}
      ${wiki.available ? `<section class="study-center-section"><h3>현재 화면</h3><button type="button" class="study-random-toggle" data-center-wiki-toggle aria-pressed="${wiki.collapsed}"><span class="study-filter-icon">${svg(wiki.collapsed ? 'expand' : 'collapse')}</span><span>${wiki.collapsed ? '모든 문단 펼치기' : '모든 문단 접기'}</span></button></section>` : ''}
      ${editActions ? `<section class="study-center-section study-edit-section"><h3>편집하기</h3><div class="study-edit-tools">${editActions}</div></section>` : ''}`;
    dialog.querySelector('[data-scale-minus]').onclick=()=>setScale(scale-.05);
    syncGestureButton();
    dialog.querySelector('[data-center-gestures]').addEventListener('click',()=>window.RespiratoryGestures.setEnabled(!window.RespiratoryGestures.isEnabled()));
    const statusFilters=dialog.querySelector('.study-status-filters');
    if(statusFilters && chapterFilter)statusFilters.insertAdjacentHTML('beforebegin',chapterFilter);
    dialog.querySelector('[data-center-chapter]')?.addEventListener('change',event=>{
      app.selectQuestionChapter(event.target.value);
      renderTools();dialog.querySelector('[data-center-chapter]')?.focus();
    });
    dialog.querySelector('[data-scale-plus]').onclick=()=>setScale(scale+.05);
    dialog.querySelector('[data-center-wiki-toggle]')?.addEventListener('click',()=>{close();app.toggleWiki();});
    dialog.querySelector('[data-center-wiki-edit]')?.addEventListener('click',()=>{close();app.editWiki();});
    dialog.querySelector('[data-center-question-edit]')?.addEventListener('click',()=>{close();app.editQuestion();});
    dialog.querySelectorAll('[data-center-proxy]').forEach(b=>b.onclick=()=>proxy(b.dataset.centerProxy));
    dialog.querySelectorAll('[data-center-filter]').forEach(input=>input.onchange=()=>{
      const value=input.type==='checkbox'?input.checked:input.value;
      app.filter({[input.dataset.centerFilter]:value});
    });
    const applyMultiFilter=(key,values)=>{
      app.filter({[key]:values});
      const group=dialog.querySelector(`[data-center-multi="${key}"]`);
      const selected=new Set(values);
      const labels=[];
      group.querySelectorAll('[data-center-multi-value]').forEach(input=>{
        input.checked=selected.has(input.value);
        if(input.checked)labels.push(input.dataset.summaryLabel||input.nextElementSibling.textContent);
      });
      const clear=group.querySelector('[data-center-multi-clear]');
      clear.setAttribute('aria-pressed',String(!selected.size));
      group.querySelector('[data-center-multi-summary]').textContent=labels.join(', ')||clear.textContent;
    };
    dialog.querySelectorAll('[data-center-multi-value]').forEach(input=>input.addEventListener('change',()=>{
      const key=input.dataset.centerMultiValue;
      const values=new Set(app.filterValues(app.context().filters[key]));
      if(input.checked)values.add(input.value);else values.delete(input.value);
      applyMultiFilter(key,[...values]);
    }));
    dialog.querySelectorAll('[data-center-multi-clear]').forEach(button=>button.onclick=()=>applyMultiFilter(button.dataset.centerMultiClear,[]));
    dialog.querySelectorAll('[data-center-status]').forEach(button=>button.onclick=()=>{
      const key=button.dataset.centerStatus,filters=app.questionFilterContext().filters;
      const statuses=new Set(filters.statuses||[]);
      if(filters.wrongOnly)statuses.add('wrong');
      if(key!=='favorite'){if(statuses.has(key))statuses.delete(key);else statuses.add(key);}
      app.filterQuestions({statuses:[...statuses],wrongOnly:false,favoritesOnly:key==='favorite'?!filters.favoritesOnly:filters.favoritesOnly});
      renderTools();dialog.querySelector(`[data-center-status="${key}"]`)?.focus();
    });
    dialog.querySelector('[data-center-random]')?.addEventListener('click',()=>{app.randomQuestions();renderTools();dialog.querySelector('[data-center-random]')?.focus();});
    gesture(dialog.querySelector('.study-center-grip'),-1,dismiss,dismiss);
    window.RespiratoryTheme.syncButtons();setScale(scale);dialog.scrollTop=scrollTop;
  }
  function positionTools() {
    // Fixed-position coordinates use the layout viewport; the visible viewport can
    // be smaller or offset by a keyboard, browser chrome, zoom, or device rotation.
    const edge=12, layoutWidth=document.documentElement.clientWidth||window.innerWidth;
    const viewport=window.visualViewport;
    const viewportLeft=viewport?.offsetLeft||0, viewportTop=viewport?.offsetTop||0;
    const viewportWidth=viewport?.width||layoutWidth, viewportHeight=viewport?.height||window.innerHeight;
    const style=getComputedStyle(dialog);
    const safe=side=>Math.max(0,parseFloat(style.getPropertyValue('--study-center-safe-'+side))||0);
    const leftBound=viewportLeft+Math.max(edge,safe('left'));
    const rightBound=viewportLeft+viewportWidth-Math.max(edge,safe('right'));
    const topBound=viewportTop+Math.max(edge,safe('top'));
    const bottomBound=viewportTop+viewportHeight-Math.max(edge,safe('bottom'));
    const width=Math.min(460,Math.max(0,rightBound-leftBound));
    const anchorRight=Math.max(leftBound+width,Math.min(tools.getBoundingClientRect().right,rightBound));
    const top=Math.max(topBound,Math.min(shell.getBoundingClientRect().bottom+8,bottomBound-84));
    const right=layoutWidth-anchorRight;
    dialog.style.setProperty('--study-center-top',top+'px');
    dialog.style.setProperty('--study-center-right',right+'px');
    dialog.style.setProperty('--study-center-width',width+'px');
    dialog.style.setProperty('--study-center-max-height',Math.max(0,bottomBound-top)+'px');
  }
  function prepare(opener) {
    stopClosing();
    shell.classList.remove('search-open');sourceScroll=window.scrollY;returnFocus=opener||tools;
    renderTools();positionTools();dialog.scrollTop=0;
    reveal(0,true);
    // Non-modal preview preserves the header's pointer capture throughout a pull.
    dialog.setAttribute('data-preview','');
    travel=Math.min(160,Math.max(96,dialog.getBoundingClientRect().height*.4));
    reveal(0,true);
    document.body.classList.add('study-center-open');
  }
  function open(opener) {
    if(dialog.open){stopClosing();reveal(1);return;}
    if(!dialog.hasAttribute('data-preview'))prepare(opener);
    stopClosing();
    if(dialog.showModal)dialog.showModal();else dialog.setAttribute('open','');
    dialog.removeAttribute('data-preview');
    // Flush the pulled position before settling, rather than popping to the end.
    dialog.getBoundingClientRect();
    reveal(1);tools.setAttribute('aria-expanded','true');
    dialog.querySelector('[data-theme-toggle]').focus({preventScroll:true});
  }
  function gesture(element,direction,onSwipe,onClick) {
    let start=null,ignoreClickUntil=0;
    element.addEventListener('pointerdown',e=>{
      if(!window.RespiratoryGestures.isEnabled())return;
      if(!e.isPrimary||e.button!==0)return;
      // Header swipes start only on its background, never on navigation or search controls.
      if(!onClick && e.target.closest('button, a, input, select, textarea'))return;
      if(direction===1&&(dialog.open||dialog.hasAttribute('data-preview')))return;
      if(dialog.classList.contains('is-closing'))return;
      start={id:e.pointerId,x:e.clientX,y:e.clientY,dragging:false,rejected:false};element.setPointerCapture?.(e.pointerId);
    });
    element.addEventListener('pointermove',e=>{
      if(!window.RespiratoryGestures.isEnabled()){cancel();return;}
      if(!start||e.pointerId!==start.id||start.rejected)return;
      const dx=e.clientX-start.x,dy=e.clientY-start.y,distance=dy*direction;
      if(!start.dragging){
        if(Math.abs(dx)>10&&Math.abs(dx)>Math.abs(dy)){start.rejected=true;return;}
        if(distance<8||Math.abs(dy)<Math.abs(dx)*1.4)return;
        start.dragging=true;
        if(direction===1)prepare(tools);else stopClosing();
      }
      if(e.cancelable)e.preventDefault();
      reveal(direction===1 ? distance/120 : 1-distance/120,true);
    });
    const cancel=()=>{
      if(!start)return;
      const {dragging:wasDragging,id}=start;start=null;ignoreClickUntil=Date.now()+600;
      try{element.releasePointerCapture?.(id);}catch(_){}
      if(wasDragging){if(direction===1)close(true);else reveal(1);}
    };
    element._studyGestureCancel=()=>{cancel();ignoreClickUntil=0;};
    element.addEventListener('pointerup',e=>{
      if(!window.RespiratoryGestures.isEnabled()){cancel();return;}
      if(!start||e.pointerId!==start.id)return;
      const gestureState=start,dx=e.clientX-start.x,dy=e.clientY-start.y;start=null;
      try{element.releasePointerCapture?.(e.pointerId);}catch(_){}
      if(Math.max(Math.abs(dx),Math.abs(dy))>10)ignoreClickUntil=Date.now()+600;
      if(!gestureState.rejected&&dy*direction>=40&&Math.abs(dy)>Math.abs(dx)*1.4)onSwipe(element);
      else if(gestureState.dragging){if(direction===1)close(true);else reveal(1);}
    });
    element.addEventListener('pointercancel',cancel);
    element.addEventListener('lostpointercapture',cancel);
    element.addEventListener('click',()=>{if(Date.now()>ignoreClickUntil)onClick?.(element);});
  }
  gesture(shell.querySelector('.masthead-inner'),1,()=>open(tools),null);
  document.addEventListener('study-gestures-change',()=>{
    shell.querySelector('.masthead-inner')._studyGestureCancel?.();
    dialog.querySelector('.study-center-grip')?._studyGestureCancel?.();
    syncGestureButton();
  });
  tools.onclick=()=>dialog.open?dismiss():open(tools);
  search.onclick=()=>{close();shell.classList.toggle('search-open');const expanded=shell.classList.contains('search-open');search.setAttribute('aria-expanded',String(expanded));if(expanded)shell.querySelector('[data-global-search-input]').focus();};
  dialog.addEventListener('cancel',e=>{e.preventDefault();dismiss();});
  dialog.addEventListener('close',()=>{if(!dialog.open&&!dialog.hasAttribute('data-preview'))finishClose();});
  dialog.addEventListener('click',e=>{if(e.target!==dialog)return;const rect=dialog.getBoundingClientRect();if(e.clientX<rect.left||e.clientX>rect.right||e.clientY<rect.top||e.clientY>rect.bottom)dismiss();});
  document.addEventListener('keydown',e=>{if(e.key==='Escape')shell.classList.remove('search-open');});
  document.addEventListener('click',e=>{if(shell.classList.contains('search-open')&&!shell.contains(e.target))shell.classList.remove('search-open');});
  window.addEventListener('hashchange',()=>close());window.addEventListener('popstate',()=>close());
  const repositionTools=()=>{if(dialog.open||dialog.hasAttribute('data-preview'))positionTools();};
  window.addEventListener('resize',repositionTools,{passive:true});
  window.visualViewport?.addEventListener('resize',repositionTools,{passive:true});
  window.visualViewport?.addEventListener('scroll',repositionTools,{passive:true});
  new ResizeObserver(repositionTools).observe(shell);
})();
