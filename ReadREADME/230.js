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
function strPow(a,b){
  if(b==0) return '1';
  if(b==1) return a;
  b--;
  var s0=''+a,s=s0,s2=s0;
  while(b>0){
    if(b%2==1) s=strProd(s,s2);
    b=~~(b/2);
    s2=strProd(s2,s2);
  }
  return s;
}
var fibArr=['1','2','3'],a,b,A,B;
while(fibArr[fibArr.length-1].length<=18){
  a=fibArr[fibArr.length-2];
  b=fibArr[fibArr.length-1];
  fibArr.push(strPlus(a,b));
}
A="1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679";
B="8214808651328230664709384460955058223172535940812848111745028410270193852110555964462294895493038196";
function inD(a,b){
  if(a<=2) return ["B","AB","BAB"][a][~~b];
  if(strCmp(fibArr[a-2],b)) return inD(a-2,b); return inD(a-1,strMinus(b,fibArr[a-2]));
}
function D(k){
  var l=~~k.slice(-2); k=k.slice(0,-2),i=0;
  if(k=='') k='0';
  while(strCmp(k,fibArr[i])||k==fibArr[i])i++;
  if(inD(i,k)=='A') return A[l]; else if(inD(i,k)=='B') return B[l]; else return 'X';
}
for(b='',a=0;a<=17;a++){
  b=D(strMinus(strProd(127+19*a,strPow('7',a)),'1'))+b;
}
console.log(b);
