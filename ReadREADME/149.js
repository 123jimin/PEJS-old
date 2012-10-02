var l=2000,r=0,t=0,s=0,i=0,j=0,a=new Int32Array(l*l);
// Generating, Horizontal
for(k=1;k<=55;k++)
  a[k-1]=(100003-200003*k+300007*k*k*k)%1e6-5e5;
for(k=0;k<l*l;k++){
  if(k>=55) a[k]=(1e6+a[k-24]+a[k-55])%1e6-5e5;
  if(k%l==0) t=0;
  if((t+=a[k])>s) s=t; if(t<0) t=0;
}
t=0;
// Vertical
for(i=0;i<l;i++){
  for(j=t=0;j<l;j++){
    if((t+=a[j*l+i])>s) s=t; if(t<0) t=0;
  }
}
// Diagonals
for(i=0;i<2*l-1;i++){
  r=t=0;
  for(j=(i>=l?i-l+1:0);j<=i&&j<l;j++){
    if((t+=a[(i-j)*l+j])>s) s=t; if(t<0) t=0;
    if((r+=a[(l+j-i-1)*l+j])>s) s=r; if(r<0) r=0;
  }
}
console.log(s);
