var o={},M=1e9,p=[[0,M-1],[1,M-1]];
function badd(x,y){
  for(var c='',i=0,f=0,v;x[i]||y[i]||f;i++){
    v=f+(+x[i]||0)+(+y[i]||0); f=v>1; c+=v%2;
  }
  return c;
}
function bfb(x,y){
  if(x.length!=y.length) return x.length>y.length;
  for(var i=x.length;i-->0;) if(x[i]!=y[i]) return x[i]>y[i];
  return false;
}
function modProd(a,b,n){
  if(b==0) return 0;
  if(b==1) return a%n;
  return (modProd(a,(b-b%10)/10,n)*10+(b%10)*a)%n;
}
function b3(i){
  if(!i) return '1';
  var x=b3(i-1); return badd(x,badd(x,x));
}
function p2(i){
  for(var s='';i-->0;s+='0');
  return s+'1';
}
function f(n){
  if(n=='1') return 1; if(n=='11') return 3;
  if(o[n]) return o[n];
  if(n[0]=='0') return o[n]=f(n.slice(1));
  if(n[1]=='0') return o[n]=(M+2*f('1'+n.slice(2))-f(n.slice(2)))%M;
  return o[n]=(2*M+3*f(n.slice(1))-2*f(n.slice(2)))%M;
}
function A(i){
  if(p[i]) return p[i];
  var a=A(i-1); return p[i]=[(M+5*a[0]-a[1])%M,(3*a[0]+a[1])%M];
}
function B(i,n){
  if(i==0) return f(n);
  if(n=='0') return i==1?1:(B(i-1,'0')+B(i-1,'1'))%M;
  var a=A(i); return (M+modProd(a[0],f('1'+n),M)-modProd(a[1],f(n),M))%M;
}
function S(x,y){
  if(x==y) return f(x);
  if(x=='0') return (B(y.length-1,x)+S(p2(y.length-1),y))%M;
  if(badd(x,'1')==y) return (f(x)+f(y))%M;
  if(x[0]=='1') return (f(x)+S(badd(x,'1'),y))%M;
  for(var i=0;x[i]=='0';i++);
  for(var p='1';p.length<=i&&bfb(y,badd(x,p));p='0'+p); i=p.length-2;
  return (B(i,x.slice(i))+S(badd(x,p.slice(1)),y))%M;
}
for(var s=S('0',b3(37));s.length<9;s='0'+s); console.log(s);
