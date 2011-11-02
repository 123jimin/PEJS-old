for(var N=2000000*4,i=1,j,u,cA,np,cd,nd=N;(j=i*(i+1))<Math.sqrt(N);i++){
  u=~~Math.sqrt(N/j);do{
    cA=j*u*(u+1); cd=Math.abs(N-cA); if(cd<nd){nd=cd;np=i*u;} u++;
  }while(cA-nd<=N);
}
console.log(np);
