function GCD(a,b){
  if(a<0) a=-a; if(b<0) b=-b;
  if(b>a) return GCD(b,a);
  if(b==0) return a;
  if(b==1) return 1;
  return GCD(b,a%b);
}
function rvQS(n){
  return simpQS([n[0]*n[3],-n[1]*n[3],n[2],n[0]*n[0]-n[1]*n[1]*n[2]]);
}
function iQS(n){
  var i = ~~(n[0]/n[3] + n[1]*Math.sqrt(n[2])/n[3]);
  while(n[0]+n[1]*Math.sqrt(n[2])-n[3]*(i+1)>0)i++; return i;
}
function aQS(n,d){
  return simpQS([n[0]+d*n[3],n[1],n[2],n[3]]);
}
function simpQS(n){
  var g;
  if(n[3]<0){n[0]*=-1;n[1]*=-1;n[3]*=-1;}
  if(n[0]==0){
    g=GCD(n[1],n[3]);
    n[1]/=g;n[3]/=g;return n;
  }else{
    g=GCD(n[1],n[3]);
    g=GCD(n[0],g);
    n[0]/=g;n[1]/=g;n[3]/=g;return n;
  }
}
function getPeriod(D){
  if(~~Math.sqrt(D)==Math.sqrt(D)) return 0;
  var a=[0,1,D,1],b=[],c;
  a=aQS(a,-iQS(a));
  while(true){
    a=rvQS(a);
    if(b.indexOf(c=a.join(','))>=0) break;
    b.push(c);
    a=aQS(a,-iQS(a));
  }
  return b.length;
}
for(var n=0,N=2;N<10000;N++) if(getPeriod(N)%2==1) n++;
console.log(n);
