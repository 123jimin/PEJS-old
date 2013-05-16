function dv(n){
  var c,i,x,r;
  if(n<7) return 0;
  i=1; while(i*7<n) i*=7;
  if(i*7==n) return dv(n-2)+(n-1);
  if(i*7-1==n) return dv(n-1);
  c=~~(n/i); x=(i*(i-1)/2)*(c*(c-1)/2);
  r=(c+1)*i-n; x+=dv(i-1)*(c*(c+1)/2);
  return dv(n-c*i)*(c+1)+(i*(i-1)/2-(r-1)*(r-2)/2)*c+x;
}
function ndv(n){
  return n*(n+1)/2-dv(n-1);
}
console.log(ndv(1e9));
