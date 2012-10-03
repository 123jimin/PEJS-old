function I(x){
  if(x<1e-10) return 0;
  if(1/2<x) return 1/2-I(1-x);
  else return I(2*x)/4+x*x/2;
}
function b(x){
  x-=~~x; if(x==0) return 0;
  if(x<1/2) return x+b(x*2)/2;
  return 1-x+b(x*2)/2;
}
function d(k){
  var x=1/4-k,y=1/2-b(k);
  return Math.sqrt(x*x+y*y)-1/4;
}
function t(k){
  var x=1/4-k,y=1/2-b(k);
  return Math.PI-Math.atan2(y,x);
}
function v(){
  for(var x=0,y=1/4,z;y-x>1e-10;){
    z=(x+y)/2;
    if(d(z)>0) x=z;
    else if(d(z)<0) y=z;
    else return z; 
  }
  return (x+y)/2;
}
var l=v(),dl=1/4-l,a=I(.5)-I(l),c=Math.PI/16*(t(l)/Math.PI/2);
c=(.5-l)/2-(-Math.cos(t(l))/4*Math.sin(t(l))/4)/2-c; a-=c;
console.log(Math.round(a*1e8)/1e8);
