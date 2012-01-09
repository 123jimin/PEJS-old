function tri(n){
  for(var a=1,b=1,c=1,d,e=0;++e<30*n;){
    d=a+b+c; a=b; b=c; c=d%n; if(c==0) return false;
  }
  return true;
}
for(var x=0,i=3;x<124;i+=2) if(tri(i)) x++;
console.log(i-2);
