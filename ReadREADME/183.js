function GCD(a,b){
  if(a<b) return GCD(b,a);
  if(a==b) return a;
  if(b==0) return a;
  if(b==1) return 1;
  return GCD(b,a%b);
}
function ok(n,x){
  x/=GCD(n,x);
  while(x%2==0) x/=2;
  while(x%5==0) x/=5;
  return x==1;
}
function kv(x){
  var k=~~(x/Math.E),y=0;
  while(k*Math.log(x/k)>=y){
    y = k*Math.log(x/k); k++;
  }
  return k-1;
}
function D(n){
  return ok(n,kv(n))?-n:n;
}
for(var N=5,s=0;N<=10000;N++) s+=D(N);
console.log(s);
