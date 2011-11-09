var o={};
function repl(m,x){
  if(x<m) return 1; if(x==m) return 2;
  if(o[m+','+x]) return o[m+','+x];
  return o[m+','+x]=repl(m,x-1)+repl(m,x-m);
}
console.log(repl(2,50)+repl(3,50)+repl(4,50)-3);
