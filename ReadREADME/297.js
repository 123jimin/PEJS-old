var M=1e7,F=[],a=[1,0],b=[1,0],c,o=[[0,0],[1,0],[1,0]];
function eq(x,y){
  return x[0]==y[0]&&x[1]==y[1];
}
function ge(x,y){
  return x[1]>y[1]||x[1]==y[1]&&x[0]>=y[0];
}
function add(x,y){
  var a=[x[0]+y[0],x[1]+y[1]];
  if(a[0]>=M){
    a[0]-=M; a[1]++;
  }
  return a;
}
function sub(x,y){
  var a=[x[0]-y[0],x[1]-y[1]];
  if(a[0]<0){
    a[0]+=M; a[1]--;
  }
  return a;
}
function mul(x,y){
  var a=[x[0]*y[0],x[0]*y[1]+x[1]*y[0]+M*x[1]*y[1]];
  a[1]+=Math.floor(a[0]/M); a[0]%=M;
  return a;
}
function r(n){
  if(o[n]) return o[n];
  for(var s=F[n-1],i=1;i<=n-2;i++){
    s=add(s,r(i));
  }
  return o[n]=s;
}
function zs(x){
  if(x[0]==1&&x[1]==0) return [0,0];
  for(var s=[0,0],i=1;ge(x,F[i+1]);i++) s=add(s,r(i));
  if(eq(x,F[i])) return s;
  return add(s,add(sub(x,F[i]),zs(sub(x,F[i]))));
}
for(;a[1]<1e11;a=b,b=c){
  F.push(a); c=add(a,b);
}
a=zs([0,1e10]);
for(a[0]+='';a[0].length<7;a[0]='0'+a[0]);
console.log(a[1]+a[0]);
