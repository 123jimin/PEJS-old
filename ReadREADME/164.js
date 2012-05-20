var a=[];
function p(n,x,y){
  var d=n*100+x*10+y,i;
  if(a[d]) return a[d];
  if(n==1) return 10-x-y;
  for(a[d]=0,i=0;i+x+y<=9;i++)
    a[d]+=p(n-1,y,i);
  return a[d];
}
for(var s=0,i=1;i<10;i++) s+=p(19,0,i);
console.log(s);
