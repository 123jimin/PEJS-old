function l(d){
  if(d%5==0) return 0;
  for(var i=10,j=0;i!=1;j++) i=(i*10)%d;
  return j+1;
}
for(var x=11,m=5,n=7,y;x<1000;x+=2) if((y=l(x))>m) m=y,n=x;
console.log(n);
