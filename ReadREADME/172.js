var o={};
function n3(ds,l){
  if(l==0) return 1;
  var s=ds.join('')+l;
  if(o[s]) return o[s];
  o[s]=0;
  for(var i=0;i<10;i++){
    if(ds[i]<3){
      ds[i]++;
      o[s]+=n3(ds,l-1);
      ds[i]--;
    }
  }
  return o[s];
}
console.log(n3([0,0,0,0,0,0,0,0,0,0],18)/10*9);
