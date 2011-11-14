//Not the 'complete answer', but prints the answer anyway.
function isPrime(n){
  if(n<2) return false; if(n<4) return true;
  if(n%2==0||n%3==0) return false; if(n<25) return true;
  var p=5; while(p*p<=n) if(n%p==0||n%(p+2)==0) return false; else p+=6;
  return true;
}
for(i=1;i<1000;i+=2){
  for(j=k=101010+i%10+100*(~~(i/10)%10)+10000*~~(i/100),p=0;p<2&&j<1000000;j+=101010)
    if(!isPrime(j)) p++;
  if(p<=1){console.log(k); break;} 
}
