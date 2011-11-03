function radical(n){
  if(n<4) return n; var a=1;
  if(n%2==0){a=2;while(n%2==0)n/=2;}
  if(n%3==0){a*=3;while(n%3==0)n/=3;}
  var p=5;
  while(p<=n){
    if(n%p==0){a*=p;while(n%p==0)n/=p;}
    p+=(p%6==1?4:2);
  }
  return a;
}
for(var a=[],i=1;i<=100000;i++) a.push([i,radical(i)]);
a.sort(function(x,y){
  return x[1]>y[1]?1:
  x[1]<y[1]?-1:
  x[0]>y[0]?1:
  x[0]<y[0]?-1:0;
});
console.log(a[9999][0]);
