function isPrime(n){
  if(n<2) return false; if(n<4) return true;
  if(n%2==0||n%3==0) return false; if(n<25) return true;
  var p=5; while(p*p<=n) if(n%p==0||n%(p+2)==0) return false; else p+=6;
  return true;
}
var eulerPhiTable=[];
function eulerPhi(n){
  if(n<3) return 1;
  if(n==3) return 2;
  if(eulerPhiTable[n]) return eulerPhiTable[n];
  var retValue=0;
  if(n%2==0) retValue = (n%4==0?2:1)*eulerPhi(n/2);
  else if(n%3==0) retValue = (n%9==0?3:2)*eulerPhi(n/3);
  else{
    var i=5,ns=~~Math.sqrt(n),t,j=0;
    while(i<=ns&&retValue==0){
      if(n%i==0){
        t=n;
        while(t%i==0){t/=i;j++;}
        retValue = eulerPhi(t)*(i-1)*Math.pow(i,j-1);
      }
      i+=(i%6==1)?4:2;
    }
    if(retValue==0) retValue=n-1;
  }
  eulerPhiTable[n] = retValue; return retValue;
}
function factors(n){
  if(n<4) return {n:1};
  var a={};
  if(n%2==0){a[2]=0;while(n%2==0){a[2]++;n/=2;}}
  if(n%3==0){a[3]=0;while(n%3==0){a[3]++;n/=3;}}
  var p=5;
  while(p<=n){
    if(n%p==0){a[p]=0;while(n%p==0){n/=p;a[p]++;}}
    p+=(p%6==1?4:2);
  }
  return a;
}
function sumDivs(n){
  var s=0,i=2;
  while(i*i<=n){
    if(n%i==0) if(i*i!=n) s+=i+n/i; else s+=i;
    i++;
  }
  return s+1;
}
function numDivisors(n){
  if(n<4) return 2;
  var a={},p=5,x=1,i;
  if(n%2==0){a[2]=1;while(n%2==0){a[2]++;n/=2;}}
  if(n%3==0){a[3]=1;while(n%3==0){a[3]++;n/=3;}}
  while(p<=n){
    if(n%p==0){a[p]=1;while(n%p==0){n/=p;a[p]++;}}
    p+=(p%6==1?4:2);
  }
  for(i in a) x*=a[i];
  return x;
}
function numFactors(n){
  if(n<4) return 1;
  var a=0;
  if(n%2==0){a=1;while(n%2==0)n/=2;}
  if(n%3==0){a++;while(n%3==0)n/=3;}
  var p=5;
  while(p<=n){
    if(n%p==0){a++;while(n%p==0)n/=p;}
    p+=(p%6==1?4:2);
  }
  return a;
}
function factorProduct(o1,o2){
  var o = {}, i;
  for(i in o1) o[i] = o1[i];
  for(i in o2) if(o[i]) o[i]+=o2[i]; else o[i] = o2[i];
  return o;
}

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

