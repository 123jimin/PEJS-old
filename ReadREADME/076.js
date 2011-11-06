var o={};
function f(a,b){
  if(b||b===0){
    if(b>a) return f(a,a);
    if(b<2) return 1;
    if(o[a+','+b]) return o[a+','+b];
  }
  if(!b) b=a-1;
  for(var ret=0,i=1;i<=b;i++){
    ret+=f(a-i,i);
  }
  return o[a+','+b] = ret;
}
console.log(f(100));
