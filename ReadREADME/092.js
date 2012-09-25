function f(n){
  if(n<10) return n*n;
  return f(~~(n/10))+(n%10)*(n%10);
}
function q(n){
  while(n!=1&&n!=89) n=f(n); return n==89;
}
for(var i=1,a=new Uint8Array(568),j=0;i<=567;i++) if(q(i)) a[i]=1;
for(i=1;i<10000000;i++) j+=a[f(i)]; console.log(j);
