function strCmp(a,b){
  if(a.length>b.length) return true;
  if(b.length>a.length) return false;
  if(a.length<10) return ~~a>~~b;
  return a[0]>b[0]?true:a[0]<b[0]?false:strCmp(a.slice(1),b.slice(1));
}
function strMinus(a,b){
  if(b=='0') return a;
  if(a.length<10) return ''+(~~a-~~b);
  while(b.length<a.length) b='0'+b;
  for(var s='',i=a.length-1,c=0,r;i>=0;i--){
    if((r=~~a[i]-~~b[i]-c)<0){c=1;r+=10;}else c=0;
    s=r+s;
  }
  return s.replace(/^(0+)/,'');
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
function nRoot(n){
  var digit=0,s='1',t=''+n;
  while(digit<=100){
    while(strCmp(t,strProd(s,s))) s=strPlus(s,'1');
    s=strMinus(s,'1')+'0';
    t+='00';
    digit++;
  }
  return s.slice(0,100);
}
function digSum(s){
  for(var i=0,n=0;i<s.length;n+=~~s[i++]); return n;
}
for(var n=0,i=2;i<100;i++) if(~~Math.sqrt(i)!=Math.sqrt(i)) n+=digSum(nRoot(i));
console.log(n);
