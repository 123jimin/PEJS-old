function T(n){return n*(n+1)/2}
function R(p,q){return T(p)*T(q)}

var o={};
function D(p,q){
  if(p>q) return D(q,p);
  if(p==1) return q-1;
  var i,t=0,s=p+' '+q;
  if(o[s]) return o[s];
  for(i=1;i<2*p;i++) t+=i*(2*p-i);
  return o[s]=(p==q?t-p:t)+D(p,q-1);
}

function X(p,q){return R(p,q)+D(p,q)}
for(var x=0,p=1,q;p<=47;p++) for(q=1;q<=43;q++) x+=X(p,q);
console.log(x);
