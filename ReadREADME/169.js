var m=new Uint32Array(1e6);
function f(n){
  if(m[n]) return m[n];
  if(n<2) return 1;
  if(n%2) return m[n]=f((n-1)/2);
  return m[n]=f(n/2)+f(n/2-1);
}
function g(a,b){
  if(a==0) return f(b);
  var c=b%2;
  b=(b-b%2)/2+(a%2)*5e13;
  a=(a-a%2)/2;
  if(c) return g(a,b);
  return g(a,b)+(b==0?g(a-1,1e14-1):g(a,b-1));
}
console.log(g(1e11,0));
