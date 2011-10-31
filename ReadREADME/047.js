var x={};
function numFactors(n){
  if(x[n]) return x[n];
  if(n<4) return 1;
  var a = 0;
  if(n%2 == 0){
    a=1;
    while(n%2==0) n/=2;
  }
  if(n%3 == 0){
    a++;
    while(n%3==0) n/=3;
  }
  var p=5;
  while(p<=n){
    if(n%p==0){
      a++;
      while(n%p==0)n/=p;
    }
    p+=(p%6==1?4:2);
  }
  return a;
}
var n=2*3*5*7+1;
while(numFactors(n)!=4||numFactors(n+1)!=4||numFactors(n+2)!=4||numFactors(n+3)!=4)n++;
console.log(n);
