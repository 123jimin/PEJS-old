function GCD(x,y){
  if(x*y==0) return x+y;
  return GCD(y,x%y);
}
var r=new Uint32Array(120000),ar=[];
function rad(n){
  if(n<4) return r[n]=n;
  if(r[n]) return r[n]; var m=n,a=1;
  if(n%2==0){a=2;while(n%2==0)n/=2;}
  if(n%3==0){a*=3;while(n%3==0)n/=3;}
  var p=5;
  while(p<=n){
    if(n%p==0){a*=p;while(n%p==0)n/=p;}
    p+=(p%6==1?4:2);
  }
  return r[m]=a;
}
for(var a,i,m,c=0,s=0;c<120000;c++) ar.push([c,rad(c)]);
ar.sort(function(x,y){
  return x[1]!=y[1]?x[1]-y[1]:x[0]-y[0];
});
for(c=9;c<120000;c++){
  m=c/r[c];
  for(i=1;ar[i][1]<m;i++){
    a=ar[i][0];
    if(a*2<c&&r[a]*r[c-a]<m&&GCD(c,a)==1) s+=c;
  }
}
console.log(s);
