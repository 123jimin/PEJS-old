function d(n){
  var s=0,i=2;
  while(i*i<=n){
    if(n%i==0) if(i*i!=n) s+=i+n/i; else s+=i;
    i++;
  }
  return s+1;
}
var a=[],i,j,f=true,s=0;
for(i=12;i<=28123;i++) if(d(i)>i) a.push(i);
for(i=1;i<=28123;i++){f=true;
  for(j=0;a[j]*2<=i&&f;j++){
    if(a.indexOf(i-a[j])>=0) f=false;
  }
  if(f) s+=i;
}
console.log(s);
