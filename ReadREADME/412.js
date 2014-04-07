var M=76543217;

function modInv(a){
  for(var x=0,y=1,u=1,v=0,k=a,b=M,q,r,o;k;){
    r=b%k; q=(b-r)/k; o=x-u*q; n=y-v*q;
    b=k; k=r; x=u; y=v; u=o; v=n;
  }
  return (x+M)%M;
}

function modPow(a,b){
  if(b==0) return 1;
  if(b==1) return a%M;
  if(b%2==0){
    var c=modPow(a,b/2);
    return c*c%M;
  }
  return a*modPow(a,b-1)%M;
}

function B(x,y){
  if(y>x) return B(y,x);
  for(var m=1,i=1;i<y;i++) m=m*modPow(i*(x+y-i)%M,i)%M;
  for(;i<=x;i++) m=m*modPow(i,y)%M;
  return m;
}

function fac(n){
  n=M-n;
  for(var x=1;--n>0;) x=x*(M-n)%M;
  return (M-1)*modInv(x)%M;
}

function LC(m,n){
  for(var x=1,d=m-n,i=1;i<d;i++) x=x*modPow((2*m-i)*(2*n+i)%M,i)%M;
  x=x*modPow(m+n,d)%M;
  return (fac(m*m-n*n)*modInv(modPow(B(n,d),2))%M)*modInv(x)%M;
}

console.log(LC(10000,5000));
