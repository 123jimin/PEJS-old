function findX(f){
  return (Math.log(10)*9-1000*Math.log(1-f))/(Math.log(1+2*f)-Math.log(1-f));
}
function d(f){return 2000*(f-1)*Math.log(1-f)-1000*(2*f+1)*Math.log(2*f+1)+27*Math.log(10);}
for(var C=[[1]],i=1,j,a=0.14,b=0.15,m,x;i<=1000;i++){
  C[i]=[1];
  for(j=1;j<i;j++) C[i].push(C[i-1][j]+C[i-1][j-1]);
  C[i].push(1);
}
for(;b-a>1e-10;) if(d(m=(a+b)/2)<0) b=m; else a=m;
for(a=0,x=Math.ceil(findX(m));x<1000;x++) a+=C[1000][x]/Math.pow(2,1000);
console.log(Math.round(a*1e12)/1e12);
