var operators='+-*/';
function isInteger(n){return n-~~n<1e-6||Math.ceil(n)-n<1e-6;}
function getInts(a,b,c,d){
  for(var i=0,j,k,t,oa,ob,oc,r=[];i<5;i++){
    for(j=0;j<64;j++){
      oa=operators[j%4],ob=operators[~~(j/4)%4],oc=operators[~~(j/16)];
      switch(i){
        case 0: t=doEval([[[a,oa,b],ob,c],oc,d]); break;
        case 1: t=doEval([[a,oa,[b,ob,c]],oc,d]); break;
        case 2: t=doEval([[a,oa,b],ob,[c,oc,d]]); break;
        case 3: t=doEval([a,oa,[[b,ob,c],oc,d]]); break;
        case 4: t=doEval([a,oa,[b,ob,[c,oc,d]]]); break;
      }
      if(t>0&&isInteger(t)&&r.indexOf(t)==-1) r.push(t);
    }
  }
  return r;
}
function doEval(a){
  if(a.length!==undefined)
    if(a[1]=='+') return doEval(a[0])+doEval(a[2]);
    else if(a[1]=='-') return doEval(a[0])-doEval(a[2]);
    else if(a[1]=='*') return doEval(a[0])*doEval(a[2]);
    else return doEval(a[0])/doEval(a[2]);
  else return a;
}
function getN(a,b,c,d){
  for(var i=0,j,k,l,r=[a,b,c,d],s=[],t;i<4;i++){
    for(j=0;j<4;j++) if(j!=i) for(k=0;k<4;k++) if(k!=i&&k!=j){
      t=getInts(r[i],r[j],r[k],r[6-i-j-k]);
      for(l=0;l<t.length;l++) if(s.indexOf(t[l])==-1) s.push(t[l]);
    }
  }
  s.sort(function(x,y){return x-y;});
  for(i=0;i<s.length;i++) if(s[i]!=i+1) return i; return s.length;
}
for(var a=0,b,c,d,m=0,n,s;a<10;a++) for(b=a+1;b<10;b++) for(c=b+1;c<10;c++) for(d=c+1;d<10;d++){
  n=getN(a,b,c,d);
  if(n>m) m=n,s=1000*a+100*b+10*c+d;
}
console.log(s);
