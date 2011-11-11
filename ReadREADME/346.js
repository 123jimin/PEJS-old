function strPlus(a,b){
  if(b=='0') return a; if(a=='0') return b;
  if(b.length>a.length) return strPlus(b,a);
  if(a.length<10) return ''+(~~a+~~b);
  while(b.length<a.length) b='0'+b;
  for(var s='',i=a.length-1,c=0,r;i>=0;i--){
    if((r=~~a[i]+~~b[i]+c)>=10) c=1; else c=0;
    s=(r%10)+s;
  }
  return c?'1'+s:s;
}
for(var a=[],i=2,j,k,s='1';i*i+i+1<1e12;i++)
  for(var j=i*i+i+1;j<1e12;j=j*i+1) a.push(j);
a.sort();
for(i=k=0,j=a.length;i<j;i++){
  if(k!=a[i]) s=strPlus(s,a[i]+'');
  k=a[i];
}
console.log(s);
