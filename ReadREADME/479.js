var N=1e6,M=1000000007,s=M-N,i=1,k;
function modInv(a){
  for(var x=0,y=1,u=1,v=0,k=a,b=M,q,r,o;k;){
    r=b%k; q=(b-r)/k; o=x-u*q; n=y-v*q;
    b=k; k=r; x=u; y=v; u=o; v=n;
  }
  return x%M;
}
function modProd(a,b){
  if(b==0) return 0;
  if(b==1) return a%M;
  return (modProd(a,(b-b%10)/10)*10+(b%10)*a)%M;
}
function modPow(a,b){
  if(b==0) return 1;
  if(b==1) return a%M;
  if(b%2==0){
    var c=modPow(a,b/2);
    return modProd(c,c);
  }
  return modProd(a,modPow(a,b-1));
}
for(;i<=N;i++){
  k=modProd(i,i);
  s=(s+M-modProd((modPow((1+M-k)%M,N+1)+M-1)%M,modInv(k)))%M;
}
console.log(s);
