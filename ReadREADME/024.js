function f(n){return n<2?1:n*f(n-1);}
var s=0,i=9,j=0,r='',o=[0,0,0,0,0,0,0,0,0,0];
function g(i){var j=0;while(o[j])j++;
  for(;i>0;i--)while(o[++j]);return j;}
while(i>0){
  while(s+f(i)<1000000){
    s+=f(i);j++;
  }
  i--;r+=g(j);o[g(j)]=1;j=0;
}
console.log(r+g(0));
