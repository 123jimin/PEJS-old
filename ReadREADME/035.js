function isPrime(n){
  if(n<2) return false; if(n<4) return true;
  if(n%2==0||n%3==0) return false; if(n<25) return true;
  var p=5; while(p*p<=n) if(n%p==0||n%(p+2)==0) return false; else p+=6;
  return true;
}
function rotate(s){
  s=''+s;
  return s.slice(1)+s[0];
}
function isC(i){
  i=''+i;
  for(var j=0;j<i.length;j++){
    if(!isPrime(~~i)) return false;
    i=rotate(i);
  }
  return true;
}
for(var n=13,i=101;i<1000000;i+=(i%6==1?4:2)) if(isC(i)) n++; console.log(n);
