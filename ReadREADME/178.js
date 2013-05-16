var o={};
function pan(l,c,x,y){
  var k;
  if(c<0||c>9) return 0;
  if(c<x) x=c; if(c>y) y=c;
  if(l==1) return c&&x==0&&y==9?1:0;
  k=l+' '+c+x+y;
  if(o[k]) return o[k];
  return o[k]=pan(l-1,c-1,x,y)+pan(l-1,c+1,x,y);
}
for(var i=0,n=0,t;i<=9;i++) for(t=10;t<=40;t++) n+=pan(t,i,i,i);
console.log(n);
