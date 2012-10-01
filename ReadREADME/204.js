for(var l=1e9,p=[2,3,5,7],q=[],i=11,j=0;i<100;i+=2)
  if(i%3&&i%5&&i%7) p.push(i);
for(i=p.length;i-->0;q.push(0));
function x(){
  for(var i=0,n=1;i<p.length;i++) n*=Math.pow(p[i],q[i]);
  return n>l;
}
for(;;){
  for(i=0;i<p.length;i++){
    q[i]++;
    if(x()) q[i]=0;
    else break;
  }
  j++;
  if(i==p.length) break;
}
console.log(j);
