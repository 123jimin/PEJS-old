for(var C=[[1]],i=1,j;i<=32;i++){
  C[i]=[1];
  for(j=1;j<i;j++) C[i].push(C[i-1][j]+C[i-1][j-1]);
  C[i].push(1);
}
var p2=[1,2,4,8,16,32,64,128,256,512,1024,
2048,4096,8192,16384,32768,65536,131072,262144,524288,1048576,
2097152,4194304,8388608,16777216,33554432,67108864,134217728,268435456,536870912,1073741824,
2147483648,4294967296];
var p=[];
function P(x,y){
  if(x==0) return 0;
  var v=0,i;
  if(!y) y=0;
  if(y==0&&p[x]) return p[x];
  else if(y<64) v+=(1+P(x,y+1))/p2[x];
  for(i=1;i<=x;i++) v+=(1+P(x-i))*(C[x][i]/p2[x]);
  if(y==0) p[x]=v;
  return v;
}
var answer=P(32).toString().split('.'); answer[1] = answer[1].slice(0,10);
console.log(answer.join('.'));
