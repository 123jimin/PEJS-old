var u=new Uint16Array(1e6);
function col(n){
  for(var i=0,m=n;n!=1;){
    if(n<1e6&&u[n]) return u[m]=u[n]+i;
    n++; while(n%2==0) i+=2,n=(n/2)*3;
    n--; while(n%2==0) i++,n/=2;
  }
  return u[m]=i;
}
for(var i=1,m=0;i<1e6;i+=2) if(col(i)>u[m]) m=i;
console.log(m);
