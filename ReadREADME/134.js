function modPow(a,b,n){
  if(b==0) return 1;
  if(b==1) return a%n;
  if(b%2==0){
    var c=modPow(a,b/2,n);
    return (c*c)%n;
  }
  return (a*modPow(a,b-1,n))%n;
}
function isPrime(n){
  if(n==2||n==3||n==5) return true;
  if(n%2==0||n%3==0||n%5==0) return false;
  if(n<25) return true;
  for(var a=[2,3,5,7,11,13,17],b=n-1,d,t,i,x;b%2==0;b/=2);
  for(i=0;i<a.length;i++){
    x=modPow(a[i],b,n);
    if(x==1||x==n-1) continue;
    for(t=true,d=b;t&&d<n-1;d*=2){
      x=(x*x)%n; if(x==n-1) t=false;
    }
    if(t) return false;
  }
  return true;
}
function nextPrime(n){
  switch(n%6){
    case 1: n+=4; break;
    case 2: n+=3; break;
    case 3: n+=2; break;
    case 4: n+=1; break;
    case 5: n+=2; break;
    case 0: n+=1; break;
  }
  for(var o=n%6==1?2:4;!isPrime(n);n+=(o^=6));
  return n;
}
function strPlus(a,b){
  if(b.length>a.length) return strPlus(b,a);
  if(a.length<10) return ''+(~~a+~~b);
  while(b.length<a.length) b='0'+b;
  for(var s='',i=a.length-1,c=0,r;i>=0;i--){
    if((r=~~a[i]+~~b[i]+c)>=10) c=1; else c=0;
    s=(r%10)+s;
  }
  return c?'1'+s:s;
}
function S(p1,p2){
  var d=p1<10?1:p1<100?2:p1<1e3?3:p1<1e4?4:p1<1e5?5:6;
  return Math.pow(10,d)*(((p2-p1)*modPow(10,p2*d-2*d,p2))%p2)+p1;
}
for(var s='0',p1=5,p2=7;p1<1e6;p1=p2,p2=nextPrime(p2)) s=strPlus(s,''+S(p1,p2));
console.log(s);
