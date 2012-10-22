function GCD(x,y){
  if(x==0) return y;
  if(y==0) return x;
  if(x==1||y==1) return 1;
  return GCD(y,x%y);
}
function _(x,y){
  if(x==0||y==0) return [];
  var i;
  if(x>y){
    i=Math.floor(x/y);x%=y;
    if(x==0) i--,x=y;
  }else{
    i=Math.floor(y/x);
    y%=x;
  }
  return _(x,y).concat(i);
}
function $(x,y){
  var d=GCD(x,y);
  return _(x/d,y/d).join(',');
}
console.log($(123456789,987654321));