function gcd(x,y){
  if(x==1||y==1) return 1;
  if(x==0||y==0) return x+y;
  if(x<y) return gcd(y,x);
  if(x%y==0) return y;
  return gcd(y,x%y);
}
function only(s2){
  var ml=~~Math.sqrt(s2),m,sm,k,x=0;
  for(m=2;m<=ml;m++){
    if(s2%m==0){
      sm=s2/m;
      while(sm%2==0) sm/=2;
      k=m+1+m%2;
      while(k<2*m&&k<=sm){
        if(sm%k==0&&gcd(k,m)==1) if(++x>1) return false;
        k+=2;
      }
    }
  }
  return x==1;
}
for(var L=6,c=0;L<=1500000/2;L++) if(only(L)) c++;
console.log(c);
