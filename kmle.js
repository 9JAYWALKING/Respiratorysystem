/* Independent KMLE learning bank. Never writes to J records. */
(() => {
  'use strict';
  const data = window.RESPIRATORY_KMLE_DATA;
  const KEY = 'respiratory-kmle-progress-v1';
  let root, config, current = null, picked = [], revealed = false, explanation = false, expanded = false;
  let records = {}, storageAvailable = true, explanationReturnY = 0, navObserver;
  try { records = JSON.parse(localStorage.getItem(KEY) || '{}'); if (!records || Array.isArray(records) || typeof records !== 'object') records = {}; } catch (_) { records = {}; }
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const sourceLabel = q => q.source.replace(/\s*변형\s*$/u, '').trim();
  const groups = new Map(data.categories.flatMap(c => c.groups.map(g => [g.key, {...g,category:c.title}])));
  const qById = new Map(data.questions.map(q => [q.id,q]));
  const state = q => records[q.key] || {};
  function persist(q, patch) {
    records[q.key] = {...state(q), ...patch, updatedAt:Date.now()};
    try { localStorage.setItem(KEY, JSON.stringify(records)); storageAvailable = true; } catch (_) { storageAvailable = false; }
  }
  function navigate(id) {
    if (location.hash === '#kmle' + (id ? '-'+id : '')) return;
    location.hash = '#kmle' + (id ? '-'+id : '');
  }
  const courseName = id => config.courses.find(c => Number(c.id) === Number(id))?.title || `${id}강`;
  const lectureLinks = ids => [...new Set(ids || [])].map(id => `<a href="#lecture-${id}" title="${esc(courseName(id))}">${id}강 · ${esc(courseName(id))}</a>`).join('');
  function renderMap() {
    navObserver?.disconnect();
    current = null;
    root.className = 'kmle-root';
    root.innerHTML = `<header class="kmle-heading"><div><h1>국시 호흡기계</h1><p>${data.questions.length}문항 · 유형별 K번호</p></div><button class="kmle-primary" data-k-start>K1부터 풀기 →</button></header>
      <div class="kmle-map-tools"><input type="search" placeholder="질환·검사·출처 검색" aria-label="국시 문항 검색" data-k-search><span class="kmle-small">원문을 바탕으로 다듬은 학습용 변형 문항</span></div>
      <div class="kmle-categories" data-k-blank></div>`;
    const grid = root.querySelector('.kmle-categories');
    function draw() {
      const query = root.querySelector('[data-k-search]').value.trim().toLowerCase();
      grid.innerHTML = data.categories.map((cat, i) => {
        const parts = cat.groups.map(g => {
          const qs = data.questions.filter(q => q.group===g.key && (!query || `${cat.title} ${g.title} ${q.id} ${q.question} ${q.source}`.toLowerCase().includes(query)));
          if (!qs.length) return '';
          return `<details class="kmle-group" ${query?'open':''}><summary>${esc(g.title)} <span>${qs.length}</span></summary><nav class="kmle-question-links">${qs.map(q=>`<a href="#kmle-${q.id}" title="${esc(sourceLabel(q))}" class="${state(q).status==='x'?'is-wrong':state(q).status==='o'?'is-right':''}">${q.id}${state(q).favorite?' ★':''}</a>`).join('')}</nav><div class="kmle-lecture-links">${lectureLinks(qs.flatMap(q=>q.tags || []))}</div></details>`;
        }).join('');
        return parts ? `<section class="kmle-category"><h2><span>${String(i+1).padStart(2,'0')}</span>${esc(cat.title)}</h2>${parts}</section>` : '';
      }).join('') || '<p class="kmle-empty">검색 결과가 없습니다.</p>';
    }
    root.querySelector('[data-k-start]').onclick=()=>navigate('K1');
    root.querySelector('[data-k-search]').oninput=draw;
    // Only truly empty grid background starts the bank, never headings, links, or a drag.
    let start;
    grid.onpointerdown=e=>{start={x:e.clientX,y:e.clientY,time:Date.now()};};
    grid.onclick=e=>{
      if(e.target===grid && start && Date.now()-start.time<500 && Math.hypot(e.clientX-start.x,e.clientY-start.y)<8) navigate('K1');
    };
    draw();
  }
  function answerText(q) { return q.answers.map(a=>`${a}번 ${q.choices[a-1]}`).join(' / '); }
  function resultFor(q) { return picked.length===q.answers.length && picked.every(a=>q.answers.includes(a)); }
  function grade() {
    if (!picked.length) return;
    persist(current,{selected:[...picked],status:resultFor(current)?'o':'x',graded:true});
    revealed=true;
    renderQuestion(false);
  }
  function choose(n) {
    if (current.answers.length>1) picked = picked.includes(n) ? picked.filter(v=>v!==n) : [...picked,n].sort((a,b)=>a-b);
    else picked = picked.includes(n) ? [] : [n];
    // A new attempt supersedes manual status only when it is actually graded.
    persist(current,{selected:[...picked],graded:false});
    revealed=false;
    renderQuestion(false);
  }
  function explanationHTML(q) {
    const g=groups.get(q.group);
    return `<div class="kmle-explanation-body"><div class="kmle-answer">정답: ${esc(answerText(q))}</div>
      <h3>핵심 풀이</h3><p>${esc(q.reasoning)}</p>
      ${g.concepts.length?`<h3>함께 알아둘 개념</h3><table><tbody>${g.concepts.map(([a,b])=>`<tr><th>${esc(a)}</th><td>${esc(b)}</td></tr>`).join('')}</tbody></table>`:''}
      <h3>선지별 해설</h3><ol>${q.choiceExplanations.map((text,i)=>`<li class="${q.answers.includes(i+1)?'kmle-correct-explanation':''}"><strong>${esc(q.choices[i])}</strong><p>${esc(text)}</p></li>`).join('')}</ol>
      <h3>관련 강의</h3><div class="kmle-lecture-links">${lectureLinks(q.tags)}</div>
      ${q.references?.length?`<details class="kmle-adaptation"><summary>보충 근거</summary><div class="kmle-lecture-links">${q.references.map(([title,url])=>`<a href="${esc(url)}" target="_blank" rel="noopener noreferrer">${esc(title)}</a>`).join('')}</div></details>`:''}
      <details class="kmle-adaptation"><summary>학습용 변형 안내</summary><p>${esc(q.modification)}</p>${q.image?`<p>${esc(q.imageNote)}</p>`:'<p>사진 없이도 판단할 수 있도록 필요한 소견을 발문에 명시했다.</p>'}<p>이 문항의 채점 기준은 학습용 변형에 대한 기준이며 원시험의 공식 정답표를 재현한 것이 아니다.</p></details></div>`;
  }
  function renderQuestion(resetScroll=true) {
    const q=current, i=data.questions.indexOf(q), saved=state(q);
    const top = window.scrollY;
    const oldScroll = root.querySelector('.kmle-explanation')?.scrollTop || 0;
    root.className = `kmle-root kmle-question-view ${explanation?'has-explanation':''} ${expanded?'explanation-expanded':''}`;
    root.innerHTML = `<header class="kmle-bank-heading"><button data-k-map>‹ 유형 분류</button><span>${esc(groups.get(q.group).category)}</span><span class="kmle-small">${data.questions.length}문항</span></header>
      <div class="kmle-split">
      <article class="kmle-question jbl-card" aria-label="${q.id} 문제">
        <header class="jbl-card-head"><div class="jbl-meta"><div class="jbl-author-source"><div class="kmle-source jbl-source">${esc(sourceLabel(q))}</div></div><div class="jbl-meta-right">
          <button data-k-status class="study-answer-status is-${({o:'correct',triangle:'uncertain',x:'wrong'})[saved.status]||'unanswered'}" title="풀이 상태 변경" aria-label="풀이 상태 변경"><span data-study-status-symbol>${({o:'○',triangle:'△',x:'×'})[saved.status]||''}</span></button>
          <button class="jbl-qid" data-k-number aria-label="국시 고유번호로 이동">${q.id}</button>
          <input class="kmle-id jbl-number-input" value="${q.id}" aria-label="국시 고유번호 입력" inputmode="numeric" hidden>
          <button data-k-favorite class="jbl-favorite ${saved.favorite?'active':''}" aria-label="즐겨찾기" aria-pressed="${!!saved.favorite}">${saved.favorite?'★':'☆'}</button>
        </div></div><h2 class="kmle-stem jbl-title">${esc(q.question)}</h2></header>
        <div class="kmle-question-body jbl-card-body">
          ${q.image?`<div class="kmle-image jbl-page-block"><figure style="margin:0"><img class="jbl-page-img" data-jbl-image src="${esc(q.image)}" alt="문항의 진단 소견을 보여주는 학습용 대체 영상"><figcaption>학습용 대체 영상 · 원시험 사진 아님</figcaption></figure></div>`:''}
          <div class="kmle-choices jbl-choices" role="group" aria-label="선지">${q.choices.map((choice,idx)=>{
            const n=idx+1,selected=picked.includes(n),correct=q.answers.includes(n);
            return `<button class="kmle-choice jbl-choice ${selected?'selected':''} ${revealed&&correct?'correct':''} ${revealed&&selected&&!correct?'wrong':''}" data-k-choice="${n}" aria-pressed="${selected}"><span class="jbl-choice-num">${n}</span><span>${esc(choice)}</span></button>`;
          }).join('')}</div>
          ${q.answers.length>1?`<div class="kmle-multiple"><span>복수선택 · ${picked.length}개 선택</span><button data-k-grade ${picked.length?'':'disabled'}>선택 답안 확인</button></div>`:''}
          ${revealed&&!explanation?`<div class="jbl-answer-box" role="status">정답: ${esc(answerText(q))}</div>`:''}
          ${!storageAvailable?'<p role="alert">브라우저 저장 공간에 기록하지 못했습니다. 현재 화면에서는 계속 풀 수 있습니다.</p>':''}
        </div>
      </article>
      <aside class="kmle-explanation ${explanation?'open':''}" aria-label="상세 해설" ${explanation?'':'hidden'}><header><strong>상세 해설 · ${q.id}</strong><button data-k-expand aria-label="${expanded?'분할화면으로':'해설 전체화면'}">−</button><button data-k-close aria-label="해설 닫기">×</button></header>${explanation?explanationHTML(q):''}</aside>
      </div>
      <nav class="kmle-bottom jbl-bottom-nav" aria-label="국시 문항 이동"><div class="jbl-bottom-inner"><div class="jbl-nav-actions"><button class="jbl-btn jbl-btn-primary jbl-nav-explanation" data-k-explanation aria-pressed="${explanation}">${explanation?'해설 닫기':'해설 보기'}</button><button class="jbl-btn jbl-btn-primary jbl-nav-answer" data-k-answer aria-pressed="${revealed}">${revealed?'정답 숨김':'정답 보기'}</button></div><div class="jbl-nav-pages"><button class="jbl-btn jbl-btn-primary jbl-nav-previous" data-k-prev ${i===0?'disabled':''}><span class="jbl-nav-arrow">← </span>이전<span class="jbl-nav-page-word"> 문제</span></button><span class="jbl-counter">${i+1} / ${data.questions.length}</span><button class="jbl-btn jbl-btn-primary jbl-nav-next" data-k-next ${i===data.questions.length-1?'disabled':''}>다음<span class="jbl-nav-page-word"> 문제</span><span class="jbl-nav-arrow"> →</span></button></div></div></nav>`;
    root.querySelector('[data-k-map]').onclick=()=>navigate();
    root.querySelectorAll('[data-k-choice]').forEach(el=>el.onclick=()=>{
      choose(Number(el.dataset.kChoice));
      if(q.answers.length===1 && picked.length) grade();
    });
    root.querySelector('[data-k-grade]')?.addEventListener('click',grade);
    root.querySelector('[data-k-favorite]').onclick=()=>{persist(q,{favorite:!state(q).favorite});renderQuestion(false);};
    root.querySelector('[data-k-status]').onclick=()=>{
      const states=['','o','triangle','x'];persist(q,{status:states[(states.indexOf(state(q).status||'')+1)%states.length]});renderQuestion(false);
    };
    const idInput=root.querySelector('.kmle-id');
    const idButton=root.querySelector('[data-k-number]');
    idButton.onclick=()=>{idButton.hidden=true;idInput.hidden=false;idInput.focus();idInput.select();};
    function jump() {
      const n=Number(idInput.value.replace(/^k/i,'').trim());
      if(Number.isInteger(n)&&qById.has('K'+n)) navigate('K'+n);else idInput.value=q.id;
      idInput.hidden=true;idButton.hidden=false;
    }
    idInput.onkeydown=e=>{if(e.key==='Enter'){jump();idInput.blur();}if(e.key==='Escape'){idInput.value=q.id;idInput.blur();}};
    idInput.onblur=jump;
    root.querySelector('[data-k-answer]').onclick=()=>{
      if(!revealed&&picked.length)grade();else{revealed=!revealed;renderQuestion(false);}
    };
    root.querySelector('[data-k-explanation]').onclick=toggleExplanation;
    root.querySelector('[data-k-close]').onclick=closeExplanation;
    root.querySelector('[data-k-expand]').onclick=()=>{expanded=!expanded;renderQuestion(false);};
    root.querySelector('.kmle-explanation header').ondblclick=e=>{
      if(e.target.closest('button'))return;expanded=!expanded;renderQuestion(false);
    };
    root.querySelector('[data-k-prev]').onclick=()=>move(-1);
    root.querySelector('[data-k-next]').onclick=()=>move(1);
    config.bindImages?.(root);
    navObserver?.disconnect();
    navObserver=new ResizeObserver(entries=>{
      const height=entries[0].target.getBoundingClientRect().height;
      if(height)root.style.setProperty('--k-nav-height',height+'px');
    });
    navObserver.observe(root.querySelector('.kmle-bottom'));
    if(!resetScroll){
      window.scrollTo({top,behavior:'instant'});
      const pane=root.querySelector('.kmle-explanation');if(pane)pane.scrollTop=oldScroll;
    }
  }
  function move(delta) {
    if(!current)return;
    const q=data.questions[data.questions.indexOf(current)+delta];if(q)navigate(q.id);
  }
  function toggleExplanation() {
    if(explanation)return closeExplanation();
    explanationReturnY=window.scrollY;
    explanation=true;
    if(picked.length&&!revealed)persist(current,{selected:[...picked],status:resultFor(current)?'o':'x',graded:true});
    revealed=true;renderQuestion(false);
    if(matchMedia('(max-width:760px)').matches)root.querySelector('.kmle-explanation').scrollIntoView({block:'start',behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});
  }
  function closeExplanation() {
    const pane=root.querySelector('.kmle-explanation');
    if(!explanation)return;
    const closingId=current?.id;
    pane?.classList.add('closing');
    setTimeout(()=>{
      if(current?.id!==closingId)return;
      explanation=false;expanded=false;renderQuestion(false);
      if(matchMedia('(max-width:760px)').matches)window.scrollTo({top:explanationReturnY,behavior:'instant'});
    },matchMedia('(prefers-reduced-motion: reduce)').matches?0:160);
  }
  const gesturesEnabled=()=>window.RespiratoryGestures?.isEnabled?.()!==false;
  // Delegate once: the question is rerendered on selection, while the reading
  // surface includes the empty page below it. Keep explanation/UI controls out.
  (()=>{
    const excluded='button,a,input,img,select,textarea,label,summary,[role="button"],[contenteditable],nav,table,pre,video,canvas,iframe,.kmle-bank-heading,.kmle-explanation,.masthead';
    let clearTimer=null,gesture=null,lastTap=null,suppressUntil=0,touchDoubleUntil=0,mouseDown=null;
    const cancelClear=()=>{clearTimeout(clearTimer);clearTimer=null;};
    const selectedText=()=>!!window.getSelection?.()?.toString().trim();
    function surface(target,x,y,blank=false){
      if(!current||!root?.isConnected||!location.hash.startsWith('#kmle-K')||expanded||selectedText())return false;
      if(root.closest('[hidden],[inert]')||document.querySelector('dialog[open],#jbl-image-modal.show,.wiki-section-editor-overlay'))return false;
      if(!(target instanceof Element)||target.closest(excluded+', [hidden], [inert]'))return false;
      const card=root.querySelector('.kmle-question'),rect=card?.getBoundingClientRect();
      const bottom=root.querySelector('.kmle-bottom')?.getBoundingClientRect().top??innerHeight;
      if(!rect||x<rect.left||x>rect.right||y<Math.max(rect.top,document.querySelector('.masthead')?.getBoundingClientRect().bottom||0)||y>=bottom)return false;
      if(card.contains(target))return !blank||target.matches('.kmle-question,.jbl-card-head,.jbl-card-body,.jbl-meta,.jbl-author-source,.jbl-meta-right,.kmle-choices,.kmle-multiple');
      // Only the real question column's background, including page space past root.
      return target===root||target.matches('.kmle-split,#kmle-view,main,body,html');
    }
    function scheduleClear(){
      cancelClear();if(!picked.length&&!revealed)return;
      const question=current,container=root;
      clearTimer=setTimeout(()=>{
        clearTimer=null;
        if(current!==question||root!==container||!root.isConnected||!location.hash.startsWith('#kmle-K'))return;
        picked=[];revealed=false;
        // Clear the selection, not the last graded O/X record or favorite.
        persist(current,{selected:[],graded:false});renderQuestion(false);
      },500);
    }
    document.addEventListener('pointerdown',e=>{
      cancelClear();
      if(e.pointerType==='mouse'){suppressUntil=0;mouseDown={x:e.clientX,y:e.clientY};}
    },{passive:true});
    document.addEventListener('click',e=>{
      if(e.defaultPrevented||e.detail===0||e.button!==0||Date.now()<suppressUntil)return;
      if(mouseDown&&Math.hypot(e.clientX-mouseDown.x,e.clientY-mouseDown.y)>10){mouseDown=null;return;}
      mouseDown=null;
      if(surface(e.target,e.clientX,e.clientY,true))scheduleClear();
    });
    document.addEventListener('dblclick',e=>{
      if(e.defaultPrevented||e.button!==0||!gesturesEnabled()||!surface(e.target,e.clientX,e.clientY,true))return;
      e.preventDefault();cancelClear();
      if(Date.now()>=touchDoubleUntil)toggleExplanation();
    });
    document.addEventListener('touchstart',e=>{
      cancelClear();mouseDown=null;suppressUntil=0;
      if(e.touches.length!==1||!gesturesEnabled()){gesture=null;lastTap=null;return;}
      const p=e.touches[0];
      if(p.clientX<24||p.clientX>innerWidth-24||!surface(e.target,p.clientX,p.clientY)){gesture=null;lastTap=null;return;}
      gesture={question:current,target:e.target,id:p.identifier,x:p.clientX,y:p.clientY,t:Date.now(),distance:0,horizontal:false,blank:surface(e.target,p.clientX,p.clientY,true)};
    },{passive:true});
    document.addEventListener('touchmove',e=>{
      if(!gesture)return;
      if(e.touches.length!==1||!gesturesEnabled()||selectedText()){gesture=null;lastTap=null;return;}
      const p=e.touches[0],dx=Math.abs(p.clientX-gesture.x),dy=Math.abs(p.clientY-gesture.y);
      gesture.distance=Math.max(gesture.distance,dx,dy);
      if(!gesture.horizontal&&dy>=12&&dy>=dx){gesture=null;lastTap=null;suppressUntil=Date.now()+650;return;}
      if(dx>=14&&dx>dy*1.5){gesture.horizontal=true;lastTap=null;}
      if(gesture.horizontal&&e.cancelable)e.preventDefault();
    },{passive:false});
    document.addEventListener('touchend',e=>{
      const g=gesture;gesture=null;if(!g)return;
      const p=Array.from(e.changedTouches).find(p=>p.identifier===g.id);
      if(!p||e.touches.length||g.question!==current||!gesturesEnabled()||selectedText()){lastTap=null;return;}
      const dx=p.clientX-g.x,dy=p.clientY-g.y;
      if(g.horizontal){
        if(e.cancelable)e.preventDefault();suppressUntil=Date.now()+650;lastTap=null;cancelClear();
        if(Math.abs(dx)>=48&&Math.abs(dx)>Math.abs(dy)*1.35)move(dx<0?1:-1);
        return;
      }
      if(!g.blank||Math.max(g.distance,Math.hypot(dx,dy))>10||Date.now()-g.t>350){lastTap=null;suppressUntil=Date.now()+650;return;}
      const now=Date.now();
      if(lastTap&&lastTap.question===current&&now-lastTap.time<=340&&Math.hypot(p.clientX-lastTap.x,p.clientY-lastTap.y)<=28){
        lastTap=null;cancelClear();suppressUntil=touchDoubleUntil=now+700;
        if(e.cancelable)e.preventDefault();toggleExplanation();
      }else lastTap={question:current,time:now,x:p.clientX,y:p.clientY};
    },{passive:false});
    const reset=()=>{cancelClear();gesture=null;lastTap=null;mouseDown=null;};
    document.addEventListener('touchcancel',()=>{reset();suppressUntil=Date.now()+650;},{passive:true});
    document.addEventListener('study-gestures-change',reset);
    window.addEventListener('hashchange',reset);
  })();
  window.addEventListener('keydown',e=>{
    if(!location.hash.startsWith('#kmle-K')||!current||document.querySelector('dialog[open],#jbl-image-modal.show')||e.target.closest('input,textarea,select,[contenteditable="true"]'))return;
    if(e.key==='ArrowLeft'){e.preventDefault();move(-1);}
    if(e.key==='ArrowRight'){e.preventDefault();move(1);}
    if(e.key==='Escape'&&explanation)closeExplanation();
  });
  window.addEventListener('storage',e=>{
    if(e.key!==KEY)return;
    try{records=JSON.parse(e.newValue||'{}');}catch(_){return;}
    if(!root||!location.hash.startsWith('#kmle'))return;
    if(current){picked=[...(state(current).selected||[])];renderQuestion(false);}else renderMap();
  });
  window.RespiratoryKMLE={
    render(container,options,id){
      root=container;config=options;
      explanation=false;expanded=false;revealed=false;
      if(!id){renderMap();return;}
      current=qById.get(id)||data.questions[0];
      picked=[...(state(current).selected||[])];
      renderQuestion();
    }
  };
})();
