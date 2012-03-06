var pw=24;
function isInCircle(x,y){z=Math.pow(2,pw-1);return Math.pow(x-z,2)+Math.pow(y-z,2)<=Math.pow(z,2)}
console.log(function D(l,d,s){
  if(s==1) return 2;
  var x=Math.pow(2,pw-1); if(s==x*2) return 1+D(0,0,x)+D(0,x,x)+D(x,0,x)+D(x,x,x);
  switch(2*~~(l/x)+~~(d/x)){
    case 0:
      if(isInCircle(l,d)||!isInCircle(l+s-1,d+s-1)) return 2;
      break;
    case 1:
      if(isInCircle(l,d+s-1)||!isInCircle(l+s-1,d)) return 2;
      break;
    case 2:
      if(isInCircle(l+s-1,d)||!isInCircle(l,d+s-1)) return 2;
      break;
    case 3:
      if(isInCircle(l+s-1,d+s-1)||!isInCircle(l,d)) return 2;
      break;
  }
  return 1+D(l,d,s/2)+D(l+s/2,d,s/2)+D(l,d+s/2,s/2)+D(l+s/2,d+s/2,s/2);
}(0,0,Math.pow(2,pw)));
