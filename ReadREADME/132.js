function isPrime(n){
  if(n%3==0||n%5==0||n%7==0) return false;
  var p=11; while(p*p<=n) if(n%p==0||n%(p+2)==0) return false; else p+=6;
  return true;
}
function isFactor(n){
  if(n%2==0||n%3==0||n%5==0) return false;
  if(!isPrime(n)) return false;
  if(1e9%(n-1)==0) return true;
  for(var x=10%n,i=1;x!=1;x=(x*10)%n,i++);
  return 1e9%i==0;
}
for(var i=7,n=0,s=0;n<40;i+=2) if(isFactor(i)) n++,s+=i;
console.log(s);
