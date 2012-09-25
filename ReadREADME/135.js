function numWay3(n){
  for(var c=0,i=1;i*i<n;i+=2)
    if(n%i==0&&(i+n/i)%4==0)
      c+=(3*i*i>n)?2:1;
  if(i*i==n&&i%2==0) c++;
  return c;
}
function numWay0(n){
  for(var c=0,i=2;i*i<n;i+=2)
    if(n%i==0&&(i+n/i)%4==0)
      c+=(3*i*i>n)?2:1;
  if(i*i==n&&i%2==0) c++;
  return c;
}
for(var x=0,n=3;n<1e6;n+=4){
  if(numWay3(n)==10) x++;
  if(numWay0(n+1)==10) x++;
}
console.log(x);
