function isPrime(n){
  if(n<2) return false; if(n<4) return true;
  if(n%2==0||n%3==0) return false; if(n<25) return true;
  var p=5; while(p*p<=n) if(n%p==0||n%(p+2)==0) return false; else p+=6;
  return true;
}
for(var t=0,s=0,p1=2,p2=3,i,n,MAX=999966663333,i;p1*p1<MAX;){
  x=0;
  for(i=p1+1;n=p1*i,n<p2*p2&&n<MAX;i++) if(i%p2) x+=n;
  for(i=p2-1;n=p2*i,n>p1*p1;i--) if(i%p1&&n<MAX) x+=n;
  s+=x; t=(t+x)%1e6
  p1=p2; do{p2+=2;}while(!isPrime(p2));
}
s+=''; t+='';
console.log(s.slice(0,-6)+t.slice(-6));
