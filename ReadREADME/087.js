function isPrime(n){
  if(n<2) return false; if(n<4) return true;
  if(n%2==0||n%3==0) return false; if(n<25) return true;
  var p=5; while(p*p<=n) if(n%p==0||n%(p+2)==0) return false; else p+=6;
  return true;
}
for(var p=[2,3],i=5,j,k,t,o={};i<Math.sqrt(50000000);i+=(i%6==1?4:2)) if(isPrime(i)) p.push(i);
for(i=0;i<p.length;i++){
  for(j=0;j<p.length&&(t=p[i]*p[i]+p[j]*p[j]*p[j])+16<50000000;j++){
    for(k=0;k<p.length&&t+p[k]*p[k]*p[k]*p[k]<50000000;k++) o[t+p[k]*p[k]*p[k]*p[k]]=1;
  }
}
j=0; for(i in o) j++; console.log(j);
