var M=1e8,o={},c=1984,Ac,Bc,s;
function modProd(a,b){
  if(b==0) return 0;
  if(b==1) return a%M;
  return (modProd(a,(b-b%10)/10)*10+(b%10)*a)%M;
}
function modInv(a){
  for(var x=0,y=1,u=1,v=0,k=a,b=M,q,r,o;k;){
    r=b%k; q=(b-r)/k; o=x-u*q; n=y-v*q;
    b=k; k=r; x=u; y=v; u=o; v=n;
  }
  return x%M;
}
function A(x){
  return modProd(x+M-2,(modProd(modProd(x,modProd(x,x)),x+M-7)+modProd(x,modProd(x,20)+M-29)+19)%M);
}
function B(x){
  return modProd(modProd(x+M-2,modProd(x+M-2,x+M-2)),(modProd(x,x+M-2)+3)%M);
}
Ac=A(c); Bc=B(c);
function N(a,b){
  if(a<0||b<0) return 0;
  if(a==0&&b==0) return c*(c-1)%M;
  var k=a+' '+b;
  if(o[k]) return o[k];
  return o[k]=(modProd(N(a-1,b),Ac)+modProd(N(a,b-1),Bc))%M;
}
for(s=N(25,75)+'';s.length<8;s='0'+s);
console.log(s);
