function isPrime(n){
  var p=5; while(p*p<=n) if(n%p==0||n%(p+2)==0) return false; else p+=6;
  return true;
}
function fm(p){
  for(var a=1;a<10;a+=2) if(((p%10)*a)%10==9) return (a*p+1)/10;
  return -1;
}
for(var s=fm(3),i=7;i<1e7;i+=(i%6==1?4:2)) if(isPrime(i)) s+=fm(i);
console.log(s);
