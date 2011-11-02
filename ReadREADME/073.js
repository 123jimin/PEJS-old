//Algorithm from EulerProject PDF 73.3.2
var N=12000,K=~~Math.sqrt(N/2),M=~~(N/(2*K+1)),rSmall=[],rLarge=[],i;
for(i=0;i<M;i++) rSmall.push(0);
for(i=0;i<K-1;i++) rLarge.push(0);
function F(n){
  var q=~~(n/6),r=n%6,f=q*(3*q-2+r);
  return r==5?f+1:f;
}
function R(n){
  var sw=~~Math.sqrt(n/2),count=F(n)-F(~~(n/2)),m=5,k=~~((n-5)/10);
  while(k>=sw){
    var nextK=~~((~~(n/(m+1))-1)/2);
    count-=(k-nextK)*(rSmall[m]);
    k=nextK; m++;
  }
  while(k>0){
    m=~~(n/(2*k+1));
    if(m<=M) count-=rSmall[m]; else count-=rLarge[~~((~~(N/m)-1)/2)];
    k--;
  }
  if(n<=M) rSmall[n]=count; else rLarge[~~((~~(N/n)-1)/2)]=count;
}
for(i=5;i<=M;i++) R(i);
for(i=K;i-->0;) R(~~(N/(2*i+1)));
console.log(rLarge[0]);
