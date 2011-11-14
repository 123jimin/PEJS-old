var N=6000000,a=new Uint32Array(N),k=2,i=5,s=0;
a[0]=2; a[1]=3;
function isPrime(n){
  if(n<2) return false; if(n<4) return true;
  if(n%2==0||n%3==0) return false; if(n<25) return true;
  for(var p=2;a[p]*a[p]<=n;p++) if(n%a[p]==0) return false;
  return true;
}
function primePi(n){
  var i=0,j=N,k; n=~~n;
  while(j-i>1){
    k=~~((i+j)/2);
    if(a[k]<n) i=k; else j=k;
  }
  if(a[j]==n) return j+1; return i+1;
}
for(;k<N;i+=(i%6==1?4:2)) if(isPrime(i)) a[k++]=i;
for(i=0;a[i]<1e4;i++) s+=primePi(1e8/a[i])-i;
console.log(s);
