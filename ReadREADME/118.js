function isPrime(n){
  if(n<2) return false; if(n<4) return true;
  if(n%2==0||n%3==0) return false; if(n<25) return true;
  var p=5; while(p*p<=n) if(n%p==0||n%(p+2)==0) return false; else p+=6;
  return true;
}
function sum(s){
  for(var x=0,i=s.length;i-->0;x+=~~s[i]); return x;
}
function noDup(g){
  for(var i=1,j;i<g.length;i++){
    if(g[i]=='0') return false;
  for(j=i;j-->0;) if(g[i]==g[j]) return false;
  }
  return true;
}
function ok(x,y){
  for(var i=x.length;i-->0;) if(y.indexOf(x[i])>=0) return false; return true;
}
var i=13,j,ans=0,p='111123 111222 11115 11124 11133 11223 12222 1116 1125 1134 1224 1233 2223 117 126 135 144 225 234 333 18 27 36 45';
p=p.split(' ').map(function(s){return s.split('').map(function(x){return parseInt(x)})});

for(var ls=[null,[2,3,5,7],[],[],[],[],[],[],[]];i<1e4;i+=2) if(isPrime(i)&&noDup(''+i))
  ls[i>1e3?4:i>1e2?3:2].push(i);

var d0,d1,d2,d3,d4,d5,d6,d7,t;
for(d0=1;d0<=9;d0+=2) if(d0!=5) for(d1=1;d1<10;d1++) if(d0!=d1) for(d2=1;d2<10;d2++) if(d0!=d2&&d1!=d2)
  for(d3=1;d3<10;d3++) if(d0!=d3&&d1!=d3&&d2!=d3) for(d4=1;d4<10;d4++) if(d0!=d4&&d1!=d4&&d2!=d4&&d3!=d4){
    if(isPrime(~~(d4+''+d3+d2+d1+d0))) ls[5].push(d4+''+d3+d2+d1+d0);
    for(d5=1;d5<10;d5++) if(d0!=d5&&d1!=d5&&d2!=d5&&d3!=d5&&d4!=d5){
      ls[6].push(d5+''+d4+d3+d2+d1+d0);
	  for(d6=1;d6<10;d6++) if(d0!=d6&&d1!=d6&&d2!=d6&&d3!=d6&&d4!=d6&&d5!=d6){
	    ls[7].push(~~(t=d6+''+d5+d4+d3+d2+d1+d0));
		for(d7=1;d7<10;d7++) if(noDup(d7+t)) ls[8].push(~~(d7+t));
	  }
	}
}
ls[5]=ls[5].map(function(x){return ~~x});
ls[6]=ls[6].map(function(x){return ~~x}).filter(isPrime);
ls[7]=ls[7].filter(isPrime);
ls[8]=ls[8].filter(isPrime);

function iter(a,ii,min,ud){
  if(a.length==ii) return 1;
  for(var i=0,ans=0,l=ls[a[ii]];i<l.length;i++) if(l[i]>min&&ok(''+l[i],ud)) ans+=iter(a,ii+1,l[i],ud+l[i]);
  return ans;
}

for(i=0;i<p.length;i++) ans+=iter(p[i],0,0,'0'); console.log(ans);
