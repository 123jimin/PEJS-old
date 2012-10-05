for(var f=[1],i=1;i<=100;i++) f[i]=f[i-1]*i;
var numa=[];
function num(p,np){
  if(p==0) return f[np];
  if(p==1) return np*f[np];
  if(np==0) return (p-1)*(num(p-2,np)+num(p-1,np));
  if(numa[p*100+np]) return numa[p*100+np];
  return numa[p*100+np]=(p-1)*(num(p-2,np)+num(p-1,np))+np*(num(p,np-1)+num(p-1,np-1));
}
console.log(Math.round(1e12*25*24*23*num(22,75)/f[100]/6)/1e12);
