function p(a,b){
  if(b==0) return a;
  if(b.length>a.length) return p(b,a);
  while(b.length<a.length) b='0'+b;
  for(var s='',i=a.length-1,c=0,r;i>=0;i--){
    if((r=~~a[i]+~~b[i]+c)>=10) c=1; else c=0;
    s=(r%10)+s;
  }
  return c?'1'+s:s;
}
var a=['0','1','1'],x,y,s=2;
while((x=a.pop()).length<1000){y=a.pop();a.push(y,x,p(y,x));}
console.log(a.length);
