function GCD(x,y){
  return x==0?y:y==0?x:x==1||y==1?1:GCD(y,x%y);
}
function getReachables(s){
  var a={'1':{}},i,x,y,xq,xp,yq,yp,p,q,g; a['1'][s]=1;
  if(s.length==1) return a;
  for(i=1;i<s.length;i++){
    x=getReachables(s.slice(0,i));
    y=getReachables(s.slice(i));
    for(xp in x) for(xq in x[xp]) for(yp in y) for(yq in y[yp]){
      p=xp*yp; q=xq*yp+yq*xp; g=GCD(p,q>0?q:-q); p/=g; q/=g;
      if(!a[p]) a[p]={}; a[p][q]=1;
      p=xp*yp; q=xq*yp-yq*xp; g=GCD(p,q>0?q:-q); p/=g; q/=g;
      if(!a[p]) a[p]={}; a[p][q]=1;
      p=xp*yp; q=xq*yq; g=GCD(p,q>0?q:-q); p/=g; q/=g;
      if(!a[p]) a[p]={}; a[p][q]=1;
      if(yq==0) continue;
      p=xp*yq; q=xq*yp; if(p<0){p=-p; q=-q;}
      g=GCD(p,q>0?q:-q); p/=g; q/=g;
      if(!a[p]) a[p]={}; a[p][q]=1;
    }
  }
  return a;
}
var x,s=0;
for(x in getReachables("123456789")[1]) if(x[0]!='-') s+=+x;
console.log(s);
