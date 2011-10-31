function pdd(a,d){
  if(d==0) return '0'; if(d==1) return a;
  for(var s='',i=a.length-1,c=0;i>=0;i--){
    var r=a[i]*d+c; c=~~(r/10); r%=10;
    s=r+s;
  }
  return c?c+s:s;
}
function pd(a,b){
  return b.length==1?pdd(a,b):b.length==2?p(pdd(a,~~b[0])+'0',pdd(a,~~b[1])):
  p(p(pdd(a,~~b[0])+'0',pdd(a,~~b[1]))+'0',pdd(a,~~b[2]));
}
function pow(a,b){
  for(var s=''+a,i=0;i<b-1;i++) s=pd(s,''+a).slice(-10);
  return s;
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
for(var s='1',i=2;i<1000;i++)s=p(s,pow(i,i));
console.log(s.slice(-10));
