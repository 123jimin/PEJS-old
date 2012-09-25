function isPrime(n){
  if(n%3==0) return false; if(n<25) return true;
  var p=5; while(p*p<=n) if(n%p==0||n%(p+2)==0) return false; else p+=6;
  return true;
}
for(var s=5,i=5;i<2000000;i+=2)if(isPrime(i))s+=i;console.log(s);
