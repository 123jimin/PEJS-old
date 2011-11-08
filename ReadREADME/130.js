function isPrime(n){
  if(n%3==0||n%5==0||n%7==0) return false;
  var p=11; while(p*p<=n) if(n%p==0||n%(p+2)==0) return false; else p+=6;
  return true;
}
function A(n){
  if(n%2==0||n%5==0) return 0;
  for(var v=1,i=1;v;i++) v=(v*10+1)%n;
  return i;
}
for(var i=91,j=0,s=0;j<25;i+=2) if(!isPrime(i)&&(i-1)%A(i)==0){s+=i;j++;}
console.log(s);
