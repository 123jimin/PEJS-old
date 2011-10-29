function pdd(a,d){
  if(d==0) return '0'; if(d==1) return a;
  for(var s='',i=a.length-1,c=0;i>=0;i--){
    var r=a[i]*d+c; c=~~(r/10); r%=10;
    s=r+s;
  }
  return c?c+s:s;
}
function pd(a,b){
  a=''+a;b=''+b;
  return b.length==1?pdd(a,b):p(pdd(a,~~b[0])+'0',pdd(a,~~b[1]));
}
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
var n='1',i=1,s=0;while(i<100)n=pd(n,i++);
for(i=0;i<n.length;i++)s+=~~n[i];console.log(s);
