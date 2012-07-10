var D=[[0,1],[1,1],[2,0]];
function getD(n){
  if(D[n]) return D[n];
  var a=getD(n-1);
  if(a[0]==0) return D[n]=[a[1],a[1]];
  if(a[1]==0) return D[n]=[a[0],-a[0]];
  if(a[0]==a[1]) return D[n]=[2*a[0],0];
  return D[n]=[0,2*a[1]];
}
function getC(n){
  if(n==0) return [0,0];
  if(n==1) return [0,1];
  if(n==2) return [1,1];
  for(var m=1,i=0;m<n;m*=2,i++);
  var c=getC(m-n),d=getD(i-1);
  return [d[0]+d[1]-c[1],d[1]-d[0]+c[0]];
}
console.log(getC(1e12).join());
