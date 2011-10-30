function isPrime(n){
  if(n<2) return false; if(n<4) return true;
  if(n%2==0||n%3==0) return false; if(n<25) return true;
  var p=5; while(p*p<=n) if(n%p==0||n%(p+2)==0) return false; else p+=6;
  return true;
}
var a,b,n,m=0,p=0;
for(a=-999;a<1000;a++)for(b=-999;b<1000;b++){
  n=0;while(isPrime(n*n+a*n+b))n++;
  if(n>m){m=n;p=a*b;}
}console.log(p);
