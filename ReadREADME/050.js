function isPrime(n){
  if(n<2) return false;
  if(n<4) return true;
  if(n%2==0||n%3==0) return false; 
  if(n<25) return true;  
  var p=5; while(p*p<=n) 
    if(n%p==0||n%(p+2)==0) return false; else p+=6;  
  return true;
}for(var ps=[2,3],i=5,j,cs,ml=0,cp,pl;i<1000000;i+=(i%6==1?4:2)) if(isPrime(i)) ps.push(i);
for(pl=ps.length,i=0;i+ml<=pl;i++){
  for(cs=j=0;j<ml;j++) cs+=ps[i+j];
  for(;i+j<pl&&cs<1000000;j++){
    cs+=ps[i+j];
    if(ps.indexOf(cs)>=0){
      cp=cs; ml=j;
    }
  }
}
console.log(cp);
