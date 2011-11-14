for(var a=[[1]],i=1,j;i<=15;i++){
  a.push([a[i-1][0]/(i+1)]);
  for(j=1;j<i;j++) a[i].push(a[i-1][j-1]*i/(i+1)+a[i-1][j]/(i+1));
  a[i].push(a[i-1][i-1]*i/(i+1));
}
for(i=j=0;i<8;i++) j+=a[15][i]; console.log(~~(1/j));
