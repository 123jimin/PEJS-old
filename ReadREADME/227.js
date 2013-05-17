for(var n=0,x,a=new Float64Array(100),i=a[50]=1,j;i<=100000;i++){
  b=new Float64Array(100);
  for(j=1;j<100;j++){
    b[(j+2)%100]+=x=a[j]/36;
    b[(j+98)%100]+=x;
    b[(j+1)%100]+=x=a[j]*2/9;
    b[(j+99)%100]+=x;
    b[j]+=a[j]/2;
  }
  n+=i*b[0]; a=b;
}
console.log(n.toPrecision(10));
