function modProd(a,b,n){
  if(b==0) return 0;
  if(b==1) return a%n;
  return (modProd(a,(b-b%10)/10,n)*10+(b%10)*a)%n;
}
function matp(a,n,m){
  if(n==1) return a;
  if(n%2==1) return matm(matp(a,n-1,m),a,m);
  var b=matp(a,n/2,m);
  return matm(b,b,m);
}
function matm(a,b,m){
  for(var c=[],d,i=0,j,k,s;i<a.length;i++){
    for(d=[],j=0;j<b[0].length;j++){
      for(k=s=0;k<b.length;k++) s+=modProd(a[i][k],b[k][j],m);
      d.push(s%m);
    }
    c.push(d);
  }
  return c;
}
for(var ans=0,t,a,A,n=1;n<=30;n++){
  if(n==1) a=[[2],[1],[3]];
  else{
    a=[[3],[Math.pow(2,n)%1e8]];
    a.push([modProd(a[1][0],a[1][0],1e8)]);
  }
  A=[[0,1,0],[0,0,1],[1e8-n,0,Math.pow(2,n)%1e8]];
  A=matp(A,987654321,1e8);
  t=matm(A,a,1e8)[0][0];
  if(n!=1) t--; ans=(ans+t)%1e8;
}
console.log(ans);
