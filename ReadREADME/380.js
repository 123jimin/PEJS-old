function C(a,b){
  for(var n=a*b,i=0,j,k,x=Math.LN2*(n-1)-Math.log(n);i<a;i++) for(j=+!i;j<b;j++)
    x+=Math.log(2-Math.cos(i/a*Math.PI)-Math.cos(j/b*Math.PI));
  x/=Math.LN10; n=Math.floor(x); return Math.pow(10,x-n).toFixed(4)+'e'+n;
}
console.log(C(100,500));
