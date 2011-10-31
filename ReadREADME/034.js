var fc=[1,1,2,6,24,120,720,720*7,720*56,720*56*9];
function fs(n){
  n=''+n;
  for(var i=0,s=0;i<n.length;i++) s+=fc[~~n[i]];
  return s==~~n;
}
for(var i=10,s=0;i<7*(9*8*7*6*5*4*3*2);i++) if(fs(i)) s+=i;
console.log(s);
