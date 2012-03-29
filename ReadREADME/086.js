function sqQ(n){return Math.sqrt(n)==~~Math.sqrt(n);}
for(var M=2000,s=0,i=1,j,k;i<=M;i++){
  for(j=2;j<=2*i;j++){
    k=~~(j<=i?j/2:1+i-j/2); if(sqQ(i*i+j*j)) s+=k;
  }
  if(s>=1e6) break;
}
console.log(i);
