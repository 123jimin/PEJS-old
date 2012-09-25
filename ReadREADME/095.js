var v=new Uint16Array(1e6),u=new Uint32Array(1e6);
function sumDivs(n){
  if(n<2) return 1;
  var x=n,s=1,t,i=3;
  while(n%2==0) n/=2,s=2*s+1;
  while(i*i<=n){
    t=s; while(n%i==0) n/=i,s=i*s+t; i+=2;
  }
  if(n>1) s*=(n+1); return s-x;
}
for(var i=2,j,k,l=0,m;i<1e6;i++) if(!v[i]){
  for(j=i,k=1;j<1e6&&!v[j];j=sumDivs(j)) u[j]=i,v[j]=k++;
  if(j<1e6&&k-v[j]>l&&u[j]==i) l=k-v[j],m=j;
}
console.log(m);
