var M=Math.pow(17,7),I=[[1,0,0,0,0,0],[0,1,0,0,0,0],[0,0,1,0,0,0],[0,0,0,1,0,0],[0,0,0,0,1,0],[0,0,0,0,0,1]],
A=[[4,1,0,4,0,0],[0,0,1,0,0,0],[0,2,1,0,0,2],[0,0,0,0,1,0],[0,0,0,2,1,1],[0,0,0,0,0,1]],v=[[2],[4],[10],[1],[2],[1]];
function modProd(a,b,n){
  if(b==0) return 0;
  if(b==1) return a%n;
  return (modProd(a,(b-b%10)/10,n)*10+(b%10)*a)%n;
}
function modPow(a,b,n){
  if(b==0) return 1;
  if(b==1) return a%n;
  if(b%2==0){
    var c=modPow(a,b/2,n);
    return modProd(c,c,n);
  }
  return modProd(a,modPow(a,b-1,n),n);
}
function mm(x,y){
  for(var z=[],i=0,j,k;i<x.length;i++){
    z[i]=[];
    for(j=0;j<y[0].length;j++) for(z[i][j]=k=0;k<y.length;k++)
      z[i][j]=(z[i][j]+modProd(x[i][k],y[k][j],M))%M;
  }
  return z;
}
function mp(a,l){
  if(l==0) return I;
  if(l==1) return a;
  if(l%2==1) return mm(a,mp(a,l-1));
  a=mp(a,l/2); return mm(a,a);
}
console.log(mm(mp(A,modPow(10,modPow(10,18,Math.pow(2,7)*Math.pow(17,5)),16*M/17)+16*M/17-2),v)[0][0]);
