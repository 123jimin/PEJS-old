var o={};
function f(a,b,t){
  if(a>=100) return 0;
  if(b>=100) return 1;
  if(t==0) return (f(a+1,b,1)+f(a,b,1))/2; 
  var m=0,n,T,k=a+' '+b; if(o[k]) return o[k];
  for(T=1;T<9;T++){
    n=Math.pow(2,T);
    n=(2*f(a,b+n/2,0)+(n-1)*f(a+1,b,1))/(n+1);
    if(n>m) m=n;
  }
  return o[k]=m;
}
console.log(f(0,0,0).toFixed(8));
