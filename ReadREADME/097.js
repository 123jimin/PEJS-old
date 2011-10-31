function dbn(s){var n='',f=0,i,sd;for(i=s.length-1;i>=0;i--){sd=2*s[i]+f;
if(sd>=10){sd-=10;f=1;}else f=0;n=sd+n;}return f?'1'+n:n;}
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
  if(a.length<b.length) return pd(b,a);
  if(b.length==1) return pdd(a,~~b);
  else return p(pd(a,b.slice(0,b.length-1))+'0',pdd(a,~~b[b.length-1]));
}
function pow(a,b){
  if(b==0) return '1';
  if(b==1) return a;
  b--;
  var s0=''+a,s=s0,s2=s0;
  while(b>0){
    if(b%2==1) s=pd(s,s2).slice(-10);
    b=~~(b/2);
    s2=pd(s2,s2).slice(-10);
  }
  return s;
}
console.log(p(pd(28433,pow(2,7830457)),'1').slice(-10));
