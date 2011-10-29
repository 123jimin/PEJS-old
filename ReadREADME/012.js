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
var i=5;for(;numDivisors(i*(i+1)/2)<=500;i++);console.log(i*(i+1)/2);
