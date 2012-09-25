function GCD(x,y){
  if(x<0) return GCD(-x,y); if(x<y) return GCD(y,x);
  if(y==0) return x; if(y==1) return 1;
  return GCD(y,x%y);
}
var u=new Uint8Array(1e6),a,b,g,n,m=0,p=0;
for(a=3;a<1e3;a+=2) if(!u[a]) for(b=a;a*b<1e6;b+=2) u[a*b]=1;
for(a=-999;a<1000;a++)for(b=m+m%2+1;b<1000;b+=2){
  g=GCD(a,b); if(g>1&&g<=m) continue;
  for(n=0;;n++){
    g=n*n+a*n+b; if(g!=2&&g%2==0||g<0||u[g]!==0) break;
  }
  if(n>m){m=n;p=a*b;}
}console.log(p);
