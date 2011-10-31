function diff(){
  for(var t=arguments[0],i=1;i<arguments.length;i++)
  if(t==arguments[i]) return false; return true;
}
function isO(s){
  for(var a=[1,1,1,1,1,1,1,1,1,1],i=0;i<10;i++) a[~~s[i]]--;
  for(i=0;i<10;i++) if(a[i]!=0) return false; return true;
}
var d1,d2,d3,d4,d5,a={},i,j=0;
//4*1=4
for(d1=1;d1<10;d1++) if(diff(d1))
for(d2=0;d2<10;d2++) if(diff(d2,d1))
for(d3=0;d3<10;d3++) if(diff(d3,d2,d1))
for(d4=0;d4<10;d4++) if(diff(d4,d3,d2,d1))
for(d5=2;d5<10;d5++) if(diff(d5,d4,d3,d2,d1)&&d5*(''+d4+d3+d2+d1)<10000)
if(isO((d5*(''+d4+d3+d2+d1)+'')+d1+d2+d3+d4+d5)) a[d5*(''+d4+d3+d2+d1)]=1;
//3*2=4
for(d1=1;d1<10;d1++) if(diff(d1))
for(d2=0;d2<10;d2++) if(diff(d2,d1))
for(d3=0;d3<10;d3++) if(diff(d3,d2,d1))
for(d4=1;d4<10;d4++) if(diff(d4,d3,d2,d1))
for(d5=0;d5<10;d5++) if(diff(d5,d4,d3,d2,d1)&&(d4*10+d5)*(''+d3+d2+d1)<10000)
if(isO(((d4*10+d5)*(''+d3+d2+d1)+'')+d1+d2+d3+d4+d5)) a[(d4*10+d5)*(''+d3+d2+d1)]=1;
for(i in a) j+=~~i; console.log(j);

