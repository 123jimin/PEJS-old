function numWay(n){
  if(n<=0) return 0;
  var i=0;
  if(n<=20) i++;
  if(n%2==0&&n/2<=20) i++;
  if(n%3==0&&n/3<=20) i++;
  if(n==25) i++; if(n==50) i++;
  return i;
}
for(var a=[50],b=[1],i=20,s=0;i;a.unshift(i--*2));
function numPairs(n){
  if(b[n]) return b[n];
  b[n]=numWay(n);
  for(var i=0;i*2<n;i++) b[n]+=numWay(i)*numWay(n-i);
  if(i*2==n){
    if(numWay(i)==1) b[n]++;
    if(numWay(i)==2) b[n]+=3;
    if(numWay(i)==3) b[n]+=6;
  }
  return b[n];
}
function numCheck(n){
  for(var c=0,i=0;a[i]<=n;i++) c+=numPairs(n-a[i]);
  return c;
}
for(i=0;i<100;i++) s+=numCheck(i); console.log(s);
