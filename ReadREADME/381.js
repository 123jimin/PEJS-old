function m(a,b,p){
  if(a*b<1e15) return a*b%p;
  if(b%2==0) return 2*m(a,b/2,p)%p;
  return (m(a,b-1,p)+a)%p;
}
for(var p,k,x=9,l=5e7,s=new Uint8Array(l),i=1,j;i<l;i++){
  if(!s[i]){
    p=2*i+1,k=~~(p/12);
    for(j=2*i*(i+1);j<l;j+=p) s[j]=1;
    if(i>5){
      switch(p%12){
        case 1: x+=m(k,6*k+5,p); break;
        case 5: x+=m(2*k+1,3*k-1,p); break;
        case 7: x+=(m(k,6*k-1,p)-3)%p; break;
        case 11: x+=m(k+1,6*k+1,p); break;
      }
    }
  }
}
console.log(x);
