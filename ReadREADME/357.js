function isPrime(n){
  if(n<2) return false; if(n<4) return true;
  if(n%2==0||n%3==0) return false; if(n<25) return true;
  var p=5; while(p*p<=n) if(n%p==0||n%(p+2)==0) return false; else p+=6;
  return true;
}
function isPrimeGen(n){
  var d=3,s=Math.sqrt(n);
  if(s==Math.floor(s)) return false;
  while(d<s){
    if(n%d==0&&(n%(d*d)==0||isPrime(d+n/d)==false)) return false;
    d++;
  }
  return true;
}
for(var n=3,k=0,l=Math.pow(10,8);k*12+10<l;k++){
  if(isPrime(k*12+11)&&isPrime(k*6+7)&&isPrimeGen(k*12+10))
    n+=k*12+10;
  if(isPrime(k*12+7)&&isPrime(k*6+5)&&isPrime(k*4+5)&&isPrimeGen(k*12+6))
    n+=k*12+6;
}
console.log(n);
