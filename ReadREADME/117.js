var a=[];
function f(n){
  if(n<0) return 0;
  if(n<2) return 1;
  if(a[n]) return a[n];
  return a[n]=f(n-1)+f(n-2)+f(n-3)+f(n-4);
}
console.log(f(50));
