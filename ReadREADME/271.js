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
function prodDigit(a,d){
  if(d==0) return '0'; if(d==1) return a;
  for(var s='',i=a.length-1,c=0;i>=0;i--){
    var r=a[i]*d+c; c=~~(r/10); r%=10; s=r+s;
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
function modInv(n,p){
  for(var i=1;i<p;i++) if(i*n%p==1) return i;
}
for(var x=[],t,s='0',w=[],N=13082761331670030,
    p=[2,3,5,7,11,13,17,19,23,29,31,37,41,43],q=[],r=[],i=0,j;i<p.length;i++){
  r.push(''+modInv((N/p[i])%p[i],p[i])); w.push(0);
  for(j=0,q.push([]);j<p[i];j++) if(j*j*j%p[i]==1) q[i].push(j);
}
for(;;){
  t='0'; for(i=0;i<p.length;i++) t=strPlus(t,strProd(''+q[i][w[i]],strProd(''+(N/p[i]),r[i])));
  x.push(strMinus(t,strProd(''+N,''+Math.floor(t/N))));
  for(i=0;i<p.length&&q[i].length<=++w[i];w[i++]=0); if(i==p.length) break;
}
for(i=0;i<x.length;i++) if(x[i]!='1') s=strPlus(s,x[i]); console.log(s);
