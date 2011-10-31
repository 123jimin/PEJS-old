function q(a1,a2,b1,b2){
  return a1*b2==a2*b1;
}
function a(i,j){
  i=''+i;j=''+j;
  return q(i,j,i[0],j[0])&&i[1]==j[1]||q(i,j,i[0],j[1])&&i[1]==j[0]||q(i,j,i[1],j[0])&&i[0]==j[1]||q(i,j,i[1],j[1])&&i[0]==j[0];
}
function GCD(a,b){
  if(b>a) return GCD(b,a);
  if(a%b==0) return b;
  return GCD(b,a%b);
}
for(var i=11,j,k=1,l=1,g;i<100;i++){
  if(i%10==0) continue;
  for(j=i+1;j<100;j++){
    if(j%10==0) continue;
    if(a(i,j)){
      k*=i;l*=j;
    }
  }
}
g=GCD(k,l);console.log(l/g);
