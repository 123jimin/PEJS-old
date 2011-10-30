function r(s){return s.toString().split('').reverse().join('');}
function isP(s){return s==r(s);}
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
for(var c=0,s,j,f,i=10;i<10000;i++){
  for(f=true,s=''+i,j=0;j<50&&f;j++)if(isP(s=p(s,r(s))))f=false;
  if(f)c++;
}
console.log(c);
