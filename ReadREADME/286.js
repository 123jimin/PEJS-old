function calc20(q){
  for(var a=[[1]],i=1,j;i<50;i++){
    for(a[i]=[a[i-1][0]*i/q],j=1;j<i;j++){
      a[i].push(a[i-1][j-1]*(1-i/q)+a[i-1][j]*i/q);
    }
    a[i].push(a[i-1][i-1]*(1-i/q));
  }
  return a[49][19]*(1-50/q)+a[49][20]*50/q;
}
for(var a=51,b=60;b-a>1e-12;){
  if(calc20((a+b)/2)<0.02) b=(a+b)/2; else a=(a+b)/2;
}
console.log(Math.round((a+b)*5e9)/1e10);
