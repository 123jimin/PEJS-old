function h_p(a,o){
  o[3]=o[1]-o[0];
  for(var x,h,l=a.push(o)-1;l;l=h){
    h=0|(l-1)/2; if(a[l][1]-a[l][0]<a[h][1]-a[h][0]) return;
    x=a[l]; a[l]=a[h]; a[h]=x;
  }
}
function h_r(a){
  if(a.length==1) return a.pop();
  var i=0,x,y,o,r=a[0]; a[0]=a.pop();
  for(;i*2+1<a.length;){
    x=i*2+1; y=i*2+2;
    if(y<a.length)
      if(a[x][3]>a[y][3]) o=x; else o=y;
    else o=x;
    if(a[o][3]<a[i][3]) break;
    x=a[o]; a[o]=a[i]; a[i]=x; i=o;
  }
  return r;
}
for(var o={},v,x,i=1,a=[[1,Math.sqrt(5)/2+.5,Infinity,Math.sqrt(5)/2-.5,0]];;i++){
  v=h_r(a); if(v[4]==119) break; // RRRUUU
  x=v[0]-1/v[1]; h_p(a,[v[0],(x+Math.sqrt(x*x+4))/2,v[1],null,v[4]*2+1]);
  x=v[1]-1/v[2]; h_p(a,[v[1],(x+Math.sqrt(x*x+4))/2,v[2],null,v[4]*2+2]);
}
console.log(i);
