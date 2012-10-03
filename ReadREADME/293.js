var p=[2,3,5,7,11,13,17,19,23],d=[1,0,0,0,0,0,0,0,0],n,m=[3,5],s=8,y,z,i;
function x(){
  for(var i=0,n=1;i<9;i++) n*=Math.pow(p[i],d[i]);
  return n;
}
function isPrime(n){
  if(n%3==0||n%5==0||n%7==0) return false; if(n<121) return true;
  var p=11; while(p*p<=n) if(n%p==0||n%(p+2)==0) return false; else p+=6;
  return true;
}
function find(n){
  var a=0,b=m.length,c;
  if(m[b-1]<n) return b;
  while(b-a>1){
    c=~~((a+b)/2);
    if(m[c]==n) return c;
    if(m[c]<n) a=c; else b=c;
  }
  if(m[a]==n) return a;
  return b;
}
for(;;){
  n=x();
  for(y=n+3;!isPrime(y);y+=2); y-=n;
  i=find(y);
  if(i==m.length) s+=y,m.push(y);
  else if(m[i]>y){
    z=m.splice(i); s+=y,m.push(y);
    m=m.concat(z);
  }
  for(var i=0;i<9;i++){
    d[i]++;
    if(x()>=1e9) d[i]=1;
    else break;
  }
  if(i==9) break;
}
console.log(s);
