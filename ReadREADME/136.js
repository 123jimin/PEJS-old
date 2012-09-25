function numWay3(n){
  for(var c=0,i=1;i*i<n;i+=2)
    if(n%i==0){
      if(3*i*i>n) return 0;
      c++;
      if(c>1) return 0;
    }
  if(i*i==n&&i%2==0) return c==0;
  return c==1;
}
function numWay0(n){
  for(var c=0,i=2;i*i<n;i+=2)
    if(n%i==0&&(i+n/i)%4==0){
      if(3*i*i>n) return 0;
      c++;
      if(c>1) return 0;
    }
  if(i*i==n&&i%2==0) return c==0;
  return c==1;
}
for(var x=0,n=3;n<5e7;n+=4){
  x+=(numWay3(n)+numWay0(n+1));
}
console.log(x);
