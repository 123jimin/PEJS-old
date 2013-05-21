var pm=null,pmr=null,pmp=524287,a=[],i,t=990000,s=[],x=0,u,v,m=0;
function DS(x){
  this.d=x; this.p=this; this.r=0; this.s=1;
}
DS.prototype.root=function(){
  var p=this.p;
  p=p==this?this:p.p==p?p:(p=p.root());
  this.s=p.s; return p; 
};
DS.prototype.size=function(){
  return this.root().s;
};
DS.union=function(x,y){
  x=x.root(); y=y.root();
  if(x==y) return;
  if(x.r<y.r) x.p=y; else if(x.r>y.r) y.p=x;
  else{y.p=x;x.r++;}
  x.s=y.s=x.s+y.s;
  if(pmr==x||pmr==y) pmr=x.root();
};
for(var i=0;i<1e6;i++) a[i]=new DS(i); pm=pmr=a[pmp];
while(pmr.s<t){
  if(++x<=55) u=s[x-1]=(100003+(((300007*x*x-200003)%1e6)*x)%1e6)%1e6; else u=s[(x+54)%55]=(s[(x+54)%55]+s[(x+30)%55])%1e6;
  if(++x<=55) v=s[x-1]=(100003+(((300007*x*x-200003)%1e6)*x)%1e6)%1e6; else v=s[(x+54)%55]=(s[(x+54)%55]+s[(x+30)%55])%1e6;
  if(u==v){
    m++; continue;
  }
  DS.union(a[u],a[v]);
}
console.log(x/2-m);
