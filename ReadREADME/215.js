var o={};
function W(a,m){
  for(var s=a.join('-'),i=0,t=0,r;i<a.length;i++){
    if(a[i]==1||a[i]<0) return 0;
    if(i&&a[i]!=0&&a[i]!=m&&a[i]==a[i-1]) return 0;
    t+=a[i];
  }
  if(t<=3) return 1;
  if(o[s]) return o[s];
  for(t=0,i=1;i<a.length;i++) if(a[i]>a[t]) t=i;
  a[t]-=2; r=W(a,m); a[t]--; r+=W(a,m); a[t]+=3; return o[s]=r;
}
W([32,32,32,32,32, 32,32,32,32,32],32);
