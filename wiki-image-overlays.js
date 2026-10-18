(function () {
  'use strict';
  const ns = 'http://www.w3.org/2000/svg';
  let serial = 0;
  const imageCleanups = new WeakMap();
  const esc = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  function find(src) {
    let path;
    try { path = decodeURIComponent(new URL(src, document.baseURI).pathname); }
    catch (_) { path = String(src).split(/[?#]/)[0]; }
    const prefix = 'assets/';
    const at = path.lastIndexOf(prefix);
    return at < 0 ? null : (window.WIKI_IMAGE_ANNOTATIONS || {})[path.slice(at)] || null;
  }
  function svgMarkup(info) {
    const w = info.width, h = info.height, font = Math.max(w * .024, h * .024);
    const x = v => +(v * w / 1000).toFixed(2), y = v => +(v * h / 1000).toFixed(2);
    function path(points) {
      let axis = 0;
      return points.map(v => typeof v === 'string' ? (axis = 0, v) : ((axis++ % 2) ? y(v) : x(v))).join(' ');
    }
    const marks = (info.marks || []).map((m, i) => {
      const color = m.color || '#ffd45c';
      let shape = '';
      if (m.type === 'path') shape = `<path d="${path(m.points)}"/>`;
      if (m.type === 'ellipse') shape = `<ellipse cx="${x(m.cx)}" cy="${y(m.cy)}" rx="${x(m.rx)}" ry="${y(m.ry)}"/>`;
      if (m.type === 'arrow') {
        const ax=x(m.from[0]), ay=y(m.from[1]), bx=x(m.to[0]), by=y(m.to[1]);
        const angle=Math.atan2(by-ay,bx-ax), size=font*.62;
        shape=`<path d="M ${ax} ${ay} L ${bx} ${by} M ${bx-size*Math.cos(angle-.5)} ${by-size*Math.sin(angle-.5)} L ${bx} ${by} L ${bx-size*Math.cos(angle+.5)} ${by-size*Math.sin(angle+.5)}"/>`;
      }
      const label=m.label || m.from;
      const num=label ? `<circle cx="${x(label[0])}" cy="${y(label[1])-font*.75}" r="${font*.69}" fill="#141414" fill-opacity=".86" stroke="${color}" stroke-width="1.2" vector-effect="non-scaling-stroke"/><text x="${x(label[0])}" y="${y(label[1])-font*.42}" fill="${color}" font-size="${font}" font-family="Arial,sans-serif" font-weight="700" text-anchor="middle">${i+1}</text>` : '';
      return `<g><title>${esc(m.text)}</title><g fill="none" stroke="${color}" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round" class="wiki-overlay-strokes">${shape}</g>${num}</g>`;
    }).join('');
    return `<svg xmlns="${ns}" viewBox="0 0 ${w} ${h}" class="wiki-image-overlay" aria-hidden="true" focusable="false">${marks}</svg>`;
  }
  function build(image, host, info, initial) {
    const stage=document.createElement('div');stage.className='wiki-image-stage';
    image.before(stage);stage.appendChild(image);
    image.setAttribute('width',info.width);image.setAttribute('height',info.height);
    image.style.aspectRatio=`${info.width} / ${info.height}`;
    const marks=info.marks || [];
    if (!marks.length) return stage;
    stage.insertAdjacentHTML('beforeend',svgMarkup(info));
    const svg=stage.querySelector('svg');svg.id='wiki-overlay-'+(++serial);
    const bar=document.createElement('div');bar.className='wiki-overlay-controls';
    const button=document.createElement('button');button.type='button';button.className='wiki-overlay-toggle';
    button.setAttribute('data-wiki-overlay-toggle','');button.setAttribute('aria-controls',svg.id);
    const legend=document.createElement('div');legend.className='wiki-overlay-legend';
    for (const [i,m] of marks.entries()) {
      const line=document.createElement('span'),number=document.createElement('strong');
      number.textContent=String(i+1);line.append(number,document.createTextNode(' '+m.text));legend.appendChild(line);
    }
    function show(on) {
      stage.dataset.overlayVisible=String(on);svg.style.visibility=on?'visible':'hidden';
      legend.hidden=!on;button.setAttribute('aria-pressed',String(on));
      button.textContent=on?'표시 숨기기':'표시하기';
    }
    button.addEventListener('click',event=>{event.preventDefault();event.stopPropagation();show(stage.dataset.overlayVisible!=='true');});
    bar.appendChild(button);stage.before(bar);stage.after(legend);
    imageCleanups.get(image)?.();
    const failed=()=>stage.classList.add('wiki-image-unavailable');
    const loaded=()=>stage.classList.remove('wiki-image-unavailable');
    image.addEventListener('error',failed);image.addEventListener('load',loaded);
    imageCleanups.set(image,()=>{image.removeEventListener('error',failed);image.removeEventListener('load',loaded);imageCleanups.delete(image);});
    show(!!initial);
    return stage;
  }
  function enhance(image) {
    const info=find(image.getAttribute('src'));
    if (!info || image.closest('.wiki-image-stage')) return;
    const figure=image.closest('figure.wiki-figure');if(!figure)return;
    figure.classList.add('wiki-radiology-figure');
    image.loading='lazy';image.decoding='async';
    build(image,figure,info,false);
  }
  function clearModal(modal) {
    const body=modal.querySelector('.wiki-image-modal-body');
    if(body){const image=body.querySelector('img');if(image){imageCleanups.get(image)?.();body.before(image);image.removeAttribute('width');image.removeAttribute('height');image.style.removeProperty('aspect-ratio');}body.remove();}
    modal.classList.remove('wiki-annotated-modal');
  }
  function openModal(modal,src,origin) {
    clearModal(modal);
    const image=modal.querySelector('img');image.src=src;image.alt=origin?.alt || '확대된 이미지';
    const info=find(src);if(!info)return;
    const body=document.createElement('div');body.className='wiki-image-modal-body';
    body.style.width=`min(94vw, calc((90vh - 106px) * ${info.width/info.height}))`;
    image.before(body);body.appendChild(image);modal.classList.add('wiki-annotated-modal');
    body.addEventListener('click',e=>e.stopPropagation());
    build(image,body,info,origin?.closest('.wiki-image-stage')?.dataset.overlayVisible==='true');
  }
  window.WikiImageOverlays={find,enhance,openModal,clearModal,svgMarkup};
})();
