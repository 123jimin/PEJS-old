function modProd(a,b){
  if(b==0) return 0;
  if(b==1) return a%10000000000;
  if(b>a) return modProd(b,a);
  if(b%10==0){
    var x=modProd(a,b/10);
    return (x*10)%10000000000;
  }
  return (a+modProd(a,b-1))%10000000000;
}
function P(f,r){
  if(f==1) return modProd(r,r+1)/2;
  var X=f-(1+f%2),ini=f%2==0?(modProd(f+1,f+1)-1)/2-f:(modProd(f,f)-1)/2;
  if(r%2==0) return modProd(X+1,X+1)+modProd(X,r)+modProd(r/2,1+r)-ini;
  else if(r==1) return ini;
  return modProd(X+r,X+r)-P(f,r-1);
}
//71328803586048 = 2^27 * 3^12
for(var i=0,j,f,r,s=0;i<28;i++) for(j=0;j<13;j++){
  f=Math.pow(2,i)*Math.pow(3,j),r=71328803586048/f;
  s+=P(f,r)%100000000; s%=100000000;
}
while(s<0) s+=100000000;
console.log(s);
