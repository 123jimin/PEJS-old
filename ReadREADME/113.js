var ia=[],da=[],i,j,s=0;
function increaseCount(l,f){
  if(l==1) return 1;
  if(ia[l*10+f]) return ia[l*10+f];
  ia[l*10+f]=0;
  for(var i=f;i<10;i++) ia[l*10+f]+=increaseCount(l-1,i);
  return ia[l*10+f];
}
function decreaseCount(l,f){
  if(l==1) return 1;
  if(da[l*10+f]) return da[l*10+f];
  da[l*10+f]=0;
  for(var i=f;i>=0;i--) da[l*10+f]+=decreaseCount(l-1,i);
  return da[l*10+f];
}
for(i=1;i<=100;i++) for(j=1;j<10;j++) s+=increaseCount(i,j)+decreaseCount(i,j)-1;
