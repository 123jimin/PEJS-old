function F(y,r){return (y*Math.sqrt(r*r-y*y)+r*r*Math.atan(y/Math.sqrt(r*r-y*y)))/2;}
function A(r,k){return F(Math.sqrt(r*r-k*k),r)-F(k,r)-k*(Math.sqrt(r*r-k*k)-k)}
function a(k){return k==1?A(1.5,1):A(1+1/2/k,1/k)-A(1-1/2/k,1/k)}
for(var s=0,k=1;k<=1e5;k++) s+=k*a(k); console.log(Math.round(s*1e5)/1e5);
