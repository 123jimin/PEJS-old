function strNeg(s){
  if(s=='0') return '0';
  return s[0]=='-'?s.slice(1):'-'+s;
}
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
function GCD(a,b){
  if(a<0) a=-a; if(b<0) b=-b;
  if(b>a) return GCD(b,a);
  if(b==0) return a;
  if(b==1) return 1;
  return GCD(b,a%b);
}
function rvQS(n){
  return simpQS([n[0]*n[3],-n[1]*n[3],n[2],n[0]*n[0]-n[1]*n[1]*n[2]]);
}
function iQS(n){
  var i = ~~(n[0]/n[3] + n[1]*Math.sqrt(n[2])/n[3]);
  while(n[0]+n[1]*Math.sqrt(n[2])-n[3]*(i+1)>0)i++; return i;
}
function aQS(n,d){
  return simpQS([n[0]+d*n[3],n[1],n[2],n[3]]);
}
function simpQS(n){
  var g;
  if(n[3]<0){n[0]*=-1;n[1]*=-1;n[3]*=-1;}
  if(n[0]==0){
    g=GCD(n[1],n[3]);
    n[1]/=g;n[3]/=g;return n;
  }else{
    g=GCD(n[1],n[3]);
    g=GCD(n[0],g);
    n[0]/=g;n[1]/=g;n[3]/=g;return n;
  }
}
function solvePell(D){
  if(~~Math.sqrt(D)==Math.sqrt(D)) return '0';
  if(D==2) return '3';
  if(D==3) return '2';
  var a=[0,1,D,1],b,c=[],d=[]
     ,p=[''+~~Math.sqrt(D)],q=['1'],pn,qn;
  a=aQS(a,-iQS(a));
  while(c.indexOf(a.join(','))==-1){
    c.push(a.join(','));
    a=rvQS(a);
    b=iQS(a);
    d.push(''+b);
    a=aQS(a,-b);
  }
  b=1;
  p.push(pn=strPlus(strProd(p[0],d[0]),'1'));
  q.push(qn=d[0]);
  while(strMinus(strProd(pn,pn),strProd(D,strProd(qn,qn)))!='1'){
    p.push(pn=strPlus(strProd(d[b%d.length],p[b]),p[b-1]));
    q.push(qn=strPlus(strProd(d[b%d.length],q[b]),q[b-1]));
    b++;
  }
  return pn;
}
for(var D=2,a,mD,mx='0';D<=1000;D++){
  if(strCmp(a=solvePell(D),mx)){
    mx=a; mD=D;
  }
}
console.log(mD);
