var u=new Uint8Array(1e6); u[2]=u[3]=1;
function isPrime(n){
  if(n<2) return false;
  if(n<4) return true;
  if(n%2==0||n%3==0) return false; 
  if(n<25) return true;  
  var p=5; while(p*p<=n) 
    if(n%p==0||n%(p+2)==0) return false; else p+=6;  
  return true;
}for(var ps=[2,3],ans,i=5,j,ml=1,cp=0,cp2;i<1e6;i+=(i%6==1?4:2))
  if(isPrime(i)) u[i]=1,ps.push(i);
for(i=0;i+ml<=ps.length;i++){
  cp+=ps[i+ml-1];
  for(cp2=cp,j=ml;i+j<ps.length&&cp2<1e6;j++){
    cp2+=ps[i+j]; if(u[cp2]) ans=cp=cp2,ml=j+1;
  }
  cp-=ps[i];
}
console.log(ans);
