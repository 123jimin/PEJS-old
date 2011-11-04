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
function solvePell(D){
  if(~~Math.sqrt(D)==Math.sqrt(D)) return false;
  if(D==2) return [3,2];
  if(D==3) return [2,1];
  var a=[0,1,D,1],b,p=[0,1,iQS(a)],q=[1,0,1],pn=p[p.length-1],qn=0,pl;
  a=aQS(a,-p[p.length-1]);
  while(pn*pn-D*qn*qn!=1){
    a=rvQS(a);
    b=iQS(a);
    pl=p.length;
    pn=p[pl]=b*p[pl-1]+p[pl-2];
    qn=q[pl]=b*q[pl-1]+q[pl-2];
    a=aQS(a,-b);
  }
  return [pn,qn];
}
