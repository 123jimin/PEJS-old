function GCD(b,s){
  if(s==b||s==0) return b;
  if(s==1) return 1;
  return GCD(s,b%s);
}
var i=1864,j,a=[[0,1]],nc=0;
function ins(x,y){
  if(GCD(y,x)<4){
    nc++;
    return;
  }
  for(var i=0;i<a.length&&a[i][0]*y<a[i][1]*x;i++);
  if(i==a.length) a.push([x,y]);
  else if(a[i][0]*y>a[i][1]*x){
    var b=a.splice(i);
    a.push([x,y]);
    a=a.concat(b);
  }
  return a;
}
for(;i<1910;i++)
  for(j=1;j<i;j++) ins(j,i);
console.log(nc+a.length);
