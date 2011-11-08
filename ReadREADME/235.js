function f(x){
  for(var k=1,n=600000000000;k<=5000;k++)
    n+=(900-3*k)*Math.pow(x,k-1);
  return n;
}
function d(x){
  for(var k=2,n=0;k<=5000;k++)
    n+=(k-1)*(900-3*k)*Math.pow(x,k-2);
  return n;
}
for(var v=1,i=0.001;i>=1e-13;i/=10)
  while(f(v+i)>=0) v+=i;
console.log(Math.round(v*1e12)/1e12);
