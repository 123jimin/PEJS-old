function isPrime(n){
  if(n<2) return false; if(n<4) return true;
  if(n%2==0||n%3==0) return false; if(n<25) return true;
  var p=5; while(p*p<=n) if(n%p==0||n%(p+2)==0) return false; else p+=6;
  return true;
}
for(var i=1,a,n=0;;i++){
  a=4*i*(i+1)+1;
  if(isPrime(a-i*2)) n++;
  if(isPrime(a-i*4)) n++;
  if(isPrime(a-i*6)) n++;
  if(n*10<1+i*4) break;
}
console.log(i*2+1);
