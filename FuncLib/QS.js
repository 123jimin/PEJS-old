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
  var a=[0,1,D,1],b,c=[],d=[]
     ,p=[~~Math.sqrt(D)],q=[1],pn,qn;
  a=aQS(a,-iQS(a));
  while(c.indexOf(a.join(','))==-1){
    c.push(a.join(','));
    a=rvQS(a);
    b=iQS(a);
    d.push(b);
    a=aQS(a,-b);
  }
  b=1;
  p.push(pn=p[0]*d[0]+1);
  q.push(qn=d[0]);
  while(pn*pn-D*qn*qn!=1){
    p.push(pn=d[b%d.length]*p[b]+p[b-1]);
    q.push(qn=d[b%d.length]*q[b]+q[b-1]);
    b++;
  }
  return [pn,qn];
}
