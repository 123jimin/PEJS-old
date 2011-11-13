function isOK(n){
  return (n*56789+'').slice(-5)=='99999';
}
function isPrime(n){
  if(n<2) return false; if(n<4) return true;
  if(n%2==0||n%3==0) return false; if(n<25) return true;
  var p=5; while(p*p<=n) if(n%p==0||n%(p+2)==0) return false; else p+=6;
  return true;
}
function factors(n){
  var a={};
  if(n<4){
    a[n]=1; return a;
  }
  if(n%2==0){a[2]=0;while(n%2==0){a[2]++;n/=2;}}
  if(n%3==0){a[3]=0;while(n%3==0){a[3]++;n/=3;}}
  var p=5;
  while(p<=n){
    if(n%p==0){a[p]=0;while(n%p==0){n/=p;a[p]++;}}
    p+=(p%6==1?4:2);
  }
  return a;
}
function modProd(a,b,p){
  if(b==0) return 0;
  if(b==1) return 1;
  if(a*b<1e15) return (a*b)%p;
  if(b%2==0){
    var c=modProd(a,b/2,p); return (c+c)%p;
  }
  return (modProd(a,b-1,p)+a)%p;
}
function modPow(a,n,p){
  if(n==0) return 1;
  if(n==1) return a%p;
  if(n%2==0){
    var c=modPow(a,n/2,p); return modProd(c,c,p);
  }
  return modProd(modPow(a,n-1,p),a,p);
}
function tenPrimitive(n){
  var o=factors(n-1),i;
  for(i in o)
    if(modPow(10,(n-1)/i,n)==1) return false;
  return true;
}
function getDigitSum(n){
  if(n%5==0||n%2==0) return '';
  for(var i=0,s=0,k=10;!i||k!=10;i++){
    s+=Math.floor(k/n);
    k=10*(k%n);
  }
  return s;
}
for(var i=1,j,n=Math.floor(1/.00000000138),m=Math.floor(1/.00000000137);i<100000;i++){
  if(isOK(i))
    for(j=Math.floor(n/100000)*100000+i;j<m;j+=100000)
      if(isPrime(j)&&tenPrimitive(j)) console.log(getDigitSum(j));
}
