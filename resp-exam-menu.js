document.addEventListener('click',event=>{
 const trigger=event.target.closest('[data-resp-exams], [data-resp-mocks]');
 if(!trigger)return;
 const isMock=trigger.hasAttribute('data-resp-mocks');
 const pickerId=isMock?'resp-mock-picker':'resp-exam-picker';
 let dialog=document.getElementById(pickerId);
 if(!dialog){
  dialog=document.createElement('dialog');dialog.id=pickerId;
  dialog.style.cssText='border:1px solid #d8bfd2;border-radius:18px;padding:24px;max-width:calc(100vw - 32px);width:440px;color:inherit;background:var(--paper,#fff)';
  dialog.innerHTML='<form method="dialog"><button aria-label="닫기" style="float:right;border:0;background:none;color:inherit;font-size:24px">×</button></form><h2 style="margin-top:0">실전처럼 풀기</h2><p>120분 · 문항당 1점 · 답안 자동 저장</p><div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px">'+[2025,2024,2023,2022,2021,2020].map(y=>'<a style="text-align:center;padding:16px 6px;border:1px solid #d8bfd2;border-radius:10px;color:inherit;text-decoration:none;font-weight:bold" href="./exam-'+y+'.html">'+y+'</a>').join('')+'</div><p style="font-size:12px;margin-bottom:0">현재 수록된 기출 기준입니다. 일부 문항은 명확한 채점을 위해 실전용으로 보완했으며, 피드백에서 수정 여부를 확인할 수 있습니다.</p>';
  if(isMock){
   dialog.innerHTML='<form method="dialog"><button aria-label="닫기" style="float:right;border:0;background:none;color:inherit;font-size:24px;cursor:pointer">×</button></form><h2 id="resp-mock-picker-title" style="margin-top:0">실전 모의고사</h2><p>126문항 · 120분</p><p id="resp-mock-picker-notice">클릭하면 시험이 바로 시작됩니다.</p><div style="display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px">'+[1,2].map(n=>'<a style="text-align:center;padding:16px 6px;border:1px solid #d8bfd2;border-radius:10px;color:inherit;text-decoration:none;font-weight:bold" href="./mock-'+n+'.html">'+n+'회</a>').join('')+'</div>';
   dialog.setAttribute('aria-labelledby','resp-mock-picker-title');
   dialog.setAttribute('aria-describedby','resp-mock-picker-notice');
  }
  document.body.append(dialog);
  dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
 }
 dialog.showModal();
});
