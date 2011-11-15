function f(n){return (n*(Math.log(Math.sqrt(5)+1)-Math.log(2))-Math.log(5)/2)/Math.log(10);}
function isPan9(n){n=(''+n).slice(0,9); return n.split('').sort().join('')=='123456789';}
for(var i=3,a=1,b=1,c;;i++){
  c=(a+b)%1000000000;
  a=b; b=c;
  if(isPan9(c)&&isPan9(Math.pow(10,20+f(i)-~~f(i)))) break;
}
console.log(i);
