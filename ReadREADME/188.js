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
function strPow(a,b){
  if(b==0) return '1';
  if(b==1) return a;
  b--;
  var s0=''+a,s=s0,s2=s0;
  while(b>0){
    if(b%2==1) s=strProd(s,s2).slice(-8);
    b=~~(b/2);
    s2=strProd(s2,s2).slice(-8);
  }
  return s;
}
function superPow(a,b){
  return b==1?a+'':strPow(a,superPow(a,b-1).slice(-8));
}
console.log(superPow(1777,1855).slice(-8));
