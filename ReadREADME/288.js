function strCmp(a,b){
  if(a[0]=='-'&&b[0]=='-') return strCmp(b.slice(1),a.slice(1));
  if(a[0]=='-') return false;
  if(b[0]=='-') return true;
  if(a.length>b.length) return true;
  if(b.length>a.length) return false;
  if(a.length<10) return ~~a>~~b;
  return a[0]>b[0]?true:a[0]<b[0]?false:strCmp(a.slice(1),b.slice(1));
}
function strPlus(a,b){
  if(b=='0') return a; if(a=='0') return b;
  if(a[0]=='-') return strNeg(strPlus(a.slice(1),strNeg(b)));
  if(b[0]=='-') return strMinus(a,b.slice(1));
  if(b.length>a.length) return strPlus(b,a);
  if(a.length<10) return ''+(~~a+~~b);
  while(b.length<a.length) b='0'+b;
  for(var s='',i=a.length-1,c=0,r;i>=0;i--){
    if((r=~~a[i]+~~b[i]+c)>=10) c=1; else c=0;
    s=(r%10)+s;
  }
  return c?'1'+s:s;
}
function strMinus(a,b){
  if(b=='0') return a;
  if(a=='0') return strNeg(b);
  if(a[0]=='-') return strNeg(strPlus(a.slice(1),b));
  if(b[0]=='-') return strPlus(a,b.slice(1));
  if(strCmp(b,a)) return '-'+strMinus(b,a);
  if(a.length<10) return ''+(~~a-~~b);
  while(b.length<a.length) b='0'+b;
  for(var s='',i=a.length-1,c=0,r;i>=0;i--){
    if((r=~~a[i]-~~b[i]-c)<0){c=1;r+=10;}else c=0;
    s=r+s;
  }
  return s.replace(/^(0+)/,'');
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
for(var p=61,q=1e7,s=290797,a=[],t=0,n='0',x='1',i=1,m=10;i<=m;i++)
  s=(s*s)%50515093,t+=s%p,a.push(s%p);
for(;i<=q;i++) s=(s*s)%50515093,t+=s%p; t+='';
for(i=0;i<m;i++) n=strPlus(n,strProd(t,x)),x=strProd(x,''+p),t=strMinus(t,a.shift()+'');
while(!strCmp(x+'000000',n)) n=strMinus(n,x+'000000');
while(!strCmp(x+'000',n)) n=strMinus(n,x+'000');
while(!strCmp(x,n)) n=strMinus(n,x); console.log(n);
