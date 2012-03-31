function isP(n){
  n*=2; var i=~~((1+Math.sqrt(1+12*n))/6);
  while(i*(3*i-1)<n) i++;
  return i*(3*i-1)==n;
}
var n=143,n6;
while(true){
  n++; if(isP(n*(2*n-1))) break;
}
console.log(n*(2*n-1));