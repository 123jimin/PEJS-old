function G(x,y){return x==0?y:y==0?x:x==1||y==1?1:G(y,x%y);}
for(var m=2,n,s=0,y,x=0|Math.sqrt(1e8/2);m<=x;m++)
  for(y=2*m,n=m%2?2:1;n<m&&y*(n+m)<1e8;n+=2)
    if(G(m,n)==1&&(m*m+n*n)%(y*n-m*m+n*n)==0) s+=0|1e8/y/(n+m);
console.log(s);
