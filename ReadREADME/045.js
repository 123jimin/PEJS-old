function isT(n){
  n*=2;var i=1;
  while(i*(i+1)<n) i++;
  return i*(i+1)==n;
}
function isP(n){
  n*=2;var i=1;
  while(i*(3*i-1)<n) i++;
  return i*(3*i-1)==n;
}
var n=143,n6;
while(true){
  n++;n6=n*(2*n-1);
  if(isT(n6)&&isP(n6)) break;
}
console.log(n6);
