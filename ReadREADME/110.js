function factors(n){
  var a={};
  if(n%2==0){a[2]=0;while(n%2==0){a[2]++;n/=2;}}
  if(n%3==0){a[3]=0;while(n%3==0){a[3]++;n/=3;}}
  var p=5;
  while(p<=n){
    if(n%p==0){a[p]=0;while(n%p==0){n/=p;a[p]++;}}
    p+=(p%6==1?4:2);
  }
  return a;
}
function ns(n){
  var s=1,i,o=factors(n);
  for(i in o) s*=2*o[i]+1;
  return (s+1)/2;
}
for(n=2*3*5*7*11*13*17*19*23*29*31,k=1;ns(n*k)<4000000;k++);
console.log(n*k);
