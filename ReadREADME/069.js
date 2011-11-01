function isPrime(n){
  if(n<2) return false; if(n<4) return true;
  if(n%2==0||n%3==0) return false; if(n<25) return true;
  var p=5; while(p*p<=n) if(n%p==0||n%(p+2)==0) return false; else p+=6;
  return true;
}
for(var n=6,i=5;n*i<=1000000;i+=(i%6==1?4:2)) if(isPrime(i)) n*=i;
console.log(n);
