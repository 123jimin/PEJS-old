function exist(a,n){
  if(n==9) return exist(a,6);
  for(var i=0;i<a.length;i++){
    if(a[i]==9&&n==6) return true;
    if(a[i]==n) return true;
  }
  return false;
}
function checkNum(a,b,n){
  return exist(a,n[0])&&exist(b,n[1])||exist(a,n[1])&&exist(b,n[0]);
}
function checkWay(a,b){
  for(var i=1;i<10;i++) if(!checkNum(a,b,[~~(i*i/10),(i*i)%10])) return false;
  return true;
}
for(var n=0,a1=0,a2,a3,a4,a5,a6,b1,b2,b3,b4,b5,b6;a1<10;a1++)
  for(a2=a1+1;a2<10;a2++) for(a3=a2+1;a3<10;a3++) for(a4=a3+1;a4<10;a4++) for(a5=a4+1;a5<10;a5++) for(a6=a5+1;a6<10;a6++)
for(b1=0;b1<10;b1++) for(b2=b1+1;b2<10;b2++) for(b3=b2+1;b3<10;b3++) for(b4=b3+1;b4<10;b4++) for(b5=b4+1;b5<10;b5++) for(b6=b5+1;b6<10;b6++)
  if(checkWay([a1,a2,a3,a4,a5,a6],[b1,b2,b3,b4,b5,b6])) n++; console.log(n/2);
