document.addEventListener('click',event=>{
 if(!event.target.closest('[data-resp-exams]'))return;
 let dialog=document.getElementById('resp-exam-picker');
 if(!dialog){
  dialog=document.createElement('dialog');dialog.id='resp-exam-picker';
  dialog.style.cssText='border:1px solid #d8bfd2;border-radius:18px;padding:24px;max-width:calc(100vw - 32px);width:440px;color:inherit;background:var(--paper,#fff)';
  dialog.innerHTML='<form method="dialog"><button aria-label="닫기" style="float:right;border:0;background:none;color:inherit;font-size:24px">×</button></form><h2 style="margin-top:0">실전처럼 풀기</h2><p>120분 · 문항당 1점 · 답안 자동 저장</p><div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px">'+[2025,2024,2023,2022,2021,2020].map(y=>'<a style="text-align:center;padding:16px 6px;border:1px solid #d8bfd2;border-radius:10px;color:inherit;text-decoration:none;font-weight:bold" href="./exam-'+y+'.html">'+y+'</a>').join('')+'</div><p style="font-size:12px;margin-bottom:0">현재 수록된 기출 기준입니다. 일부 문항은 명확한 채점을 위해 실전용으로 보완했으며, 피드백에서 수정 여부를 확인할 수 있습니다.</p>';
  document.body.append(dialog);
  dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
 }
 dialog.showModal();
});
