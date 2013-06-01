function step(a){
  return [a[0]+a[1],a[2],a[3],a[0],0,a[5]+a[0],a[6]+1];
}
function cost(a){
  for(var c=0,i=0;i<5;i++) c+=a[i]*(a[6]+i); return c;
}
function C(i){
  var y=[1,0,0,1,0,2,1],x;
  do{
    x=y; y=step(x);
  }while(y[5]<i);
  if(y[5]==i) return cost(y);
  i-=x[5]; x[0]-=i; x[1]+=i; x[4]+=i;
  return cost(x);
}
console.log(C(1e9));
