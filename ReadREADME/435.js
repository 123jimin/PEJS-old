var M=1307674368000,mm=function(x,y){
  for(var a=[],i=0,j,k;i<3;i++) for(a[i]=[],j=0;j<3;j++)
    for(a[i][j]=k=0;k<3;k++) a[i][j]=(a[i][j]+mdp(x[i][k],y[k][j],M))%M;
  return a;
},mp=function(a,p){
  if(p==0) return [[1,0,0],[0,1,0],[0,0,1]];
  if(p==1) return a;
  if(p%2==0){
    var x=mp(a,p/2); return mm(x,x);
  }
  return mm(a,mp(a,p-1));
},mdp=function(a,b,n){
  if(b==0) return 0;
  if(b==1) return a%n;
  return (mdp(a,(b-b%10)/10,n)*10+(b%10)*a)%n;
},ka=function(k){
  return [[k,k*k,k],[1,0,0],[0,0,1]];
},F=function(n,x){
  var v=[(x*x+x)%M,x%M,1],a=mp(ka(x),n-1);
  return n==1?x%M:n==2?(x*x+x)%M:(mdp((x*x+x),a[1][0],M)+mdp(x,a[1][1],M)+a[1][2])%M;
};
for(var x=0,s=0;x<=100;x++) s=(s+F(1e15,x))%M;
console.log(s);
