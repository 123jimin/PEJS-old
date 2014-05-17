var o={},M=4294967296;
function add(x,y){
  var a=[x[0]+y[0],x[1]+y[1]];
  if(a[0]>=M){
    a[0]-=M; a[1]++;
  }
  return a;
}
function mul(x,y){
  var a=[x[0]*y[0],x[0]*y[1]+x[1]*y[0]+M*x[1]*y[1]];
  a[1]+=Math.floor(a[0]/M); a[0]%=M;
  return a;
}
function c(z,s,a,p,l){
  if(z&&s&&a) if(l<8) return [Math.pow(16,l),0]; else return [0,Math.pow(16,l-8)];
  if(!l) return z&&s&&a?[1,0]:[0,0];
  var k=''+z+s+a+p+l; if(o[k]) return o[k];
  if(p) return o[k]=add(add(c(1,s,a,1,l-1),c(z,1,a,1,l-1)),add(c(z,s,1,1,l-1),mul([13,0],c(z,s,a,1,l-1))));
  return o[k]=add(add(c(0,1,0,1,l-1),c(0,0,1,1,l-1)),add(c(0,0,0,0,l-1),mul([13,0],c(0,0,0,1,l-1))));
}
// Wrong
console.log(c(0,0,0,0,16).map(function(x){
  for(x=x.toString(16);x.length<8;x='0'+x); return x;
}).reverse().join('').toUpperCase());
