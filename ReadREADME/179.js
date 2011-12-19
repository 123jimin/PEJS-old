// Solution from Robert_Gerbicz
var A=new Uint32Array(10000001),isPrime=new Uint8Array(3163),d=2,n,e,p,k,sum=0;
for(n=2;n<3163;n++) isPrime[n]=1;
for(;d<3163;d++) if(isPrime[d]){
  for(n=d*d;n<3163;n+=d) isPrime[n]=0;
  for(n=d*d;n<=10000000;n+=d) A[n]=d;
}
A[1]=1;
for(n=2;n<=10000000;n++){
  if(A[n]==0) A[n]=2; else{
    p=A[n],k=n/p,e=2;
    while(k%p==0){k/=p;e++;}
    A[n]=A[k]*e;
  }
}
for(n=2;n<10000000;n++) if(A[n]==A[n+1]) sum++;
console.log(sum);
