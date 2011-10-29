function d(n){
  var s=0,i=2;
  while(i*i<=n){
    if(n%i==0) s+=i+n/i;
    i++;
  }
  return s+1;
}
var s=0,i=2;
while(i++<10000) if(d(d(i))==i&&d(i)!=i)s+=i;
console.log(s);
