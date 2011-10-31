function isPrime(n){
  if(n<2) return false; if(n<4) return true;
  if(n%2==0||n%3==0) return false; if(n<25) return true;
  var p=5; while(p*p<=n) if(n%p==0||n%(p+2)==0) return false; else p+=6;
  return true;
}
function isSumQ(x){
  for(var i=1;2*i*i<x;i++) if(isPrime(x-2*i*i)) return true; return false;
}
for(var i=35;;i+=2){
  if(!isPrime(i)&&!isSumQ(i)){console.log(i);break;}
}
