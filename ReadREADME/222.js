//Random climbing - result 'can' vary.
function v(){
  function x(r1,r2){return 2000*Math.sqrt(5)*Math.sqrt(r1*10+r2*10-500);}
  function l(a){
    for(var i=0,s=1000*(a[0]+a[a.length-1]);i<a.length-1;i++) s+=x(a[i],a[i+1]);
    return s;
  }
  function swap(a,i,j){
    a[i]^=a[j]; a[j]^=a[i]; a[i]^=a[j];
  }
  function chg(a,i,j){
    var la=l(a); swap(a,i,j);
    if(l(a)>la) swap(a,i,j);
  }
  for(var a=[],i=50,j,k;i>=30;i--) a.push(i);
  a.sort(function(){return Math.random()-0.5;});
  for(i=0;i<a.length;i++)
    for(j=0;j<a.length-1;j++)
      for(k=j+1;k<a.length;k++) chg(a,j,k);
  return l(a);
}
for(var i=0,k=1e10,t;i<100;i++)
  if((t=v())<k){k=t;i=0;}
console.log(Math.round(k));
