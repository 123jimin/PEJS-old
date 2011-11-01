function f(n){
  n=''+n; for(var i=0,j=0;i<n.length;i++) j+=n[i]*n[i];
  return j;
}
function q(n){
  while(n!=1&&n!=89) n=f(n); return n==89;
}
for(var i=1,a=[0],j=0;i<=567;i++) a.push(q(i)?1:0);
for(i=1;i<10000000;i++) j+=a[f(i)]; console.log(j);
