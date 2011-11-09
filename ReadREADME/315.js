var digitInfo = [
[1,1,1,0,1,1,1],
[0,0,1,0,0,1,0],
[1,0,1,1,1,0,1],
[1,0,1,1,0,1,1],
[0,1,1,1,0,1,0],
[1,1,0,1,0,1,1],
[1,1,0,1,1,1,1],
[1,1,1,0,0,1,0],
[1,1,1,1,1,1,1],
[1,1,1,1,0,1,1],
[0,0,0,0,0,0,0]],singleTrans=[],dobj={},i,j,k,l;
for(i=0;i<=10;i++){
  singleTrans[i]=[];
  for(j=0;j<=10;j++){
    for(k=l=0;k<7;k++)
      l+=2*digitInfo[i][k]*digitInfo[j][k];
    singleTrans[i][j]=l;
  }
}
function calcDiff(n){
  if(dobj[n]||dobj[n]===0) return dobj[n];
  if(n<10) return 0;
  n=''+n;
  for(var i=r=d=0,s;i<n.length;i++) r+=~~n[i];
  s=''+r;
  while(s.length<n.length) s='x'+s;
  for(i=0;i<n.length;i++)
    d+=singleTrans[~~n[i]][s[i]=='x'?10:~~s[i]];
  return dobj[~~n]=d+calcDiff(r);
}
function isPrime(n){
  if(n%5==0||n%7==0) return false;
  var p=11; while(p*p<=n) if(n%p==0||n%(p+2)==0) return false; else p+=6;
  return true;
}
for(var i=1e7+1,k=0;i<2e7;i+=(i%6==1?4:2)) if(isPrime(i)) k+=calcDiff(i);
console.log(k);
