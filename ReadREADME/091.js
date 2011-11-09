function GCD(a,b){
  if(b>a) return GCD(b,a);
  if(b==0) return a;
  if(b==1) return 1;
  return GCD(b,a%b);
}
for(var n=2,x=1,y,i,xt,yt,s=3*n*n;x<=n;x++)for(y=1;y<=n;y++){
  xt=y/GCD(x,y),yt=-x/GCD(x,y);
  for(i=-n;i<=n;i++)
    if(i!=0&&x+xt*i>=0&&x+xt*i<=n&&y+yt*i>=0&&y+yt*i<=n) s++;
}
console.log(s);
