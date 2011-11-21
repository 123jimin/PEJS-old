var N=1200,a=new Uint32Array(N),k=2,i=5,j,k,l,m,n=Number.MAX_VALUE;
a[0]=2; a[1]=3;
function isPrime(n){
  if(n<2) return false; if(n<4) return true;
  if(n%2==0||n%3==0) return false; if(n<25) return true;
  for(var p=2;a[p]*a[p]<=n;p++) if(n%a[p]==0) return false;
  return true;
}
function isPair(a,b){
  return (a+b)%3!=0&&isPrime(~~(a+''+b))&&isPrime(~~(b+''+a))
}
for(;k<N;i+=(i%6==1?4:2)) if(isPrime(i)) a[k++]=i;
for(i=0;a[i]<n/5&&i<N;i++) for(j=i+1;j<N&&a[i]+a[j]<n/2;j++) if(isPair(a[i],a[j]))
  for(k=j+1;k<N&&a[i]+a[j]+a[k]<n;k++) if(isPair(a[i],a[k])&&isPair(a[j],a[k]))
    for(l=k+1;l<N&&a[i]+a[j]+a[k]+a[l]<n;l++) if(isPair(a[i],a[l])&&isPair(a[j],a[l])&&isPair(a[k],a[l]))
      for(m=l+1;m<N&&a[i]+a[j]+a[k]+a[l]+a[m]<n;m++)
        if(isPair(a[i],a[m])&&isPair(a[j],a[m])&&isPair(a[k],a[m])&&isPair(a[l],a[m])){
          n=0,console.log(a[i]+a[j]+a[k]+a[l]+a[m]); //cheating :P
        }
