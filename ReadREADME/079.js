var data=["319","680","180","690","129","620","762","689","762","318","368","710","720","710","629","168","160","689",
"716","731","736","729","316","729","729","710","769","290","719","680","318","389","162","289","162","718",
"729","319","790","680","890","362","319","760","316","729","380","319","728","716"];
var a=[],b=[],c=[],i,j,ct=false;
function insert(a,s){
  if(a.indexOf(s)<0) a.push(s);
}
function _(x){
  return b.indexOf(x);
}
for(i=0;i<data.length;i++){
  insert(a,data[i].slice(0,2)); insert(a,data[i].slice(-2));
  insert(b,data[i][0]); insert(b,data[i][1]); insert(b,data[i][2]);
}
for(i=0;i<b.length;i++){
  c.push([]);
  for(j=0;j<b.length;j++){
    c[i].push(i==j?0:1);
  }
}
for(i=0;i<a.length&&!ct;i++){
  if(c[_(a[i][0])][_(a[i][1])]==0) ct=true;
  else{
    c[_(a[i][0])][_(a[i][1])]=2;
    c[_(a[i][1])][_(a[i][0])]=0;
  }
}
if(ct) console.log('Contradict!');
else{
  var p='',mi,m0,m2,a0,a2,dc=[];
  while(dc.length<b.length){
    mi=-1; m0=0; m2=b.length;
    for(i=0;i<b.length;i++){
      a0=0;a2=0;
      if(dc.indexOf(i)>=0) continue;
      for(j=0;j<b.length;j++)
        if(i!=j&&dc.indexOf(j)==-1){
          if(c[i][j]==0) a0++;
          if(c[i][j]==2) a2++;
        }
      if(a0>m0||a0==m0&&a2<m2){
        m0=a0;m2=a2;mi=i;
      }
    }
    dc.push(mi);
    p=b[mi]+p;
  }
}
console.log(p);
