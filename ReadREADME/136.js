for(var N=5e7,N2=N/2,N4=N2/2,u=new Uint8Array(N2),c=0,i=1,j;i*(i+1)<N4;i++) if(!u[i]){
  for(j=2*i*(i+1);j<N2;j+=2*i+1) u[j]=1;
}
for(i=0;i<N2;i++) if(!u[i]){
  if(2*i+1<N4){
    if(2*i+1<N4/4) c+=2;
    else c++;
  }
  c+=i%2;
}
console.log(c);
