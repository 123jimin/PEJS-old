function numEvenDivs(n){
  if(n<4) return 2;
  var a={},p=5,x,i;
  if(n%2==0){a[2]=1;while(n%2==0){a[2]++;n/=2;}}
  if(n%3==0){a[3]=1;while(n%3==0){a[3]++;n/=3;}}
  while(p<=n){
    if(n%p==0){a[p]=1;while(n%p==0){n/=p;a[p]++;}}
    p+=(p%6==1?4:2);
  }
  x=a[2]-2; if(x<1) return 0;
  for(i in a) if(i!=2) x*=a[i];
  return x;
}
function numHoles(n){
  var d=numEvenDivs(n);
  return d?(d-d%2)/2:0;
}
for(var n=1,i=12;i<=1000000;i+=4) n+=numHoles(i);
console.log(n);
