function M(c,r){
  if(c>r) return r+1;
  var m=M(c,r-1),x=m-c+1;
  x=Math.ceil(x/(c-2));
  return x*2+m+1;
}
for(var m=0,c=3;c<=40;c++) m+=M(c,30);
console.log(m);
