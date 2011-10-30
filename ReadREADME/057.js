function p(a,b){
  if(b==0) return a;
  if(b.length>a.length) return p(b,a);
  while(b.length<a.length) b='0'+b;
  for(var s='',i=a.length-1,c=0,r;i>=0;i--){
    if((r=~~a[i]+~~b[i]+c)>=10) c=1; else c=0;
    s=(r%10)+s;
  }
  return c?'1'+s:s;
}
var a='3',b='2',ta,tb,i=1,j=0;
while(i<1000){
  ta = p(a,b);
  tb = p(ta,a);
  if(tb.length>ta.length)j++;
  b = tb; a = ta;
  i++;
}
console.log(j);
