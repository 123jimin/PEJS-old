var s=1e6,p=new Uint32Array(s),i=2,j;
for(p[0]=p[1]=1;i<s;i++){
  p[i]=p[i-1]+p[i-2];
  for(j=1;;j++){
    if(j*(6*j-1)>i) break;  p[i]+=1e6-p[i-j*(6*j-1)];
    if(j*(6*j+1)>i) break; p[i]+=1e6-p[i-j*(6*j+1)];
    if((2*j+1)*(3*j+1)>i) break; p[i]+=p[i-(2*j+1)*(3*j+1)];
    if((2*j+1)*(3*j+2)>i) break; p[i]+=p[i-(2*j+1)*(3*j+2)];
  }
  if((p[i]%=1e6)==0) break;
}
console.log(i);
