var N=100,a=new Uint32Array(N),b={},k=2,i=5;
a[0]=2; a[1]=3;
function isPrime(n){
  if(n<2) return false; if(n<4) return true;
  if(n%2==0||n%3==0) return false; if(n<25) return true;
  for(var p=2;a[p]*a[p]<=n;p++) if(n%a[p]==0) return false;
  return true;
}
for(;k<N;i+=(i%6==1?4:2)) if(isPrime(i)) a[k++]=i;
function f(n,m){
  if(b[n+','+m]) return b[n+','+m];
  for(var i=0,s=0;m>=i&&n>a[i];i++) s+=f(n-a[i],i);
  if(a[m]>=n&&isPrime(n)) s++;
  return b[n+','+m]=s;
}
for(i=10;f(i,i)<5000;i++);
console.log(i);
