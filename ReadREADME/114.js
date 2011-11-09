var a=[];
function f(n){
  if(n<3) return 1; if(n==3) return 2;
  if(a[n]) return a[n];
  for(var i=3,k=f(n-1);i<=n-1;i++) k+=f(n-i-1);
  return a[n]=k+1;
}
console.log(f(50));
