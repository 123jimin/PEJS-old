var a={};
function f(m,n){
  if(n<m) return 1; if(n==m) return 2;
  if(a[m+','+n]) return a[m+','+n];
  for(var i=m,k=f(m,n-1);i<=n-1;i++) k+=f(m,n-i-1);
  return a[m+','+n]=k+1;
}
for(var i=50;f(50,i)<1000000;i++);console.log(i);
