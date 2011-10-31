for(var C=[[1]],i=1,j,k,m=0;i<=100;i++){
  C[i]=[1];
  for(j=1;j<i;j++){
    k=C[i-1][j]+C[i-1][j-1];
    if(k>=1000000){
      k=1000000; m++;
    }
    C[i].push(k);
  }
  C[i].push(1);
}
console.log(m);
