var f=[];
function L(N){
  if(N==1) return 2;
  if(N==2) return 3;
  if(f[N]) return f[N];
  return f[N]=L(N-1)+L(N-2);
}
function C(N){
  if(N==1) return 1;
  if(N==2) return 3;
  if(N==3) return 4;
  return L(N-1)+L(N-3);
}
console.log(C(1)*C(2)*C(3)*C(6)*C(6)*C(46));
