for(var a=new Uint16Array(1e7),i=2,j,k=0;i<1e7;i++){
  for(j=i;j<1e7;j+=i) a[j]++;
  if(a[i]==a[i-1]) k++;
}
console.log(k);
