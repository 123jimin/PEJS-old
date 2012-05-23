function eulerPhi(n){
  if(n<3) return 1;
  if(n==3) return 2;
  var retValue=0;
  if(n%2==0) retValue = (n%4==0?2:1)*eulerPhi(n/2);
  else if(n%3==0) retValue = (n%9==0?3:2)*eulerPhi(n/3);
  else{
    var i=5,ns=~~Math.sqrt(n),t,j=0;
    while(i<=ns&&retValue==0){
      if(n%i==0){
        t=n;
        while(t%i==0){t/=i;j++;}
        retValue = eulerPhi(t)*(i-1)*Math.pow(i,j-1);
      }
      i+=(i%6==1)?4:2;
    }
    if(retValue==0) retValue=n-1;
  }
  return retValue;
}
function modProd(a,b,p){
  if(a*b<1e15) return a*b%p;
  if(b%2==0) return 2*modProd(a,b/2,p)%p;
  return (a+modProd(a,b-1,p))%p;
}
function modPow(a,b,p){
  if(b==0) return 1;
  if(b==1) return a%p;
  if(b%2==0){
    var c=modPow(a,b/2,p);
    return modProd(c,c,p);
  }
  return modProd(a,modPow(a,b-1,p),p);
}
function C(n,l,p){
  if(l==0) return n%p;
  var ep=eulerPhi(p),eep=eulerPhi(ep);
  return modProd(modPow(3,(modPow(3,C(n,l-1,eep)-2,ep*2)-3)/2,p),
    modPow(2,modPow(3,C(n,l-1,eep)-2,ep),p),p);
}
console.log(C(10000,3,Math.pow(13,8)));
