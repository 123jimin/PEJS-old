function G(x,y){return x==0||y==0?x+y:x==1||y==1?1:G(y,x%y);}
function numDivisors(n){
  if(n<4) return 2;
  var a={},p=5,x=1,i;
  if(n%2==0){a[2]=1;while(n%2==0){a[2]++;n/=2;}}
  if(n%3==0){a[3]=1;while(n%3==0){a[3]++;n/=3;}}
  while(p<=n){
    if(n%p==0){a[p]=1;while(n%p==0){n/=p;a[p]++;}}
    p+=(p%6==1?4:2);
  }
  for(i in a) x*=a[i];
  return x;
}
for(var s=0,i,i2,j,j5,n=1,n10;n<=9;n++) for(n10=Math.pow(10,n),i=0,i2=1;i<=n*2;i++,i2*=2)
  for(j=0,j5=1;j<=n*2&&i2*j5<=n10;j++,j5*=5) s+=numDivisors(G(n10+i2*j5,n10+n10*n10/i2/j5));
console.log(s);
