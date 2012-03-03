function isPrime(n){
  if(n<2) return false; if(n<4) return true;
  if(n%2==0||n%3==0) return false; if(n<25) return true;
  var p=5; while(p*p<=n) if(n%p==0||n%(p+2)==0) return false; else p+=6;
  return true;
}
for(var PD=[1,2],n=2;PD.length<2000;n++){
  if(isPrime(6*n-1)){
    if(isPrime(6*n+1)&&isPrime(12*n+5)) PD.push(3*n*n-3*n+2);
    if(isPrime(6*n+5)&&isPrime(12*n-7)) PD.push(3*n*n+3*n+1);
  }
}
console.log(PD[1999]);
