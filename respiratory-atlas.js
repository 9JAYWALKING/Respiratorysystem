/* Concept-first parent document. Lecture text and question records remain independent. */
(() => {
  'use strict';
  const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const clean = text => String(text).replace(/""|'''|''/g, '').trim();
  const contents = [
    ['journey','한 번의 숨, 다섯 과정'],
    ['mechanics','공기를 움직이는 구조'],
    ['exchange','폐포에서 조직까지'],
    ['tests','숫자와 사진의 언어'],
    ['diseases','병을 놓을 자리'],
    ['cancer','폐암을 만났을 때'],
    ['treatment','치료가 바꾸는 것'],
    ['context','나이·환경·시간'],
    ['path','전체 학습 길잡이']
  ];
  let cleanup = () => {};
  const groups = [
    {title:'정상 구조와 기능', description:'공기의 길을 만든 뒤, 흐름·교환·운반·조절을 잇는다.', ids:[1,11,2,3,7,8]},
    {title:'기능을 재고 병변을 찾기', description:'검사마다 답할 수 있는 질문이 다르다.', ids:[19,4,13,29,25]},
    {title:'기도와 호흡부전', description:'길이 좁은 것과 펌프가 약한 것, 교환면이 무너진 것을 구분한다.', ids:[15,20,24,31,10,34,23,5,14,6,12]},
    {title:'감염·간질·폐혈관', description:'병변의 위치를 잡고 원인과 시간 경과를 더한다.', ids:[17,33,30,16,42,43,26,21]},
    {title:'종양·흉막·종격동', description:'위치와 조직을 확인한 다음, 범위와 치료 가능성을 판단한다.', ids:[22,37,32,45,44,36,35,38,46,18,39]},
    {title:'발달과 특수한 손상', description:'성인의 정상 구조에서 무엇이 달라졌는지를 생각한다.', ids:[27,28,40,41,9]}
  ];
  function render(root, options = {}) {
    cleanup();
    const notes = options.notes || window.LECTURE_NOTE_SOURCES || {};
    const rawCourses = options.courses || (window.RESPIRATORY_COURSES?.courses || []).map(c=>({id:c[0],title:c[1]}));
    const courses = new Map(rawCourses.map(c=>[Number(c.id),c]));
    const linkAudit = [];
    const hasNote = id => String(notes[id] || '').trim().length > 100;
    function w(id, start, label) {
      const headings = (notes[id] || '').split('\n').filter(l=>/^={2,4}[^=]/.test(l)).map(l=>clean(l.replace(/^=+\s*|\s*=+$/g,'')));
      const matches = start ? headings.filter(h=>h.startsWith(start)) : [];
      const section = matches.length === 1 ? matches[0] : '';
      linkAudit.push({id,start,section,valid:hasNote(id) && (!start || matches.length === 1)});
      if(!hasNote(id)) return `<span class="ra-unavailable">${esc(label)} <small>문서 준비 중</small></span>`;
      return `<a class="ra-wiki-link" href="#lecture-${id}" data-wiki-course="${id}"${section ? ` data-wiki-section="${esc(section)}"` : ''}>${esc(label)}<span aria-hidden="true">↗</span></a>`;
    }
    const j = (id,label) => `<a class="ra-j-link" href="#jbl-q-${id}" data-jbl-question-link="${id}">${esc(label || `J ${id}`)}<span aria-hidden="true">↗</span></a>`;
    const links = (...items) => `<div class="ra-links">${items.join('')}</div>`;
    const section = (id,n,title,lead,html) => `<section id="ra-${id}" class="ra-section" aria-labelledby="ra-title-${id}"><header class="ra-section-head"><span class="ra-index">${n}</span><div><h2 id="ra-title-${id}" tabindex="-1">${title}</h2><p class="ra-lead">${lead}</p></div></header>${html}</section>`;
    const table = (head,rows,caption) => `<div class="ra-table-wrap" role="region" tabindex="0" aria-label="${esc(caption)}"><table><caption>${esc(caption)}</caption><thead><tr>${head.map(h=>`<th scope="col">${h}</th>`).join('')}</tr></thead><tbody>${rows.map(r=>`<tr>${r.map((c,i)=>`<${i?'td':'th scope="row"'}>${c}</${i?'td':'th'}>`).join('')}</tr>`).join('')}</tbody></table></div>`;
    const concept = (title,text) => `<aside class="ra-takeaway"><strong>${title}</strong><p>${text}</p></aside>`;
    const chapter = (title,text) => `<h3>${title}</h3>${text}`;
    const tree = (key,title,subtitle,body,open=false) => `<details class="ra-branch" id="ra-disease-${key}"${open?' open':''}><summary><span class="ra-branch-letter">${key}</span><span><strong>${title}</strong><small>${subtitle}</small></span><span class="ra-plus" aria-hidden="true">+</span></summary><div class="ra-branch-body">${body}</div></details>`;
    const stations = [
      {key:'pump',name:'환기',sub:'공기를 바꾸기',number:'01',title:'공기를 들이고, CO₂를 내보낸다.',
        text:'호흡근이 흉곽을 움직이면 압력 차가 생겨 공기가 흐른다. 다만 입에서 움직인 공기가 모두 교환에 쓰이지는 않는다. 사강을 빼고 남은 폐포환기가 CO₂ 제거를 결정한다.',
        tags:'압력 차 · 기도저항 · 폐포환기',links:()=>links(w(2,'폐를 펴는 압력과 공기를 움직이는 압력은','두 압력의 차이'),w(3,'같은 분당환기량이라도','사강과 폐포환기'),w(5,'부담이 힘보다','호흡펌프의 실패'))},
      {key:'exchange',name:'가스교환',sub:'공기와 피 만나기',number:'02',title:'같은 폐포에 공기와 혈액이 와야 한다.',
        text:'얇은 장벽이 있어도 공기만 오거나 혈액만 오면 교환은 충분하지 않다. 먼저 환기와 관류가 만나는지 보고, 그다음 면적·두께·분압 차를 생각한다.',
        tags:'V/Q · 확산 · A–a gradient',links:()=>links(w(3,'환기와 관류의 비율','V/Q의 원리'),w(3,'저산소혈증은 A–a 차이와','저산소혈증의 감별'))},
      {key:'transport',name:'운반',sub:'혈액에 싣기',number:'03',title:'분압이 정상이어도 산소 운반량은 부족할 수 있다.',
        text:'산소 대부분은 Hb에 결합한다. 혈액 한 단위에 산소가 얼마나 실렸는지와, 심장이 그 혈액을 얼마나 보내는지를 곱해야 조직으로 가는 양이 나온다. 빈혈과 쇼크가 호흡기 생리에 등장하는 이유다.',
        tags:'PaO₂ ≠ CaO₂ · Hb · 심박출량',links:()=>links(w(7,'분압·포화도·용량·함량은','분압과 함량'),w(7,'산소 전달량과 산소 소비량을','산소 전달량'),w(12,'네 종류의 쇼크는','쇼크의 네 기전'))},
      {key:'tissue',name:'조직',sub:'산소 사용하기',number:'04',title:'도착한 산소를 세포가 쓸 수 있어야 끝난다.',
        text:'조직은 산소를 소비하고 CO₂를 만든다. 공급이 수요를 따라가지 못하거나 세포의 이용 과정이 막히면 조직 저산소증이 생긴다. 혈액의 산소분압만으로 이 마지막 단계를 보장할 수는 없다.',
        tags:'공급과 수요 · 조직 저산소증',links:()=>links(w(7,'조직 저산소증은','저산소증의 네 위치'),w(26,'H₂S와 cyanide는','세포의 산소 이용 장애'))},
      {key:'control',name:'조절',sub:'필요한 만큼 조정하기',number:'05',title:'감지 → 통합 → 호흡근, 그리고 다시 감지.',
        text:'뇌간의 리듬 위에 화학수용체와 감각 입력이 더해진다. 중추는 주로 CO₂로 달라진 CSF의 H⁺를, 말초화학수용체는 낮은 PaO₂를 포함한 변화를 감지한다. 이 되먹임이 수면·운동·약물에 따라 달라진다.',
        tags:'수용체 · 뇌간 · 호흡근',links:()=>links(w(8,'호흡 조절은 감지','호흡 조절 회로'),w(8,'화학수용체는','중추와 말초 수용체'),w(8,'수면무호흡은','수면에서의 조절'))}
    ];
    root.innerHTML = `<article class="ra-root wiki-note">
      <header class="ra-hero">
        <div class="ra-hero-copy"><div class="ra-kicker">호흡기계 · 큰 그림</div><h1>숨 한 번에서,<br>호흡기계 전체로.</h1>
        <p>폐는 산소가 잠시 머무는 곳이다.<br>목적지는 <strong>세포</strong>이고, 돌아오는 것은 <strong>이산화탄소</strong>다.</p>
        <p class="ra-hero-note">공기가 움직이는 이유부터 병을 찾고 치료하는 순서까지.<br> 하나의 흐름을 따라가며 필요한 문서로 깊어진다.</p></div>
        <figure class="ra-hero-art"><svg viewBox="0 0 440 390" role="img" aria-labelledby="ra-lung-title ra-lung-desc">
          <title id="ra-lung-title">기도와 폐, 그리고 혈액으로 이어지는 산소의 길</title><desc id="ra-lung-desc">기도가 좌우 폐로 갈라지고 폐포로 이어진다. 산소는 폐포에서 혈액으로, 이산화탄소는 반대 방향으로 이동한다. 기능을 설명하는 개념도이며 해부학적 축척은 아니다.</desc>
          <defs><linearGradient id="ra-lung-wash" x2="1" y2="1"><stop stop-color="currentColor" stop-opacity=".18"/><stop offset="1" stop-color="currentColor" stop-opacity=".04"/></linearGradient></defs>
          <circle cx="225" cy="195" r="170" fill="url(#ra-lung-wash)"/>
          <path d="M196 92C165 59 108 88 84 143C63 189 46 277 86 299C112 315 167 290 188 263C202 245 196 162 196 92ZM239 92C271 57 321 83 345 139C364 184 389 272 354 296C327 315 276 293 253 267C239 248 239 157 239 92Z" fill="url(#ra-lung-wash)" stroke="currentColor" stroke-width="2"/>
          <g fill="none" stroke="currentColor" stroke-linecap="round"><path d="M217 36V140M217 138L147 192M217 138L291 194" stroke-width="10"/><path d="M147 192L126 148M147 192L105 233M147 192L158 251M291 194L314 147M291 194L334 238M291 194L274 248" stroke-width="5"/><path d="M106 233L87 257M106 233L118 268M158 251L143 274M158 251L177 273M334 238L352 259M334 238L322 270M274 248L261 271" stroke-width="2.5"/></g>
          <g fill="currentColor"><circle cx="87" cy="257" r="5"/><circle cx="118" cy="268" r="5"/><circle cx="143" cy="274" r="5"/><circle cx="177" cy="273" r="5"/><circle cx="352" cy="259" r="5"/><circle cx="322" cy="270" r="5"/><circle cx="261" cy="271" r="5"/></g>
          <path d="M197 52V102m-5-7 5 8 5-8" fill="none" stroke="#a94872" stroke-width="2.5"/><path d="M238 102V52m-5 7 5-8 5 8" fill="none" stroke="#527b95" stroke-width="2.5"/>
          <text x="166" y="48" class="ra-svg-label">O₂</text><text x="247" y="48" class="ra-svg-label">CO₂</text>
          <path d="M150 309C177 348 270 347 297 309" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 5" fill="none"/>
          <text x="221" y="368" text-anchor="middle" class="ra-svg-caption">폐포 → 혈액 → 조직</text>
        </svg></figure>
      </header>
      <div class="ra-layout">
        <aside class="ra-toc"><div class="ra-toc-head"><span>읽는 순서</span><button type="button" data-ra-toc-toggle aria-expanded="true" aria-controls="ra-toc-nav" aria-label="목차 접기" title="목차 접기"><svg viewBox="0 0 20 20" aria-hidden="true"><path d="m12 5-5 5 5 5"/></svg></button></div><nav id="ra-toc-nav" aria-label="큰 그림 목차">${contents.map(([id,title],i)=>`<button type="button" data-ra-jump="${id}"><span>${String(i+1).padStart(2,'0')}</span>${title}</button>`).join('')}</nav></aside>
        <div class="ra-body">
        ${section('journey','01','한 번의 숨, 다섯 과정','호흡은 폐 하나의 일이 아니라, 서로 다른 원리가 이어진 과정이다.',`
          <p>숨을 들이마시면 산소가 곧바로 세포에 닿을 것 같지만, 사이에는 여러 단계가 있다. <strong>공기가 들어오고, 혈액과 만나고, 혈액에 실려 이동하고, 조직에서 쓰여야 한다.</strong> 이 전체를 조절하는 회로도 필요하다. 어느 하나가 무너지면 환자는 숨이 차거나 산소가 부족해질 수 있다.</p>
          <div class="ra-system" aria-label="호흡의 다섯 기능">
            <div class="ra-stations">${stations.slice(0,4).map(s=>`<button type="button" data-ra-station="${s.key}" aria-pressed="${s.key==='pump'}" aria-controls="ra-station-detail"><small>${s.number}</small><strong>${s.name}</strong><span>${s.sub}</span></button>`).join('')}</div>
            <div class="ra-feedback"><span aria-hidden="true">↶</span><button type="button" data-ra-station="control" aria-pressed="false" aria-controls="ra-station-detail">⑤ 조절 <span>상태를 읽고 환기를 바꾼다</span></button><span aria-hidden="true">↷</span></div>
            <div id="ra-station-detail" class="ra-station-detail" aria-live="polite"></div>
          </div>
          ${concept('같은 “숨참”도 출발점은 다르다.','천식에서는 공기길이 좁고, 폐렴에서는 교환할 폐포가 줄며, 빈혈에서는 산소를 실을 Hb가 부족하다. 증상 이름을 외우기 전에 <strong>이 과정 중 어디가 달라졌는가</strong>를 묻는다.')}
        `)}
        ${section('mechanics','02','공기를 움직이는 구조','통로를 만들고, 압력 차를 만들고, 그 결과를 측정한다.',`
          ${chapter('나뭇가지는 공기를 보내고, 끝의 얇은 벽은 기체를 교환한다.',`<p>기관에서 갈라진 기도는 점점 가늘어지고 많아진다. 위쪽은 연골과 점액·섬모로 통로를 유지하고 이물질을 치운다. 세기관지에서는 연골과 샘이 사라지며, 종말세기관지를 지나 <strong>벽에 폐포가 열리는 호흡세기관지</strong>부터 교환 구역이 시작된다.</p>
          <div class="ra-airway"><div><small>전도 구역</small><strong>기관 → 기관지 → 종말세기관지</strong><span>공기를 보내고, 데우고, 걸러 낸다.</span></div><span aria-hidden="true">→</span><div><small>호흡 구역</small><strong>호흡세기관지 → 폐포관·폐포</strong><span>공기와 혈액 사이의 거리를 줄인다.</span></div></div>
          <p>폐포는 빈 주머니만은 아니다. <strong>제1형 세포는 얇은 교환면</strong>을, <strong>제2형 세포는 surfactant와 재생</strong>을 맡는다. 이 장벽을 얇고 건조하게 유지해야 기체가 잘 건넌다. 구조를 배우는 이유가 여기 있다. 장벽이 다치거나 두꺼워지면 뒤에서 배울 가스교환도 달라진다.</p>
          ${links(w(1,'기도 전체의 변화는','기도의 경계'),w(1,'제1형은 얇은','폐포세포'),w(1,'혈액–공기 장벽은','혈액–공기 장벽'),w(11,'','조직 사진으로 확인'))}`)}
          ${chapter('폐를 펴 두는 압력과, 공기를 흐르게 하는 압력은 다르다.',`<p>횡격막이 수축하면 흉곽이 커지고 흉막압이 더 낮아진다. 폐가 따라 펴지면서 폐포압이 대기압보다 낮아지고, 그제야 공기가 들어온다. 조용히 내쉴 때는 호흡근의 힘이 풀리고 폐의 탄성반동이 공기를 내보낸다.</p>
          <div class="ra-equation-pair"><div><small>벽을 사이에 둔 차이</small><strong>P<sub>L</sub> = P<sub>A</sub> − P<sub>pl</sub></strong><p>경폐압. 폐를 얼마나 펴 두는가?</p></div><div><small>통로를 따라 생긴 차이</small><strong>Flow = ΔP / R</strong><p>압력 차와 저항. 얼마나 잘 흐르는가?</p></div></div>
          <p>들이쉰 끝에는 흐름이 멎어도 폐가 펴져 있다. 그래서 <strong>흐름이 0이라는 말은 폐를 펴는 힘도 0이라는 뜻이 아니다.</strong> 기흉은 흉막강에 공기가 들어와 폐를 펴 두던 압력 관계가 깨진 상황으로 이해할 수 있다.</p>
          ${links(w(2,'폐를 펴는 압력과 공기를 움직이는 압력은','압력의 두 역할'),w(2,'TLC·RV·FRC는','세 폐용적의 기준점'),w(18,'폐허탈에서 폐쇄성','기흉에서 쇼크까지'))}`)}
          ${chapter('잘 늘어나지 않는 폐와, 잘 비워지지 않는 폐.',`<p><strong>순응도 C = ΔV/ΔP</strong>는 같은 압력 변화에 얼마나 늘어나는지다. 섬유화된 폐는 뻣뻣해 펴는 일이 크다. 반대로 폐기종은 잘 늘어나지만 되돌아오는 힘과 기도를 잡아당기는 지지가 약해져, 내쉴 때 공기를 가두기 쉽다. <strong>잘 늘어난다고 좋은 폐는 아니다.</strong></p>
          ${table(['문제','기능의 결과','검사에서 확인'],[
            ['흐름이 막힘 · 폐쇄','빨리 비우지 못한다. 심하면 RV가 늘어난다.','FEV₁/FVC 감소'],
            ['크기가 줄어듦 · 제한','최대로 담을 수 있는 양이 작다.','TLC 감소로 확인'],
            ['교환 능력이 떨어짐','기체를 혈액으로 전달하기 어렵다.','DLCO; Hb와 폐혈관도 함께 고려']
          ],'흐름·크기·전달은 서로 다른 축이다')}
          ${concept('폐쇄성과 제한성은 질환명이 아니라 기능의 모양이다.','TLC가 줄었다면 폐실질이 굳었을 수도 있지만 흉벽·근육이 폐를 충분히 펴지 못한 것일 수도 있다. FVC가 작다는 이유만으로 제한성을 확정하지 않는다.')}
          ${links(w(2,'강하게 내쉴수록','동적 기도 압박'),w(19,'FEV1/FVC로 폐쇄를','폐기능검사 판독'),w(19,'제한에 DLCO를','제한 + DLCO'),j(284))}`)}
        `)}
        ${section('exchange','03','폐포에서 조직까지','산소가 부족하다는 말에, 부족해진 위치를 붙인다.',`
          ${chapter('많이 쉬는 것과, 효과적으로 환기하는 것은 다르다.',`<p>입에서 드나든 공기의 일부는 교환하지 않는 공간을 채운다. 한 번에 얕게 들이마시면 사강이 차지하는 몫이 커진다. 그래서 호흡수가 빠르다는 사실만으로 충분히 환기한다고 할 수 없다.</p>
          <div class="ra-equation"><small>사강을 빼고 세는 호흡</small><strong>V̇<sub>A</sub> = (V<sub>T</sub> − V<sub>D</sub>) × f</strong><p>CO₂ 생산량이 같다면, 폐포환기가 줄수록 PaCO₂는 올라간다.</p></div>
          ${links(w(3,'같은 분당환기량이라도','폐포환기와 사강'),w(3,'CO₂ 생산량이 같으면','환기와 CO₂'))}`)}
          ${chapter('환기와 관류는 같은 자리에서 만나야 한다.',`<p>혈액이 흘러도 공기가 없으면 산소를 얻지 못한다. 공기가 들어와도 혈액이 없으면 그 환기는 교환에 쓰이지 못한다. 아래는 한 폐포 단위를 단순화한 모형이다. 실제 폐에는 서로 다른 상태의 단위들이 함께 있다.</p>
          <div class="ra-vq-grid">
            <div><div class="ra-vq-icon both"><span class="ra-vq-air">공기 ↓</span><i></i><span class="ra-vq-blood">혈류 →</span></div><h4>둘 다 도착</h4><p>환기와 관류가 적절히 맞으면 효율적으로 교환한다.</p><strong>V/Q의 짝맞추기</strong></div>
            <div><div class="ra-vq-icon shunt"><span class="ra-vq-air">공기 ×</span><i></i><span class="ra-vq-blood">혈류 →</span></div><h4>혈액만 도착</h4><p>환기되지 않는 폐포를 혈액이 통과한다.</p><strong>V/Q = 0 · 폐내 shunt</strong></div>
            <div><div class="ra-vq-icon dead"><span class="ra-vq-air">공기 ↓</span><i></i><span class="ra-vq-blood">혈류 ×</span></div><h4>공기만 도착</h4><p>관류가 없어서 환기가 낭비된다.</p><strong>V/Q → ∞ · 폐포 사강</strong></div>
          </div>
          <p>폐렴·부종·무기폐는 환기를 줄여 low V/Q 또는 shunt를 만든다. 폐색전은 관류를 줄여 사강을 늘린다. 다만 <strong>한 질환이 언제나 한 기전만 만드는 것은 아니다.</strong> 폐색전의 저산소혈증도 전체 폐의 V/Q 재분포 등 여러 변화로 생긴다.</p>
          ${links(w(3,'기도가 막히면','Shunt와 dead space'),w(21,'폐색전증은 가스교환과','폐색전의 두 영향'),w(25,'환기도 함께 비었는지','V/Q 영상 판독'))}`)}
          ${chapter('A–a 차이는 “폐포에 있던 산소가 혈액에 얼마나 도착했나”다.',`<p>동맥혈 PaO₂가 낮으면 먼저 폐포의 PAO₂부터 낮았는지 묻는다. 고산이나 순수 저환기에서는 두 값이 함께 낮아져 A–a 차이가 정상일 수 있다. 반대로 폐포에 산소가 있는데 혈액이 잘 받지 못하면 차이가 커진다.</p>
          <div class="ra-equation"><small>폐포값은 계산하고, 동맥값은 측정한다.</small><strong>A–a gradient = P<sub>AO₂</sub> − P<sub>aO₂</sub></strong><p>P<sub>AO₂</sub> ≈ FiO₂ × (P<sub>B</sub> − 47) − PaCO₂/R<br>37℃, 기압 단위 mmHg. 해수면·실내공기·R≈0.8이면 약 150 − PaCO₂/0.8.</p></div>
          ${table(['A–a 차이','생각할 기전','산소 투여를 해석할 때'],[
            ['정상일 수 있음','낮은 흡기 산소분압 · 순수 저환기','산소화가 좋아져도 저환기 자체가 해결된 것은 아니다.'],
            ['증가','V/Q 불균형 · 확산장애','산소를 높이면 대개 개선한다.'],
            ['증가','상당한 우좌 shunt','혈액 일부가 환기된 폐포를 만나지 않아 충분히 교정되기 어렵다.']
          ],'저산소혈증의 출발점을 나누는 틀')}
          <p class="ra-note">A–a 차이는 나이와 FiO₂의 영향을 받는다. Shunt가 있다는 말도 산소를 준 뒤 PaO₂가 전혀 오르지 않거나 차이의 숫자가 정확히 같다는 뜻은 아니다.</p>
          ${links(w(3,'PAO₂와 PaO₂가 함께','A–a 차이의 계산'),w(3,'산소를 주어도','산소 반응'),j(83))}`)}
          ${chapter('혈액이 싣는 양과, 조직에 도착하는 양.',`<p>PaO₂는 혈장에 녹은 산소의 분압이고, SaO₂는 Hb의 산소 결합 상태를 나타낸다. 실제 양인 <strong>CaO₂</strong>를 알려면 Hb 농도가 필요하다. 여기에 혈류를 더해야 전달량이 된다.</p>
          <div class="ra-equation"><small>운반량을 연결하는 두 식</small><strong>CaO₂ ≈ 1.34 × Hb × SaO₂ + 0.003 × PaO₂</strong><strong>DO₂ = CO × CaO₂ × 10</strong><p>Hb는 g/dL, SaO₂는 0–1의 비율, CaO₂는 mL/dL, CO는 L/min, DO₂는 mL/min. 마지막 ×10은 L를 dL로 바꾸는 단위 환산이다.</p></div>
          <p>빈혈이면 산소를 실을 자리가 적고, 쇼크이면 실은 혈액을 충분히 보내지 못한다. CO 중독은 자리를 빼앗고 남은 산소의 방출도 방해한다. 산소 해리곡선은 바로 그 <strong>싣기와 내려놓기</strong>를 설명하는 그림이다.</p>
          ${links(w(7,'분압·포화도·용량·함량은','네 산소 지표'),w(7,'우측 이동은','산소 해리곡선'),w(7,'CO₂는 대부분','CO₂의 귀환'),w(8,'중추화학수용체를','CO₂를 감지하는 조절'),j(84))}`)}
        `)}
        ${section('tests','04','숫자와 사진의 언어','검사 이름보다 먼저, 지금 풀어야 할 질문을 정한다.',`
          <p>검사는 모두 같은 병을 찾아주는 도구가 아니다. 폐기능검사는 <strong>얼마나 잘 작동하는가</strong>, 영상은 <strong>어디에 어떤 모양의 변화가 있는가</strong>, 조직과 미생물검사는 <strong>무엇이 그 변화를 만들었는가</strong>를 묻는다. 결과를 한 줄로 연결해야 진단이 된다.</p>
          ${table(['지금의 질문','선택할 도구','결과를 읽는 순서'],[
            ['공기를 잘 비우고 담는가?','Spirometry · lung volume',`${w(19,'검사지를 펼치면','검사의 질 → 비율 → 용적')}<br>FEV₁/FVC, FVC, TLC를 같은 숫자로 취급하지 않는다.`],
            ['교환 능력이 떨어지는가?','DLCO',`${w(19,'DLCO는 폐포막뿐','막·면적·Hb·혈관')}<br>확산능 감소를 곧바로 섬유화와 동일시하지 않는다.`],
            ['산소화·환기·산도가 어떤가?','SpO₂ · ABG',`${w(4,'네 장애의 보상을','pH → 주 장애 → 보상')}<br>산소화와 산–염기를 별도로 읽고 합친다.`],
            ['어디가 바뀌었는가?','X선 · CT',`${w(13,'위치와 형태를','위치 → 형태 → 부피 → 분포')}<br>검사 방식과 촬영 조건부터 확인한다.`],
            ['공기와 피가 다르게 가는가?','V/Q scan',`${w(25,'결손을 읽는 세 가지','관류결손 → 환기 → X선')}<br>분절상 결손의 크기와 mismatch를 함께 읽는다.`],
            ['무엇으로 이루어진 병변인가?','배양·분자검사 · 내시경·생검',`${w(30,'도말·배양·Xpert는','균의 존재·종류·내성')} / ${w(32,'조직을 얻고','검체와 조직형')}<br>검출과 질병, 진단과 병기를 구별한다.`]
          ],'질문에 맞추어 고르는 검사')}
          <p class="ra-note">검사의 역할에 대한 보충 자료: <a href="https://site.thoracic.org/advocacy-patients/patient-resources/pulmonary-function-tests" target="_blank" rel="noopener noreferrer">ATS · Pulmonary Function Tests</a>. 구체적인 판정 수치와 적용 조건은 연결된 수업 문서에서 확인한다.</p>
          ${chapter('ABG는 세 질문으로 나누어 읽는다.',`<ol class="ra-reading-steps"><li><strong>pH는 어느 쪽인가?</strong><span>산혈증인지 알칼리혈증인지 먼저 정한다. 정상 pH도 혼합 장애를 배제하지 않는다.</span></li><li><strong>무엇이 그 방향으로 움직였는가?</strong><span>PaCO₂는 호흡성, HCO₃⁻는 대사성 요소다. 예상 보상과 실제 값을 비교한다.</span></li><li><strong>산소는 충분히 도착하는가?</strong><span>PaO₂를 FiO₂와 함께 보고, 필요하면 A–a 차이 또는 P/F ratio를 계산한다.</span></li></ol><p>대사성 산증에서 anion gap을 계산하는 것은 ‘산소가 부족한가’를 묻는 것과 다르다. <strong>검사지 한 장 안에서도 질문을 분리해야 한다.</strong></p>${links(w(4,'전체 흐름은 보상','대사성 산증의 네 단계'),w(4,'원인 감별은 소변','대사성 알칼리증'),w(6,'Berlin 정의는','P/F ratio와 ARDS'))}`)}
          ${chapter('사진에서는 병명보다 묘사가 먼저다.',`<div class="ra-image-language"><div><strong>하얗다</strong><p>폐경화, 간유리음영, 무기폐, 흉수는 모두 가능하다. 혈관이 보이는지, 부피가 줄었는지, 흉막강인지 구분한다.</p>${links(w(13,'폐경화는','폐경화'),w(13,'간유리음영에서는','GGO'),w(22,'무기폐는 하얗게','무기폐'))}</div><div><strong>검다</strong><p>폐기종, 기흉, 공기 포획은 같은 검정이 아니다. 흉막선과 혈관, 폐 크기와 호기 변화를 본다.</p>${links(w(22,'폐기종은 검게','폐기종'),w(22,'기흉은 흉막선','기흉'),w(13,'한쪽 폐가 호기에도','공기 포획'))}</div></div>
          <p>작은 결절이 퍼졌다면 이제 <strong>이차폐소엽의 중심·경계·무작위</strong> 중 어디를 따르는지 본다. 종괴는 위치·성분·침범을, 낭종과 공동은 벽과 주변 병변을 읽는다. 영상의 언어를 배우면 서로 다른 강의의 사진도 같은 문장으로 설명할 수 있다.</p>${links(w(22,'중심과 경계를','이차폐소엽'),w(13,'낭종과 공동은','낭종과 공동'),w(22,'위치와 모양을','영상 비교표'))}`)}
        `)}
        ${section('diseases','05','병을 놓을 자리','위치가 첫 번째 주소이고, 원인과 시간은 그다음 주소다.',`
          <p>‘폐쇄성·감염성·소아·직업성’을 한 줄의 배타적인 분류로 만들면 반드시 겹친다. 앞의 것은 기능, 뒤의 것은 원인이나 환자의 배경이기 때문이다. 먼저 <strong>어디가 달라졌는가</strong>에 병을 놓고, <strong>왜·얼마나 빠르게</strong> 달라졌는지를 더하자.</p>
          <div class="ra-taxonomy"><span>위치<br><strong>기도 · 폐포 · 간질 · 혈관 · 흉막</strong></span><b aria-hidden="true">×</b><span>원인<br><strong>감염 · 면역 · 노출 · 종양 · 발달</strong></span><b aria-hidden="true">×</b><span>시간<br><strong>급성 · 반복 · 만성</strong></span></div>
          <div class="ra-tree">
          ${tree('A','기도 — 좁아지거나, 무너지거나, 청소하지 못한다.','천식 · COPD · 기관지확장증 · 기도이물',`
            <p>쌕쌕거림이 모두 천식인 것은 아니다. 기도가 수축할 수도, 점액으로 막힐 수도, 벽이 파괴되어 분비물이 고일 수도 있다. 같은 폐쇄 양상이어도 바뀐 구조가 다르다.</p>
            ${table(['질환','남길 핵심','이어 읽기'],[
              ['천식','가변적 증상과 기류제한, 기도 염증. 현재 수축을 푸는 일과 다음 악화를 막는 일을 나눈다.',w(15,'천식은 가역적','병리')+' · '+w(24,'','진단·치료')+' · '+w(31,'기관지확장제와 항염증제를','약물')],
              ['COPD','작은 기도 병변과 폐기종이 지속적 기류제한을 만든다. Air trapping과 과팽창이 호흡일을 늘린다.',w(15,'폐기종에서는','폐포벽 파괴')+' · '+w(20,'남은 공기가 많아질수록','과팽창')+' · '+w(23,'COPD에서는 다','호흡 전략')],
              ['기관지확장증','기관지벽 손상과 영구 확장. 청소 장애·감염·염증이 서로 악화시킨다.',w(15,'폐쇄와 감염이 반복되면','병리')+' · '+w(22,'기관지확장증은','CT')+' · '+w(27,'반복 감염의 뒤에','PCD')],
              ['기도이물','갑작스러운 기침·천명, 한쪽 공기 포획. 감염이 생기기 전부터 기계적 막힘이 있다.',w(28,'갑작스러운 천명은','이물의 단서')]
            ],'기도 질환은 무엇이 좁아지게 했는지 비교한다')}
            ${concept('한 질환을 여러 시선으로 묶기 · COPD','폐포벽 파괴 → 탄성반동·기도 지지 감소 → 호기 기류제한 → air trapping → 과팽창 → 호흡근의 불리한 길이. 병리, PFT, CT, 재활은 이 연결을 서로 다른 곳에서 보는 것이다.')}
          `,true)}
          ${tree('B','폐포 — 공기가 있어야 할 자리가 다른 것으로 찬다.','폐렴 · 폐부종 · ARDS · 폐포출혈 · 폐포단백증',`
            <p>폐포 안에 무엇이 들어왔는지부터 묻는다. 고름이면 감염, 물이면 부종, 혈액이면 출혈, surfactant가 쌓이면 청소 장애를 생각한다. 산소화 저하와 하얀 영상은 공유하지만 치료는 같지 않다.</p>
            ${table(['내용물·변화','질환과 원리','이어 읽기'],[
              ['염증성 삼출물','폐렴. 숙주와 감염 환경, 분포, 균 검사로 원인을 좁힌다.',w(17,'세균성 폐렴은','병리')+' · '+w(13,'폐렴은 퍼지는','영상')],
              ['액체','정수압 상승과 투과성 증가를 구분한다.',w(14,'폐부종의 두 기전은','두 부종 기전')],
              ['장벽 손상 + 부종 + 허탈','ARDS는 임상 증후군, DAD는 대표적인 조직 손상 양상이다. 두 이름이 항상 일대일은 아니다.',w(14,'ALI·ARDS의','DAD')+' · '+w(6,'삼출기에는','ARDS의 장벽 손상')],
              ['혈액','폐포출혈. 신장 이상이 동반되면 폐–신장 증후군을 연결한다.',w(14,'Goodpasture에서는','폐와 신장의 기저막')],
              ['제거되지 못한 물질','폐포단백증. Surfactant가 있다고 항상 교환이 잘되는 것은 아니다.',w(16,'폐포단백증은','폐포 청소 기능')]
            ],'폐포 충만은 모양이고, 원인은 따로 찾는다')}
          `)}
          ${tree('C','간질 — 교환면과 폐의 골격이 달라진다.','UIP · NSIP · OP · 과민폐렴 · Sarcoidosis · 진폐증',`
            <p>기침·운동 시 호흡곤란과 제한 양상이 보이면 폐실질의 변화를 생각한다. 다만 간질성 폐질환 안에도 염증, 섬유화, 세기관지·공기 공간 병변이 다양한 비율로 섞인다. <strong>패턴을 찾은 뒤 원인을 찾는 순서</strong>가 중요하다.</p>
            ${table(['구별할 축','핵심','이어 읽기'],[
              ['질환명과 패턴명','IPF는 임상 질환명, UIP는 영상·조직 패턴이다. UIP를 보았다고 원인 확인 없이 IPF로 끝내지 않는다.',w(16,'IPF는 질환명이고','IPF와 UIP')+' · '+w(22,'UIP pattern은','HRCT')],
              ['시간의 균일성','UIP는 시공간적 불균질성, NSIP는 비교적 균일한 변화를 중심으로 읽는다.',w(16,'UIP는 정상 폐와','UIP')+' · '+w(16,'NSIP는','NSIP')],
              ['수복의 위치','OP는 공기 공간 안의 수복 조직이다. “간질성”이라는 큰 이름만으로 모든 병변을 격벽 안에 놓지 않는다.',w(16,'Organizing pneumonia는','OP')],
              ['노출과 분포','HP, 규폐증, 석면증은 노출력과 분포를 붙인다. Sarcoidosis는 림프관성 분포가 단서다.',w(26,'노출 수 시간 뒤','HP')+' · '+w(16,'무기분진 비교표','진폐 비교')+' · '+w(22,'Sarcoidosis는','Sarcoidosis')]
            ],'간질성 질환은 패턴 → 원인 → 진행으로 읽는다')}
          `)}
          ${tree('D','폐혈관 — 피가 못 오거나, 높은 압력으로 흐른다.','급성 PE · CTEPH · PH · PAH · 폐성심',`
            <p>급성 폐색전은 교환할 혈류를 줄이는 동시에 우심실이 밀어내야 할 저항을 늘린다. 산소화와 순환을 함께 보는 이유다. 만성 폐고혈압에서는 압력이 높아진 원인이 폐혈관 앞·뒤 중 어디인지, 폐질환이나 만성 혈전이 있는지 나눈다.</p>
            ${concept('PH ≠ PAH ≠ 폐성심','PH는 폐고혈압 전체, PAH는 그중 한 질환군, 폐성심은 폐·폐혈관 문제가 우심실에 남긴 결과를 가리킨다. 압력이 높다는 사실만으로 모든 환자에게 같은 혈관확장제를 쓰지 않는다.')}
            ${links(w(21,'PH는 높은 압력의','PH와 PAH'),w(21,'PAWP로 앞뒤를','혈역학 분류'),w(21,'검사를 고르기 전에','PE 진단 순서'),w(21,'Group4 PH','CTEPH'),w(25,'고확률은','V/Q scan'))}
          `)}
          ${tree('E','흉막·흉벽·종격동 — 폐 바깥도 호흡을 바꾼다.','기흉 · 흉수 · 농흉 · 흉벽 질환 · 종격동 종괴',`
            <p>폐 안의 변화가 아니라 바깥의 압력과 공간이 문제일 수 있다. 흉막강의 공기나 액체는 폐를 압박한다. 긴장성 기흉에서는 흉강 내 압력 상승으로 정맥환류도 줄어들어 쇼크까지 진행한다.</p>
            <ul><li><strong>기흉:</strong> 흉막선 바깥 혈관 소실. 응급성은 크기만이 아니라 순환·호흡 상태로 판단한다.</li><li><strong>흉수·농흉:</strong> 위치를 확인한 뒤 내용물과 원인을 구분한다. 폐농양은 폐 안, 농흉은 흉막강에 있다.</li><li><strong>흉벽·근육:</strong> 폐실질이 괜찮아도 펴는 힘이 부족하면 환기장애가 생긴다.</li><li><strong>종격동 종괴:</strong> 앞·중간·뒤 구획과 물·지방·고형 조직·혈관의 연결로 좁힌다.</li></ul>
            ${links(w(18,'긴장성 기흉은','긴장성 기흉'),w(22,'농흉은 두꺼워진','농흉'),w(5,'흉벽 질환','흉벽성 환기장애'),w(22,'앞·중간·뒤','종격동의 지도'))}
          `)}
          ${tree('F','감염 — 장소에 숙주와 병원체를 더한다.','세균성 폐렴 · 결핵 · NTM · 진균 · PJP',`
            <p>감염은 어느 한 공간에만 속하지 않는다. 기도·폐포·간질·흉막을 침범할 수 있다. 영상이 비슷해도 건강한 사람의 급성 발열과 면역저하 환자의 아급성 호흡곤란은 출발 목록이 다르다.</p>
            <div class="ra-mini-flow"><span>숙주·노출·속도</span><b>→</b><span>영상의 위치·분포</span><b>→</b><span>균·내성 확인</span><b>→</b><span>맞는 치료</span></div>
            <p>항산균이 보였다고 모두 결핵은 아니다. TST·IGRA 양성도 활동성 결핵의 확진이 아니다. NTM은 <strong>검출 → 질병의 진단 → 치료 결정</strong>을 각각 나누어야 한다. Aspergillus 역시 공동 안의 공생, 알레르기 반응, 조직 침습이 서로 다른 병이다.</p>
            ${links(w(17,'감염 장소와 숙주에','숙주와 감염'),w(30,'도말과 결핵균 PCR의','항산균 검사'),w(30,'TST·IGRA는','감염과 활동성'),w(30,'NTM은 검출','NTM의 세 단계'),w(13,'Aspergillus는','Aspergillus의 세 모습'))}
          `)}
          ${tree('G','종양 — 종류·범위·치료 표적을 따로 묻는다.','양성 결절 · 폐암 · 전이 · 흉막·종격동 종양',`
            <p>동그란 결절을 보았을 때의 첫 질문은 “어떤 항암제를 쓸까?”가 아니다. 양성 가능성, 원발 폐암, 전이 등을 구별하고 검체로 조직을 확인한다. 암이 확인되면 병기와 환자의 기능을 더한다. 바로 아래 흐름에서 이 과정을 이어 보자.</p>
            ${links(w(22,'육아종과 과오종은','양성 결절의 단서'),w(32,'선암은 말초','폐암의 조직형'),w(22,'폐전이는 혈행성','전이의 여러 모습'))}
          `)}
          </div>
        `)}
        ${section('cancer','06','폐암을 만났을 때','모양을 보고, 정체를 확인하고, 범위를 정하고, 치료를 고른다.',`
          <p>폐암은 병리·영상·내과·외과·방사선치료가 한 환자에서 만나는 지점이다. 서로 다른 강의를 각각의 목록으로 외우기보다 <strong>진료에서 다음 결정을 위해 필요한 정보</strong>로 연결하면 순서가 보인다.</p>
          <ol class="ra-cancer-path">
            <li><span>1</span><div><h3>발견 · 어디에 무엇이 있는가?</h3><p>CT에서 위치·크기·고형 성분·침범을 본다. 검진, 의심 병변의 진단, 치료 후 추적은 서로 다른 목적이다.</p>${links(w(32,'흉부 X선의 이상은','CT로 확인'),w(22,'폐암은 둥근','다양한 영상 모습'))}</div></li>
            <li><span>2</span><div><h3>조직 · 어떤 암인가?</h3><p>병변의 위치에 맞춰 내시경, EBUS-TBNA, 경피 생검, 흉수 등으로 검체를 얻는다. 조직형과 필요한 분자표지자를 확인한다.</p>${links(w(32,'조직을 얻고','검체 선택'),w(32,'EBUS-TBNA는','EBUS-TBNA'),w(32,'조직형을 정한 뒤에는','분자표지자'))}</div></li>
            <li><span>3</span><div><h3>병기 · 어디까지 퍼졌는가?</h3><p>T는 원발 종양, N은 국소 림프절, M은 원격 전이다. PET은 대사와 전이를 평가하지만 양성 소견이 항상 암을 뜻하지는 않는다. 조직 확인이 필요한 상황을 구별한다.</p>${links(w(22,'폐암 병기는','영상 TNM'),w(25,'림프절 PET 양성은','PET의 한계'),w(32,'악성 흉수는','악성 흉수'))}</div></li>
            <li><span>4</span><div><h3>치료 · 제거할 수 있고, 견딜 수 있는가?</h3><p>절제 가능한 병기인지와 수술을 견딜 기능이 있는지는 별도다. 조직형·병기·표적·전신 상태를 함께 놓고 수술, 방사선, 전신치료를 조합한다.</p>${links(w(32,'수술로 뗄 수 있는 것과','절제 가능성과 수술 가능성'),w(25,'제거할 폐의 크기보다','수술 후 기능'),w(32,'항암치료의 세 갈래는','전신치료의 세 갈래'))}</div></li>
          </ol>
          ${concept('병기와 분자표지자는 서로를 대신하지 않는다.','TNM은 퍼진 범위이고, EGFR 등의 변이와 PD-L1은 치료 선택을 위한 정보다. 둘 다 필요하지만 같은 분류표의 칸이 아니다. 검사들이 실제로는 병행될 수 있어도, 각각 답하는 질문은 분리해서 이해한다.')}
          <p class="ra-note">분자표지자와 치료 선택의 관계: <a href="https://www.cancer.gov/about-cancer/treatment/types/biomarker-testing-cancer-treatment" target="_blank" rel="noopener noreferrer">NCI · Biomarker Testing for Cancer Treatment</a>.</p>
        `)}
        ${section('treatment','07','치료가 바꾸는 것','약 이름을 외우기 전에, 어느 과정을 바꾸는지 놓는다.',`
          <p>숨찬 환자에게 필요한 치료가 모두 산소인 것은 아니다. 산소가 부족하면 산소화를, 공기가 움직이지 못하면 환기를 도와야 한다. 감염·염증·혈전처럼 원인이 남아 있다면 그 원인도 함께 다룬다.</p>
          ${table(['개입할 곳','치료의 역할','어디에서 다시 읽을까'],[
            ['좁은 기도','β₂ 작용제는 이완 신호를 늘리고, 항무스카린제는 수축 신호를 막는다.',w(31,'기관지를 여는','기관지확장제')],
            ['반복되는 염증','ICS·류코트리엔 조절제·생물학적 제제는 염증 경로를 다르게 겨냥한다.',w(31,'염증과 다음 발작을','항염증제')+' · '+w(24,'생물학적 제제는','표현형과 표적')],
            ['부족한 산소화','FiO₂를 높이거나, 적응증에 맞춰 PEEP·prone position 등으로 교환 가능한 폐를 활용한다.',w(6,'PEEP는','PEEP')+' · '+w(6,'prone position은','Prone position')],
            ['부족한 환기','호흡근 부담을 줄이고 유효 환기를 보조한다. NIV·삽관은 환자 상태와 기도 보호 능력에 따라 고른다.',w(5,'NIV는 네 가지','NIV의 적용')+' · '+w(5,'기도를 스스로','NIV의 한계')],
            ['위험한 원인','항균제, 항응고·재관류, 감압·배액, 해독제는 각각 원인을 다룬다.',w(30,'H·R·E·Z의','항결핵제')+' · '+w(21,'항응고는 혈전의','혈전 치료')+' · '+w(9,'Atropine은','유기인제 해독')],
            ['남은 기능과 활동','운동훈련·호흡 전략·기침 보조는 실제로 움직이고 분비물을 배출하는 능력을 개선한다.',w(23,'폐기능 수치보다','재활의 목표')+' · '+w(23,'효과적인 기침에는','기침 보조')]
          ],'치료를 작동 위치에 놓는 표')}
          ${chapter('천식과 COPD는 약을 공유해도 치료의 중심이 다르다.',`<p>둘 다 기관지확장제를 쓰지만 천식에서는 <strong>ICS를 포함한 항염증 치료</strong>가 중심이다. COPD에서는 지속성 기관지확장제를 바탕으로 증상·악화 이력·혈중 호산구 등을 보고 ICS를 더할지 판단한다. “LABA를 쓴다”는 한 문장만으로 두 치료를 같은 표에 넣으면 중요한 차이가 사라진다.</p>${links(w(24,'2026 치료 단계는','천식의 두 Track'),w(20,'ICS는 악화 이력과','COPD의 ICS'),w(31,'SABA와 LABA는','약 이름과 작용 시간'))}`)}
          ${chapter('중환자에서는 돕는 치료도 손상을 만들 수 있다.',`<p>ARDS에서는 실제로 환기되는 폐가 작아져 있다. 큰 용적과 높은 압력으로 억지로 밀어 넣으면 남은 폐를 더 다치게 할 수 있다. 그래서 <strong>폐보호 환기</strong>를 기본으로 산소화 보조를 더한다. ECMO도 VV는 가스교환을, VA는 순환 보조까지 맡는다는 차이가 있다.</p>${links(w(6,'숨 쉴 수 있는 폐는','Baby lung'),w(6,'일회호흡량은','폐보호 환기'),w(12,'VV와 VA의','VV와 VA-ECMO'))}
          ${concept('숫자와 처방의 조건은 세부 문서에 둔다.','이 문서는 치료를 놓을 위치를 잡는 지도다. 용량·단계·적응증·금기는 연결된 문단에서 환자의 조건과 함께 읽는다. 산소 투여가 환기 보조나 원인 치료를 대신하지는 않는다.')}`)}
        `)}
        ${section('context','08','나이·환경·시간을 더하면','같은 구조라도 환자의 배경이 달라지면 해석이 바뀐다.',`
          <div class="ra-context-grid">
            <section><span class="ra-context-number">나이</span><h3>아이는 작은 성인이 아니다.</h3><p>좁은 기도는 작은 부종에도 크게 불리하다. 발달 중인 조절, 수유와 관련된 흡인, 선천 구조 이상을 함께 생각한다. 흡기성 stridor와 호기성 wheeze를 구분하되, 소리 하나만으로 진단하지 않는다.</p>${links(w(27,'영아는 왜','영아의 구조'),w(27,'선천기도 기형','선천 기도'),w(28,'선천 폐병변을','선천 폐병변'))}</section>
            <section><span class="ra-context-number">환경</span><h3>직업은 병의 이름이 아니라 원인의 단서다.</h3><p>직업명만 묻지 않고 실제 작업·물질·기간·보호구·증상의 시간 관계를 묻는다. 노출은 천식, 간질성 질환, 흉막 병변, 종양 등 서로 다른 위치에 흔적을 남긴다.</p>${links(w(26,'직업명보다','노출력'),w(26,'석면은 간질과','석면의 여러 질환'),w(9,'파라콰트는','독성 폐손상'))}</section>
            <section><span class="ra-context-number">시간</span><h3>언제 시작했는지가 목록을 바꾼다.</h3><p>수초–수분의 급작스러운 증상, 수일의 발열, 수개월의 진행성 호흡곤란은 우선순위가 다르다. 만성 질환 환자의 급격한 악화에서도 원래 병 외에 감염·PE·기흉 등을 다시 살핀다.</p>${links(w(21,'서서히 숨찬 환자와','급성과 만성'),w(20,'급성 악화에서는','COPD 급성 악화'),w(28,'갑자기 막힌','갑작스러운 기도 폐쇄'))}</section>
          </div>
          ${concept('병력은 검사 전에 이미 지도의 범위를 좁힌다.','나이, 흡연·작업·약물 노출, 면역 상태, 증상의 시작과 반복 양상. 이 정보들을 영상이나 수치와 붙여야 비슷해 보이는 병이 갈라진다.')}
        `)}
        ${section('path','09','전체 학습 길잡이','앞에서 배운 원리가, 다음 문서를 읽는 도구가 되도록.',`
          <p>처음에는 <strong>정상 구조 → 역학 → 교환·운반·조절</strong>의 연결을 만든다. 이후에는 질환 하나를 골라 병리와 임상, 영상과 치료를 함께 읽는다. 검사를 만날 때마다 그 검사가 측정하는 원리로 잠깐 돌아오면 된다.</p>
          <div class="ra-course-index">${groups.map((g,i)=>`<section><header><span>${i+1}</span><div><h3>${esc(g.title)}</h3><p>${g.description}</p></div></header><div class="ra-course-links">${g.ids.map(id=>{
            const c=courses.get(id), title=String(c?.title || `${id}강`).replace(/<[^>]*>/g,'');
            return hasNote(id) ? w(id,'',`${id} · ${title}`) : `<span class="ra-unavailable">${esc(id+' · '+title)}<small>문서 준비 중</small></span>`;
          }).join('')}</div></section>`).join('')}</div>
          <div class="ra-ending"><p>새로운 병을 만나면 세 질문으로 돌아온다.</p><strong>어디가 달라졌나?<br>그 변화는 기능을 어떻게 바꾸나?<br>무엇으로 확인하고, 무엇을 바꿀 것인가?</strong><button type="button" data-ra-jump="journey">전체 지도로 돌아가기 ↑</button></div>
        `)}
        <footer class="ra-footer">개념을 연결하는 상위 문서 · 세부 기준과 조건은 각 Wiki 문단에서 확인한다.</footer>
        </div>
      </div>
    </article>`;
    // All content is local and selectable; no network requests or external fonts are needed.
    function selectStation(key) {
      const item = stations.find(s=>s.key===key) || stations[0];
      root.querySelectorAll('[data-ra-station]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.raStation===item.key)));
      const panel=root.querySelector('#ra-station-detail');
      panel.innerHTML=`<small>${item.tags}</small><h3>${item.title}</h3><p>${item.text}</p>${item.links()}`;
    }
    selectStation('pump');
    const tocButton=root.querySelector('[data-ra-toc-toggle]');
    const tocNav=root.querySelector('#ra-toc-nav');
    const layout=root.querySelector('.ra-layout');
    function setToc(collapsed, remember=false) {
      // Reflow can change line wrapping. Keep the reader's first visible paragraph.
      const scroller=root.closest('[data-context-link-source]');
      const top=(scroller?.getBoundingClientRect().top || 0)+70;
      const anchor=remember ? [...root.querySelectorAll('.ra-body h2,.ra-body h3,.ra-body p,.ra-body tr')].find(el=>{
        const r=el.getBoundingClientRect();return r.height>0 && r.top>=top && r.top<innerHeight;
      }) : null;
      const oldTop=anchor?.getBoundingClientRect().top;
      layout.classList.toggle('is-toc-collapsed',collapsed);
      tocNav.hidden=collapsed;
      tocButton.setAttribute('aria-expanded',String(!collapsed));
      const label=collapsed?'목차 펼치기':'목차 접기';
      tocButton.setAttribute('aria-label',label);tocButton.title=label;
      if(remember){
        try{localStorage.setItem('respiratory-atlas-toc-collapsed',String(collapsed));}catch(_){}
        if(anchor)requestAnimationFrame(()=>{
          const delta=anchor.getBoundingClientRect().top-oldTop;
          if(scroller)scroller.scrollTop+=delta;else window.scrollBy({top:delta,behavior:'instant'});
        });
      }
    }
    let collapsed=false;
    try{collapsed=localStorage.getItem('respiratory-atlas-toc-collapsed')==='true';}catch(_){}
    setToc(collapsed);
    const handleClick = event => {
      if(event.target.closest('[data-ra-toc-toggle]'))setToc(!tocNav.hidden,true);
      const station=event.target.closest('[data-ra-station]');
      if(station) selectStation(station.dataset.raStation);
      const jump=event.target.closest('[data-ra-jump]');
      if(jump){
        const target=root.querySelector(`#ra-${jump.dataset.raJump}`);
        const scroller=root.closest('[data-context-link-source]');
        if(target && scroller) scroller.scrollTo({top:scroller.scrollTop+target.getBoundingClientRect().top-scroller.getBoundingClientRect().top-18,behavior:'smooth'});
        else target?.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'});
        target?.querySelector('h2')?.focus({preventScroll:true});
      }
    };
    root.addEventListener('click',handleClick);
    // Determine the current chapter from all headings, including after a large jump.
    // Reading may happen in the document or the existing context source scroll pane.
    let scrollFrame=0;
    const syncChapter=()=>{
      scrollFrame=0;
      if(root.closest('[hidden]'))return;
      const scroller=root.closest('[data-context-link-source]');
      const boundary=(scroller?.getBoundingClientRect().top || 0)+140;
      let key=contents[0][0];
      root.querySelectorAll('.ra-section').forEach(s=>{
        if(s.getBoundingClientRect().top<=boundary)key=s.id.replace('ra-','');
      });
      root.querySelectorAll('.ra-toc [data-ra-jump]').forEach(b=>{
        if(b.dataset.raJump===key)b.setAttribute('aria-current','location'); else b.removeAttribute('aria-current');
      });
    };
    const onScroll=()=>{if(!scrollFrame)scrollFrame=requestAnimationFrame(syncChapter);};
    document.addEventListener('scroll',onScroll,{capture:true,passive:true});
    syncChapter();
    cleanup=()=>{cancelAnimationFrame(scrollFrame);document.removeEventListener('scroll',onScroll,true);root.removeEventListener('click',handleClick);};
    root.dataset.atlasReady='true';
    window.RespiratoryAtlas.audit = () => linkAudit.slice();
    window.RespiratoryAtlas.groups = groups;
  }
  window.RespiratoryAtlas = {render, audit:()=>[], groups};
})();
