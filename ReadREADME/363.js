function dxt(v,t){
  return 3*(2*v-3*v*t+2*t-2)*t;
}
function dyt(v,t){
  return 3*((-2+3*v)*t*t+2*(-2*v+1)*t+v);
}
function f(v,t){
  return Math.sqrt(dxt(v,t)*dxt(v,t)+dyt(v,t)*dyt(v,t));
}
var a,b,i,v=2-Math.sqrt((22-5*Math.PI)/3),L=0,n=1e3;
for(i=0;i<n;i++){
  a=i/n; b=(i+1)/n;
  L+=(b-a)/6*(f(v,a)+f(v,b)+4*f(v,(a+b)/2));
}
L=200*(L-Math.PI/2)/Math.PI;
console.log(Math.round(L*1e10)/1e10);