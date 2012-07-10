function d(n){
  var s=0,i=2;
  while(i*i<=n){
    if(n%i==0) if(i*i!=n) s+=i+n/i; else s+=i;
    i++;
  }
  return s+1;
}
var a=[],i,j,u=new Uint8Array(28124),s=0;
for(i=12;i<=28123;i++) if(d(i)>i) a.push(i);
for(i=0;i<a.length;i++)
  for(j=0;j<=i&&a[i]+a[j]<=28123;j++) u[a[i]+a[j]]=1;
for(i=1;i<=28123;i++) if(!u[i]) s+=i; console.log(s);
