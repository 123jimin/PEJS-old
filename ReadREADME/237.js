var t=[1,1,4,8],a=[[0,1,0,0],[0,0,1,0],[0,0,0,1],[1,1e8-2,2,2]];
function p(x,y){
  if(x*y<1e15) return x*y%1e8;
  if(y%2==0) return p(x,y/2)*2%1e8;
  return (x+p(x,y-1))%1e8;
}
function m(x,y){
  for(var z=[],i=0,j,k;i<4;i++)
    for(j=0,z[i]=[];j<4;j++){
      for(z[i][j]=k=0;k<4;k++) z[i][j]+=p(x[i][k],y[k][j]);
      z[i][j]%=1e8;
    }
  return z;
}
function v(a,t){
  for(var b=[],i=0,j;i<4;i++){
    for(b[i]=j=0;j<4;j++) b[i]+=p(a[i][j],t[j]);
    b[i]%=1e8;
  }
  return b;
}
function w(a,n){
  if(n==1) return a;
  if(n%2==0){
    var b=w(a,n/2);
    return m(b,b);
  }
  return m(a,w(a,n-1));
}
console.log(v(w(a,1e12-4),t)[3]);
