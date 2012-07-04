function isPrime(n){
  if(n<2) return false; if(n<4) return true;
  if(n%2==0||n%3==0) return false; if(n<25) return true;
  var p=5; while(p*p<=n) if(n%p==0||n%(p+2)==0) return false; else p+=6;
  return true;
}
for(var n=0,p=3,x;p<1e6;p+=2) if(isPrime(p)){
  x=(p*p-3)/2; n+=Math.floor(x/3)-Math.floor(x/4);
}
console.log(2*n);
