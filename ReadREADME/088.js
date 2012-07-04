function prod(p){
  for(var n=1,i=0;p[i];n*=p[i++]); return n;
}
function sum(p){
  for(var n=0,i=0;p[i];n+=p[i++]); return n;
}
function len(p){
  for(var i=0;p[i];i++); return i;
}
for(var d,k,a=new Uint16Array(12001),i=0,p=[1];;){
  while((d=prod(p))>=24000&&i>=0) p[i--]=0;
  if(i<0) break;
  k=d+len(p)-sum(p);
  if(!a[k]||d<a[k]) a[k]=d;
  p[i++]++; if(!p[i]) p[i]=p[i-1]-1;
}
for(d=[],k=12001;k-->2;) if(d.indexOf(a[k])==-1) d.push(a[k]);
for(k=0,i=d.length;i-->0;k+=d[i]); console.log(k);
