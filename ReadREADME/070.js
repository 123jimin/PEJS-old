function isPrime(n){
  if(n<2) return false; if(n<4) return true;
  if(n%2==0||n%3==0) return false; if(n<25) return true;
  var p=5; while(p*p<=n) if(n%p==0||n%(p+2)==0) return false; else p+=6;
  return true;
}
function ord(s){
  s=''+s; return s.split('').sort().join('');
}
for(var a=[2,3],m=1.5,n,i=5,j;i<1e4;i+=2) if(isPrime(i)) a.push(i);
for(var i=0;i<a.length;i++) for(j=0;j<i&&a[i]*a[j]<1e7;j++) if((1-1/a[i])*(1-1/a[j])>1/m)
  if(ord(a[i]*a[j])==ord((a[i]-1)*(a[j]-1))) n=a[i]*a[j],m=1/((1-1/a[i])*(1-1/a[j]));
console.log(n);
