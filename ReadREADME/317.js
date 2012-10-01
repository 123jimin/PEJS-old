var g=9.81,dh=100,v=20;
var h=v*v/2/g,w=v*v/g,k=w/Math.sqrt(h);
console.log(Math.round(10000*Math.PI*k*k/2*Math.pow(100+h,2))/10000);
