function modPow(a,b,p){
  if(b==1) return a%p;
  if(b%2==0){
    var c=modPow(a,b/2,p); return (c*c)%p;
  }
  return (a*modPow(a,b-1,p))%p;
}
for(var p=new Uint8Array(50000),i=1,j,s=2+3+5+7;i<50000;i++){
  if(!p[i]){
    if(i>=5){
      j=i; while(j%2==0) j/=2; while(j%5==0) j/=5;
      if(modPow(10,2*i/j,2*i+1)!=1) s+=2*i+1;
    }
    for(j=1;2*i*j+i+j<50000;j++) p[2*i*j+i+j]=1;
  }
}
console.log(s);
