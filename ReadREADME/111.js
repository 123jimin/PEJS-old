function injectStr(s,p,i){
  return s.slice(0,i)+(''+p)+s.slice(i);
}
function mulStr(s,n){
  if(n==1) return s+''; if(n==2) return s+''+s;
  return mulStr(s,~~(n/2))+''+mulStr(s,n-~~(n/2));
}
function isPrime(n){
  if(n<2) return false; if(n<4) return true;
  if(n%2==0||n%3==0) return false; if(n<25) return true;
  var p=5; while(p*p<=n) if(n%p==0||n%(p+2)==0) return false; else p+=6;
  return true;
}
var i,j,k,s=0,n,p,a=[];
for(i=1;i<10;i++)
  for(j=1;j<10;j++)
    if(isPrime(p=1*(i+'00000000'+j))) if(a.indexOf(p)==-1) a.push(p);
for(i=1;i<10;i++){
  n=0;
  for(j=0;j<100;j++)
    if(isPrime(p=1*injectStr(mulStr(i,9),j%10,~~(j/10)))&&p>1000000000){if(a.indexOf(p)==-1) a.push(p); n++;}
  if(!n) for(j=0;j<90;j++) for(k=0;k<100;k++)
    if(isPrime(p=1*injectStr(injectStr(mulStr(i,8),j%10,~~(j/10)),k%10,~~(k/10)))&&p>1000000000)
      if(a.indexOf(p)==-1) a.push(p);
}
for(i in a) s+=a[i]; console.log(s);
