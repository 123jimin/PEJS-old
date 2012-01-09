function modProd(a,b,n){
  if(b==0) return 0;
  if(b==1) return a%n;
  return (modProd(a,(b-b%10)/10,n)*10+(b%10)*a)%n;
}
function modPow(a,b,n){
  if(b==0) return 1;
  if(b==1) return a%n;
  if(b%2==0){
    var c=modPow(a,b/2,n);
    return modProd(c,c,n);
  }
  return modProd(a,modPow(a,b-1,n),n);
}
function arrModProd(a,b,n){
  return [(modProd(a[0],b[0],n)+modProd(a[1],b[2],n))%n
    ,(modProd(a[0],b[1],n)+modProd(a[1],b[3],n))%n
    ,(modProd(a[2],b[0],n)+modProd(a[3],b[2],n))%n
    ,(modProd(a[2],b[1],n)+modProd(a[3],b[3],n))%n];
}
function arrModPow(a,b,n){
  if(b==0) return [1,0,0,1];
  if(b==1) return [a[0],a[1],a[2],a[3]];
  if(b%2==0){
    var c=arrModPow(a,b/2,n);
    return arrModProd(c,c,n);
  }
  return arrModProd(a,arrModPow(a,b-1,n),n);
}
var M=1234567891011,f0=arrModPow([1,1,1,0],1e14+31,M),f2=[2,1,1,1],f4=[5,3,3,2];
function isPrime(n){
  if(n==2||n==3||n==5) return true;
  if(n%2==0||n%3==0||n%5==0) return false;
  if(n<25) return true;
  for(var a=[2,3,5,7,11,13,17],b=n-1,d,t,i,x;b%2==0;b/=2);
  for(i=0;i<a.length;i++){
    x=modPow(a[i],b,n);
    if(x==1||x==n-1) continue;
    for(t=true,d=b;t&&d<n-1;d*=2){
      x=modProd(x,x,n); if(x==n-1) t=false;
    }
    if(t) return false;
  }
  return true;
}
for(var s=0,o=4,i=31,n=0;n<100000;i+=(o^=6),(o==2?f0=arrModProd(f0,f2,M):f0=arrModProd(f0,f4,M)))
  if(isPrime(1e14+i)) n++,s=(s+f0[1])%M;
console.log(s);
