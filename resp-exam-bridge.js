// Read-only explanation preview: no answer/status writes to the original J.
(()=>{
 const params=new URLSearchParams(location.search);
 if(parent===window||params.get('examPreview')!=='1')return;
 const number=Number(params.get('question'));
 try{
  const q=jblQuestions.find(q=>q.globalNumber===number);
  if(!q)throw Error('문항 없음');
  const style=document.createElement('style');
  style.textContent='body{background:white!important;padding:0!important;margin:0!important}body>*:not(#exam-j-content):not(script):not(style){display:none!important}#exam-j-content{display:block!important;padding:14px;max-width:100%;overflow-wrap:anywhere}.jbl-explanation{margin:0!important}';
  document.head.append(style);
  const main=document.createElement('main');main.id='exam-j-content';main.innerHTML=questionExplanationMarkup(q);document.body.append(main);
  // Wiki links intentionally open the source site, not a nested preview.
  main.querySelectorAll('a').forEach(a=>{a.target='_blank';a.rel='noopener';if(a.getAttribute('href')?.startsWith('#'))a.href='./index.html'+a.getAttribute('href');});
  parent.postMessage({type:'exam-j-ready',question:number},'*');
 }catch{parent.postMessage({type:'exam-j-error',question:number},'*');}
 window.addEventListener('keydown',e=>{if(e.key==='Escape')parent.postMessage({type:'exam-j-close',question:number},'*');});
})();
