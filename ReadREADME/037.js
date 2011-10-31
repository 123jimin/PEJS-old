function isPrime(n){
  if(n<2) return false; if(n<4) return true;
  if(n%2==0||n%3==0) return false; if(n<25) return true;
  var p=5; while(p*p<=n) if(n%p==0||n%(p+2)==0) return false; else p+=6;
  return true;
}
function isOK(k){
  if(!isPrime(k)) return false; k=''+k;
  for(var i=1;i<k.length;i++)
  if(!isPrime(~~k.slice(i))||!isPrime(~~k.slice(0,i))) return false; return true;
}
var i=0,k=23,s=0;
while(i<11){
  if(isOK(k)){i++;s+=k;}
  k+=(k%6==1?4:2);
}
console.log(s);
