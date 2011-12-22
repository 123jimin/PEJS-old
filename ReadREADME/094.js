var a=[1,1,5],s=16,i=2,b;
for(;++i;){
  a[i]=3*a[i-1]+3*a[i-2]-a[i-3]; b=a[i]+1-2*(i%2);
  if(2*a[i]+b>1e9) break; s+=2*a[i]+b;
}
console.log(s);
