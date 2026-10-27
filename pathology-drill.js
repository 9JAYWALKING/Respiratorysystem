/* Independent picture drill; never changes J questions or their answer records. */
(() => {
  'use strict';
  const D=window.RESPIRATORY_PATHOLOGY_DATA, KEY='respiratory-pathology-progress-v1';
  const byId=new Map(D.questions.map(q=>[q.id,q]));
  const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  let root,config,current,sequence=[],filters=[],random=false,records={},attempts={},revealed=false,explanation=false,expanded=false,selectionVisible=true,navObserver,transition=0;
  let storageAvailable=true;
  try{const r=JSON.parse(localStorage.getItem(KEY)||'{}');if(r&&typeof r==='object'&&!Array.isArray(r))records=r;}catch(_){}
  const active=()=>/^#pathology(?:-P\d+)?$/i.test(location.hash);
  const saved=q=>records[q.key]||{};
  const symbols={o:'○',triangle:'△',x:'×'};
  function save(q,patch){records[q.key]={...saved(q),...patch,updatedAt:Date.now()};try{localStorage.setItem(KEY,JSON.stringify(records));storageAvailable=true;}catch(_){storageAvailable=false;}}
  function shuffle(a){a=[...a];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
  function makeOptions(q){return shuffle([q.target,...shuffle(q.pool.filter(k=>k!==q.target)).slice(0,3)]);}
  function attempt(q){
    if(!attempts[q.key])attempts[q.key]={options:makeOptions(q),selected:null};
    return attempts[q.key];
  }
  function rebuildSequence(){const qs=D.questions.filter(q=>!filters.length||filters.includes(q.lecture));sequence=random?shuffle(qs):qs;}
  function navigate(id){if(location.hash==='#pathology-'+id){load(id);return;}location.hash='#pathology-'+id;}
  function move(delta){const i=sequence.indexOf(current),q=sequence[i+delta];if(q)navigate(q.id);}
  function newAttempt(){if(!current)return;attempts[current.key]={options:makeOptions(current),selected:null};revealed=false;explanation=false;expanded=false;selectionVisible=true;draw(false);}
  function choose(key){
    const a=attempt(current);a.selected=a.selected===key?null:key;selectionVisible=true;revealed=!!a.selected||explanation;
    if(a.selected)save(current,{status:a.selected===current.target?'o':'x',lastAnswer:a.selected});
    draw(false);
  }
  function arrowSVG(q){
    if(!q.arrow)return '';
    const [x1,y1,x2,y2]=q.arrow;
    const w=q.width,h=q.height,ax=x1*w/100,ay=y1*h/100,bx=x2*w/100,by=y2*h/100;
    const size=Math.min(w,h)*.024,theta=Math.atan2(by-ay,bx-ax),backX=bx-size*Math.cos(theta),backY=by-size*Math.sin(theta);
    const p=`${bx},${by} ${backX+size*.52*Math.sin(theta)},${backY-size*.52*Math.cos(theta)} ${backX-size*.52*Math.sin(theta)},${backY+size*.52*Math.cos(theta)}`;
    return `<svg class="path-arrow" viewBox="0 0 ${w} ${h}" aria-hidden="true"><line x1="${ax}" y1="${ay}" x2="${backX}" y2="${backY}" stroke="white" stroke-width="${size*.42}"/><line x1="${ax}" y1="${ay}" x2="${backX}" y2="${backY}" stroke="#151515" stroke-width="${size*.24}"/><polygon points="${p}" fill="#151515" stroke="white" stroke-width="${size*.10}" stroke-linejoin="round"/></svg>`;
  }
  function stage(q,zoom=false){return `<span class="path-image-stage" style="aspect-ratio:${q.width}/${q.height};--path-aspect:${q.width/q.height}"><img src="${esc(q.image)}" width="${q.width}" height="${q.height}" alt="병리 문항 ${q.id}의 조직 또는 육안 사진${q.arrow?' · 화살표 표시':''}" ${zoom?'':'decoding="async"'}>${arrowSVG(q)}</span>`;}
  function openImage(){
    if(document.querySelector('.path-image-dialog'))return;
    const q=current,dialog=document.createElement('dialog');dialog.className='path-image-dialog';
    dialog.innerHTML=`<header><strong>${q.id}</strong><button type="button" aria-label="사진 확대 닫기">×</button></header><div class="path-image-scroll">${stage(q,true)}</div>`;
    document.body.append(dialog);dialog.querySelector('button').onclick=()=>dialog.close();dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close();});dialog.addEventListener('close',()=>dialog.remove());dialog.showModal();
  }
  function answerText(q){const a=attempt(q),n=a.options.indexOf(q.target)+1;return `${n}번 · ${D.concepts[q.target].label}`;}
  function credits(q){const s=q.source;return `<details class="path-credit"><summary>사진 출처</summary><p>${esc(s.label)}${s.page?' · '+s.page+'쪽':''}</p>${s.article?`<p><a href="${esc(s.article)}" target="_blank" rel="noopener noreferrer">${esc(s.title)}</a></p><p>${esc(s.authors)}</p><p>${esc(s.license)}</p>`:''}<p>${esc(s.processing)}</p></details>`;}
  function explanationHTML(q){
    const a=attempt(q),concept=D.concepts[q.target];
    return `<div class="path-explanation-body"><div class="path-answer">정답: ${esc(answerText(q))}</div><h3>사진 읽기</h3><p>${esc(q.note)}</p>${q.note!==concept.explanation?`<p>${esc(concept.explanation)}</p>`:''}
      <h3>선지별 핵심 소견</h3><ol class="path-choice-explanations">${a.options.map(k=>`<li class="${k===q.target?'is-correct':''}"><strong>${esc(D.concepts[k].label)}</strong><p>${esc(D.concepts[k].explanation)}</p></li>`).join('')}</ol>
      <h3>연결 Wiki</h3><a class="path-wiki-link" href="#lecture-${q.wiki.lecture}" data-wiki-course="${q.wiki.lecture}" data-wiki-section="${esc(q.wiki.heading)}">${q.wiki.lecture}강 · ${esc(q.wiki.heading)} ↗</a>${credits(q)}</div>`;
  }
  function toggleExplanation(force){
    const want=typeof force==='boolean'?force:!explanation;
    clearTimeout(transition);
    if(!want&&explanation){
      root.classList.add('path-closing');transition=setTimeout(()=>{explanation=false;expanded=false;draw(false);},matchMedia('(prefers-reduced-motion: reduce)').matches?0:180);
    }else{explanation=want;revealed=want||revealed;draw(false);}
  }
  let fitFrame=0;
  function fitPhoto(){
    cancelAnimationFrame(fitFrame);
    fitFrame=requestAnimationFrame(()=>{
      if(!active()||!root||expanded)return;
      const card=root.querySelector('.path-question'),photo=card?.querySelector('.path-image'),nav=root.querySelector('.path-bottom');
      if(!photo||!card.offsetHeight)return;
      const navHeight=nav.getBoundingClientRect().height;
      root.style.setProperty('--path-nav-height',navHeight+'px');
      const style=getComputedStyle(photo);
      // Fit the image into the space left after the four large answer targets.
      const height=Math.max(1,Math.floor(photo.clientHeight-parseFloat(style.paddingTop)-parseFloat(style.paddingBottom)));
      const value=height+'px';
      if(root.style.getPropertyValue('--path-photo-height')!==value)root.style.setProperty('--path-photo-height',value);
    });
  }
  function draw(reset=true){
    if(!root||!current)return;const q=current,a=attempt(q),s=saved(q),i=sequence.indexOf(q),y=window.scrollY;
    const expScroll=root.querySelector('.path-explanation')?.scrollTop||0;
    root.className=`pathology-root ${explanation?'has-explanation':''} ${expanded?'explanation-expanded':''}`;
    root.innerHTML=`<div class="path-split"><article class="path-question jbl-card ${q.question.length>35?'path-long-stem':''}" aria-label="${q.id} 문제"><header class="jbl-card-head"><h2 class="jbl-title path-stem">${esc(q.question)}</h2><div class="jbl-meta-right">
        <button type="button" class="study-answer-status is-${({o:'correct',triangle:'uncertain',x:'wrong'})[s.status]||'unanswered'}" data-path-status aria-label="풀이 상태 변경" title="풀이 상태 변경"><span data-study-status-symbol>${symbols[s.status]||''}</span></button><button type="button" class="jbl-qid" data-path-number aria-label="병리 고유번호로 이동">${q.id}</button><input class="path-number jbl-number-input" aria-label="병리 고유번호 입력" inputmode="numeric" value="${q.id}" hidden><button type="button" class="jbl-favorite ${s.favorite?'active':''}" data-path-favorite aria-label="즐겨찾기" aria-pressed="${!!s.favorite}">${s.favorite?'★':'☆'}</button><button type="button" class="path-new" data-path-new title="현재 문항의 선지를 다시 섞어 풀기" aria-label="현재 문항 다시 풀기">↻</button></div></header>
        <div class="jbl-card-body"><div class="path-image jbl-page-block"><button type="button" class="path-image-open" data-path-image aria-label="사진 확대">${stage(q)}</button></div>
        <div class="jbl-choices path-choices" role="group" aria-label="선지">${a.options.map((k,n)=>`<button type="button" class="jbl-choice ${selectionVisible&&a.selected===k?'selected':''} ${revealed&&k===q.target?'correct':''} ${revealed&&a.selected===k&&k!==q.target?'wrong':''}" data-path-choice="${k}" aria-pressed="${a.selected===k}"><span class="jbl-choice-num">${n+1}</span><span>${esc(D.concepts[k].label)}</span></button>`).join('')}</div>
        ${!storageAvailable?'<p role="alert">기록을 브라우저에 저장하지 못했습니다. 현재 화면에서는 계속 풀 수 있습니다.</p>':''}</div></article>
      <aside class="path-explanation" aria-label="병리 해설" ${explanation?'':'hidden'}><header><strong>해설 · ${q.id}</strong><button type="button" data-path-expand aria-label="${expanded?'분할화면으로':'해설 전체화면'}">−</button><button type="button" data-path-close aria-label="해설 닫기">×</button></header>${explanation?explanationHTML(q):''}</aside></div>
      <nav class="path-bottom jbl-bottom-nav" aria-label="병리 문항 이동"><div class="jbl-bottom-inner"><div class="jbl-nav-actions"><button type="button" class="jbl-btn jbl-btn-primary jbl-nav-explanation" data-path-explain aria-pressed="${explanation}">${explanation?'해설 닫기':'해설 보기'}</button><button type="button" class="jbl-btn jbl-btn-primary jbl-nav-answer" data-path-answer aria-pressed="${revealed}">${revealed?'정답 숨김':'정답 보기'}</button></div><div class="jbl-nav-pages"><button type="button" class="jbl-btn jbl-btn-primary jbl-nav-previous" data-path-prev ${i<=0?'disabled':''}>← 이전<span class="jbl-nav-page-word"> 문제</span></button><span class="jbl-counter">${i+1} / ${sequence.length}</span><button type="button" class="jbl-btn jbl-btn-primary jbl-nav-next" data-path-next ${i>=sequence.length-1?'disabled':''}>다음<span class="jbl-nav-page-word"> 문제</span> →</button></div></div></nav>`;
    root.querySelectorAll('[data-path-choice]').forEach(b=>b.onclick=()=>choose(b.dataset.pathChoice));
    root.querySelector('[data-path-image]').onclick=openImage;
    root.querySelector('[data-path-new]').onclick=newAttempt;
    root.querySelector('[data-path-prev]').onclick=()=>move(-1);root.querySelector('[data-path-next]').onclick=()=>move(1);
    root.querySelector('[data-path-explain]').onclick=()=>toggleExplanation();
    root.querySelector('[data-path-answer]').onclick=()=>{revealed=!revealed;if(!revealed){explanation=false;expanded=false;}draw(false);};
    root.querySelector('[data-path-close]').onclick=()=>toggleExplanation(false);
    root.querySelector('[data-path-expand]').onclick=()=>{expanded=!expanded;draw(false);};
    root.querySelector('.path-explanation>header').ondblclick=e=>{if(e.target.closest('button'))return;expanded=!expanded;draw(false);};
    root.querySelector('[data-path-status]').onclick=()=>{
      const states=['','o','triangle','x'],next=states[(states.indexOf(saved(q).status||'')+1)%4];save(q,{status:next});draw(false);
    };
    root.querySelector('[data-path-favorite]').onclick=()=>{save(q,{favorite:!saved(q).favorite});draw(false);};
    const number=root.querySelector('.path-number'),button=root.querySelector('[data-path-number]');
    button.onclick=()=>{button.hidden=true;number.hidden=false;number.focus();number.select();};
    let committing=false;
    const commit=()=>{if(committing||number.hidden)return;committing=true;const id='P'+number.value.replace(/\D/g,'');const found=byId.get(id);if(found){if(!sequence.includes(found)){filters=[];rebuildSequence();}navigate(id);}else{number.hidden=true;button.hidden=false;}committing=false;};
    number.onblur=commit;number.onkeydown=e=>{if(e.key==='Enter'){e.preventDefault();commit();}else if(e.key==='Escape'){number.hidden=true;button.hidden=false;}};
    root.querySelectorAll('.path-image img').forEach(img=>img.onerror=()=>{img.closest('.path-image').innerHTML='<p role="alert">사진을 불러오지 못했습니다. assets/pathology-drill 폴더를 확인해 주세요.</p>';});
    root.querySelectorAll('.path-wiki-link').forEach(link=>link.onclick=e=>{e.preventDefault();explanation=false;expanded=false;draw(false);config.openWiki(Number(link.dataset.wikiCourse),link.dataset.wikiSection,root.querySelector('[data-path-explain]'));});
    navObserver?.disconnect();navObserver=new ResizeObserver(fitPhoto);
    ['.path-bottom','.path-question>.jbl-card-head','.path-image','.path-choices'].forEach(selector=>navObserver.observe(root.querySelector(selector)));
    fitPhoto();
    if(!reset){window.scrollTo({top:y,behavior:'instant'});const pane=root.querySelector('.path-explanation');if(pane)pane.scrollTop=expScroll;}else window.scrollTo({top:0,behavior:'instant'});
  }
  function load(id){clearTimeout(transition);current=byId.get(id)||sequence[0]||D.questions[0];if(!sequence.includes(current)){filters=[];rebuildSequence();}attempt(current);revealed=false;explanation=false;expanded=false;selectionVisible=true;draw(true);}
  const shuffleIcon='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h3c5 0 7 12 12 12h3m-4-4 4 4-4 4M3 18h3c2 0 4-3 6-6s4-6 6-6h3m-4-4 4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.7"/></svg>';
  function toolsHTML(){return `<section class="study-center-section path-tools"><h3>병리 땡시</h3><div class="study-center-filters"><div class="study-multi-filter"><span>강의 범주</span><details data-path-category><summary>${filters.length?filters.map(x=>x+'강').join(', '):'전체 강의'}</summary><div class="study-multi-options"><button type="button" data-path-all aria-pressed="${!filters.length}">전체 강의</button>${D.categories.map(c=>`<label><input type="checkbox" data-path-filter value="${c.lecture}" ${filters.includes(c.lecture)?'checked':''}><span>${esc(c.label)}</span></label>`).join('')}</div></details></div></div><div class="study-order-controls"><button type="button" class="study-random-toggle" data-path-random aria-pressed="${random}"><span class="study-filter-icon">${shuffleIcon}</span><span>문항 순서 랜덤</span></button></div><button type="button" class="study-random-toggle" data-path-restart><span class="study-filter-icon" aria-hidden="true">↻</span><span>선지 다시 섞어 처음부터</span></button></section>`;}
  function bindTools(dialog,refresh){
    const apply=()=>{rebuildSequence();const first=sequence[0];if(first){history.replaceState(null,'','#pathology-'+first.id);load(first.id);}const opened=!!dialog.querySelector('[data-path-category]')?.open;refresh();if(opened)dialog.querySelector('[data-path-category]')?.setAttribute('open','');};
    dialog.querySelectorAll('[data-path-filter]').forEach(el=>el.onchange=()=>{const n=Number(el.value);filters=el.checked?[...filters,n]:filters.filter(x=>x!==n);filters.sort((a,b)=>a-b);apply();});
    dialog.querySelector('[data-path-all]').onclick=()=>{filters=[];apply();};
    dialog.querySelector('[data-path-random]').onclick=()=>{random=!random;apply();};
    dialog.querySelector('[data-path-restart]').onclick=()=>{attempts={};apply();};
  }
  function render(el,cfg,id){root=el;config=cfg;if(!sequence.length)rebuildSequence();load(id||sequence[0]?.id);}
  const interactive=e=>e.target.closest('button,a,input,select,textarea,summary,details,.path-explanation,dialog');
  const gestures=()=>window.RespiratoryGestures?.isEnabled?.()!==false;
  let down=null,lastTap=0,suppressClickUntil=0;
  document.addEventListener('pointerdown',e=>{if(!active()||!root?.contains(e.target)||interactive(e)||e.isPrimary===false){down=null;return;}down={x:e.clientX,y:e.clientY,t:Date.now(),type:e.pointerType};},{passive:true});
  document.addEventListener('pointerup',e=>{
    if(!down||!active())return;const start=down;down=null;const dx=e.clientX-start.x,dy=e.clientY-start.y,dt=Date.now()-start.t;
    if(gestures()&&Math.abs(dx)>65&&Math.abs(dx)>Math.abs(dy)*1.6&&dt<1400){suppressClickUntil=Date.now()+400;move(dx<0?1:-1);return;}
    if(start.type==='touch'&&Math.hypot(dx,dy)<12&&dt<500){const now=Date.now();if(gestures()&&now-lastTap<330){suppressClickUntil=now+400;lastTap=0;toggleExplanation();}else lastTap=now;}
  },{passive:true});
  document.addEventListener('click',e=>{if(!active()||!root?.contains(e.target)||interactive(e)||Date.now()<suppressClickUntil)return;if(selectionVisible&&attempt(current).selected){selectionVisible=false;root.querySelectorAll('.path-choices .selected').forEach(b=>b.classList.remove('selected'));}});
  document.addEventListener('dblclick',e=>{if(!active()||!root?.contains(e.target)||interactive(e)||!gestures()||Date.now()<suppressClickUntil)return;e.preventDefault();toggleExplanation();});
  document.addEventListener('keydown',e=>{
    if(!active()||!current||e.ctrlKey||e.altKey||e.metaKey||e.target.closest('input,textarea,select,[contenteditable="true"]')||document.querySelector('dialog[open],.context-link-split'))return;
    if(e.key==='ArrowLeft'){e.preventDefault();move(-1);}else if(e.key==='ArrowRight'){e.preventDefault();move(1);}else if(/^[1-4]$/.test(e.key)){e.preventDefault();choose(attempt(current).options[Number(e.key)-1]);}
  });
  addEventListener('resize',fitPhoto,{passive:true});
  window.visualViewport?.addEventListener('resize',fitPhoto,{passive:true});
  addEventListener('storage',e=>{if(e.key!==KEY)return;try{records=JSON.parse(e.newValue||'{}');if(active())draw(false);}catch(_){}});
  window.RespiratoryPathology={render,isActive:active,toolsHTML,bindTools,audit:()=>({total:D.questions.length,sequence:sequence.map(q=>q.id),filters:[...filters],random,current:current?.id,options:current?[...attempt(current).options]:[],selected:current?attempt(current).selected:null}),makeOptions};
})();
