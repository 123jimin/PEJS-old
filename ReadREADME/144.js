function getN(x,y){return [4*x,y];}
function getNormal(a){
  var l=Math.sqrt(a[0]*a[0]+a[1]*a[1]); return [a[0]/l,a[1]/l];
}
function refl(x){
  var n=getNormal(getN(x[1][0],x[1][1]));
  var a=[x[1][0]-x[0][0],x[1][1]-x[0][1]],b=a[0]*n[0]+a[1]*n[1];
  a=[a[0]-2*b*n[0],a[1]-2*b*n[1]];
  var mm=a[1]/a[0],bb=x[1][1]-mm*x[1][0],nx;
  var sq=Math.sqrt(mm*mm*bb*bb-(bb*bb-100)*(4+mm*mm));
  if(a[0]<0) nx=(-mm*bb-sq)/(4+mm*mm); else nx=(-mm*bb+sq)/(4+mm*mm);
  var ny=mm*nx+bb; return [[x[1][0],x[1][1]],[nx,ny]];
}
var beam=[[0,10.1],[1.4,-9.6]],ref=0;
do{ beam=refl(beam); ref++;}while(!(Math.abs(beam[1][0])<=0.01&&beam[1][1]>0));
console.log(ref);
