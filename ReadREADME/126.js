function C(x){
  for(var m=0,n=1,a,b,c,y;4*(n-2)*(n-1)<x;n++){
    y=x-4*(n-2)*(n-1);
    for(a=1;4*(a+1)+4*(a+2)*(n-1)<=y;a++)
      for(b=a;2*a*b+2*(a+b)+4*(a+b+1)*(n-1)<=y;b++){
        c=(y-2*a*b-4*(a+b)*(n-1))/(2*(a+b)+4*(n-1));
        if(c>=b&&c==~~c) m++;
      }
  }
  return m;
}
for(var n=154;C(n)!=1000;n+=2); console.log(n);
