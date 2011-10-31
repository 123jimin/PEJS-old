function isO(s){
  for(var a=[0,1,1,1,1,1,1,1],i=0;i<7;i++) a[~~s[i]]--;
  for(i=0;i<a.length;i++) if(a[i]!=0) return false; return true;
}
function isPrime(n){
  if(n<2) return false; if(n<4) return true;
  if(n%2==0||n%3==0) return false; if(n<25) return true;
  var p=5; while(p*p<=n) if(n%p==0||n%(p+2)==0) return false; else p+=6;
  return true;
}
//Since 9-8 digits are always %3=0
for(var i=7654321;i>1234567;i-=2)
  if(isO(''+i)&&isPrime(i)) break;
console.log(i);
