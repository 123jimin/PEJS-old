var o={};
function x(a,b,n){
  if(n==1) return 1<=b&&b<=a?1:0;
  if(o[a+','+b+','+n]) return o[a+','+b+','+n];
  for(var s=0,i=1;i<=a;i++){
    s+=x(a,b-i,n-1);
  }
  return o[a+','+b+','+n]=s;
}
for(var i=9,j,s=0;i<=36;i++)
  for(j=0;j<i;j++) s+=x(4,i,9)*x(6,j,6);
s/=Math.pow(6,6)*Math.pow(4,9);
console.log(Math.round(s*1e7)/1e7);
