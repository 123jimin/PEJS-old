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
function ds(s){
  for(var i=0,n=0;i<s.length;i++) n+=~~s[i]; return n;
}
function pow(a,b){
  for(var s=''+a,i=0;i<b;i++) s=pd(s,''+a);
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
for(var a=2,b,m=0,n;a<100;a++){
  for(b=2;b<100;b++){
    if((n=ds(pow(a,b)))>m)m=n;
  }
}
console.log(m);
