function isPrime(n){
  if(n<2) return false; if(n<4) return true;
  if(n%2==0||n%3==0) return false; if(n<25) return true;
  var p=5; while(p*p<=n) if(n%p==0||n%(p+2)==0) return false; else p+=6;
  return true;
}
for(var a=1/2,d=2,p=1,l=15499/94744,i=3;a>=l;i+=2) if(isPrime(i)){d*=i;a*=(1-1/i);}
for(;a*(p*d)/(p*d-1)>=l;p++); console.log(p*d);
