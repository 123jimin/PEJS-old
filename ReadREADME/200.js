function modProd(a,b,n){
  if(b==0) return 0;
  if(b==1) return a%n;
  return (modProd(a,(b-b%10)/10,n)*10+(b%10)*a)%n;
}
function modPow(a,b,n){
  if(b==0) return 1;
  if(b==1) return a%n;
  if(b%2==0){
    var c=modPow(a,b/2,n);
    return modProd(c,c,n);
  }
  return modProd(a,modPow(a,b-1,n),n);
}
function isPrime(n){
  if(n==2||n==3||n==5) return true;
  if(n%2==0||n%3==0||n%5==0) return false;
  if(n<25) return true;
  for(var a=[2,3,5,7,11,13,17,19],b=n-1,d,t,i,x;b%2==0;b/=2);
  for(i=0;i<a.length;i++){
    x=modPow(a[i],b,n);
    if(x==1||x==n-1) continue;
    for(t=true,d=b;t&&d<n-1;d*=2){
      x=modProd(x,x,n); if(x==n-1) t=false;
    }
    if(t) return false;
  }
  return true;
}
function primeProof(s){
  for(var i=s.length,j,x,y;i-->0;){
    x=s.slice(0,i),y=s.slice(i+1);
    for(j=i?0:1;j<10;j++)
      if(isPrime(parseInt(x+j+y))) return false;
  }
  return true;
}
for(var a=[],N,p=[2],s=new Uint8Array(5e6),i=1,j;i<5e6;i++){
  if(!s[i]){
    p.push(i*2+1);
    for(j=2*i*(i+1);j<5e5;j+=2*i+1) s[j]=1;
  }
}
for(i=0;i<p.length;i++){
  if(p[i]*p[i]*p[i]>5e11) break;
  for(j=0;j<p.length;j++){
    N=p[i]*p[i]*p[i]*p[j]*p[j];
    if(N>5e11) break; N+='';
    if(N.indexOf("200")>=0&&primeProof(N))
      a.push(p[i]*p[i]*p[i]*p[j]*p[j]);
  }
}
a.sort(function(a,b){return a-b;});
console.log(a[199]);
