function d(n){
  var s=0,i=2;
  while(i*i<=n){
    if(n%i==0) if(i*i!=n) s+=i+n/i; else s+=i;
    i++;
  }
  return s+1;
}
var a=[],i,j,v=new Uint8Array(28124),u=new Uint8Array(28124),s=0;
for(i=12;i<=28123;i++) if(d(i)>i) v[i]=1,a.push(i);
for(i=12;i<=28123;i++) for(j=0;j<a.length&&a[j]<i;j++) if(v[i-a[j]]){u[i]=1;break;}
for(i=1;i<=28123;i++) if(!u[i]) s+=i; console.log(s);
