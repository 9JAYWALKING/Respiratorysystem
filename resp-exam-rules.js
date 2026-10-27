(function(root){
 'use strict';
 const normalize=v=>String(v??'').normalize('NFKC').toLowerCase().replace(/[\s\p{P}\p{S}]+/gu,'');
 function evaluate(q,value){
  if(q.choices.length){const a=[...new Set(Array.isArray(value)?value:[])].sort((a,b)=>a-b),b=[...new Set(q.answerIndices)].sort((a,b)=>a-b);return {correct:b.length>0&&a.length===b.length&&a.every((v,i)=>v===b[i]),missing:[]};}
  const t=normalize(value);if(!t)return {correct:false,missing:['미응답']};
  if(q.modelAnswer&&t===normalize(q.modelAnswer))return {correct:true,missing:[]};
  // Conservative automation: legitimate paraphrases can be corrected after review.
  if(/아니다|아님|않|없다|\bnot\b/i.test(String(value)))return {correct:false,missing:['부정 표현은 모범답안과 대조 후 정정']};
  if(q.accepted?.length)return {correct:q.accepted.some(a=>normalize(a)===t),missing:[]};
  const matched=(q.keywordGroups||[]).filter(g=>g.some(a=>t.includes(normalize(a)))).length;
  if([1,248,297].includes(q.globalNumber)){
   const ordinary=q.keywordGroups[0].some(a=>t.includes(normalize(a)));
   const rupture=/(?:장기|기관|기관지|심장|식도|대동맥|폐|organ|trachea|heart).{0,80}(?:파열|rupture)/.test(t);
   return {correct:matched+(!ordinary&&rupture?1:0)>=q.minGroups,missing:[]};
  }
  if(q.globalNumber===232)return {correct:/(?:아세틸콜린에스테라제|아세틸콜린에스터레이스|아세틸콜린에스테레이스|acetylcholinesterase|acetylcholineesterase|ache)/.test(t)&&/(?:억제|인산화|inhibit|phosphorylat)/.test(t),missing:[]};
  return {correct:matched>=(q.minGroups||Infinity),missing:[`${matched}/${q.minGroups}개 핵심 항목 확인`]};
 }
 function correct(q,value,overrides){return !q.choices.length&&typeof overrides?.[q.id]==='boolean'?overrides[q.id]:evaluate(q,value).correct;}
 function score(qs,answers,overrides){return qs.reduce((s,q)=>({total:s.total+q.points,earned:s.earned+(correct(q,answers[q.id],overrides)?q.points:0)}),{total:0,earned:0});}
 const api={normalize,evaluate,correct,score};if(typeof module!=='undefined')module.exports=api;else root.ExamRules=api;
})(typeof window!=='undefined'?window:globalThis);
