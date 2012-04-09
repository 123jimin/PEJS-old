function isPrime(n){
  if(n<2) return false; if(n<4) return true;
  if(n%2==0||n%3==0) return false; if(n<25) return true;
  var p=5; while(p*p<=n) if(n%p==0||n%(p+2)==0) return false; else p+=6;
  return true;
}
for(var n=0,i=1,j;(j=3*i*i+3*i+1)<1e6;i++) if(isPrime(j)) n++; console.log(n);
