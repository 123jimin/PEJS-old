function isSq(n){
  if(n%4>1) return false;
  if(n%8==5) return false;
  var r=Math.sqrt(n);
  return r==~~r;
}
for(var p=new Uint8Array(1e6),ns,x,y=2,A,s=0;y<1e4;y++) for(A=1;A*A*y*y*y<1e12;A++)
  for(x=1;x<y&&(ns=A*x*(x+A*y*y*y))<1e12;x++) if(isSq(ns)&&!p[Math.sqrt(ns)])
    p[Math.sqrt(ns)]=1,s+=ns;
console.log(s);
