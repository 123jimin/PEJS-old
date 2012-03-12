function strCmp(a,b){
  if(a.length!=b.length) return a.length>b.length;
  if(a.length<10) return ~~a>~~b;
  return a[0]!=b[0]?a[0]>b[0]:strCmp(a.slice(1),b.slice(1));
}
function strPlus(a,b){
  if(b=='0') return a; if(a=='0') return b;
  if(b.length>a.length) return strPlus(b,a);
  if(a.length<10) return ''+(~~a+~~b);
  while(b.length<a.length) b='0'+b;
  for(var s='',i=a.length-1,c=0,r;i>=0;i--){
    if((r=~~a[i]+~~b[i]+c)>=10) c=1; else c=0;
    s=(r%10)+s;
  }
  return c?'1'+s:s;
}
function prodDigit(a,d){
  if(d==0) return '0'; if(d==1) return a;
  for(var s='',i=a.length-1,c=0;i>=0;i--){
    var r=a[i]*d+c; c=~~(r/10); r%=10;
    s=r+s;
  }
  return c?c+s:s;
}
function strProd(a,b){
  a=''+a;b=''+b;
  if(a.length<b.length) return strProd(b,a);
  if(b.length==1) return prodDigit(a,~~b);
  if(a.length+b.length<10) return ''+a*b;
  else return strPlus(strProd(a,b.slice(0,b.length-1))+'0',prodDigit(a,~~b[b.length-1]));
}
function Mq(n){
  var s=strProd(prodDigit(n,2),strPlus(n,'2')),x=Math.floor(Math.sqrt(Number(s)))+'';
  return s==strProd(x,strPlus(x,'1'))||s==strProd(strPlus(x,'1'),strPlus(x,'2'));
}
for(var x=[],a=1,b=3,l=0,s=a+b;l<19;l++){
  for(a=Math.floor(a*(3+2*Math.SQRT2));!Mq(''+a);a++); s+=a;
}
for(l=0;l<19;l++){for(b=Math.floor(b*(3+2*Math.SQRT2));!Mq(''+b);b++); s+=b;}
console.log(s);
