var o=1+Math.sqrt(3)*2/3,s=1-3/o/o,a=[[-1,o,o],[-1,o,o],[-1,o,o],[o,o,o]],b,i=0;
for(;i<10;i++){
  b=[];
  a.forEach(function(a){
    var x=a[0]+a[1]+a[2],y=a[0]*a[0]+a[1]*a[1]+a[2]*a[2],k=x+Math.sqrt(2*x*x-2*y);
    s-=1/k/k; b.push([a[0],a[1],k],[a[1],a[2],k],[a[2],a[0],k]);
  });
  a=b;
}
console.log(s.toFixed(8));
