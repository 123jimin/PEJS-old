var oc={};
function C(a,b){
  if(b==0||b==a) return 1;
  if(b==1||b==a-1) return a;
  if(oc[a+' '+b]) return oc[a+' '+b];
  return oc[a+' '+b]=C(a-1,b)+C(a-1,b-1);
}
function CC(n){return C(2*n,n)/(n+1);}
function T(n){
  for(var i=2,s=0;2*i<=n;i++)
    s+=C(n,2*i)*(C(2*i,i)/2-CC(i));
  return s;
}
console.log(T(12));
