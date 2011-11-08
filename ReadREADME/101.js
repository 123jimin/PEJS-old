function expect(q,k){
  if(q.length==1) return q[0];
  if(q.length<k) return 0;
  for(var i=0,j,a=q.join(',').split(','),b=[];i<k-1||i==0;i++){
    b[i]=[];
    for(j=0;j<a.length-1;j++)
      b[i].push(a[j+1]-a[j]);
    a=b[i];
  }
  var bk = b[b.length-1][0];
  if(k==1&&bk!=0) return 0;
  for(i=1;i<b[b.length-1].length;i++)
    if(b[b.length-1][i]!=bk) return 0;
  if(k==1) return q[0];
  for(i=k-3;i>=0;i--)
    b[i].push(b[i+1][b[i+1].length-1]+b[i][b[i].length-1]);
  return b[0].pop()+q[q.length-1];
}
function u(n){
  return Math.pow(n,10)-(n-1)*(1+n*n+n*n*n*n+n*n*n*n*n*n+n*n*n*n*n*n*n*n);
}
for(var i=1,a=[u(0)],r,pr,s=0;i<11;){
  if(r=expect(a,i)){
    pr=r;
    a.push(u(a.length+1));
  }else{
    s+=pr;
    i++;
  }
}
console.log(s);
