function modProd(a,b,n){
  if(a*b<1e15) return a*b%n;
  if(b%2==0) return 2*modProd(a,b/2,n)%n;
  return (modProd(a,b-1,n)+a)%n;
}
function modPow(a,b,n){
  if(b==0) return 1; if(b==1) return a;
  if(b%2==0){
    var c=modPow(a,b/2,n); return modProd(c,c,n);
  }
  return modProd(modPow(a,b-1,n),a,n);
}
for(var i=1,s=0;i<=1000;i++) s=(s+modPow(i,i,1e10))%1e10;
console.log(s);