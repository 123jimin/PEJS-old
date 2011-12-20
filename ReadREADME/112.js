function isIncreasing(s){
  if(s.length==1) return true;
  if(~~s[0]>~~s[1]) return false;
  return isIncreasing(s.slice(1));
}
function isDecreasing(s){
  if(s.length==1) return true;
  if(~~s[0]<~~s[1]) return false;
  return isDecreasing(s.slice(1));
}
function isBouncy(n){
  return !(isIncreasing(''+n)||isDecreasing(''+n));
}
for(var b=0,i=100;b*100<99*i;i++) if(isBouncy(i+1)) b++;
console.log(i);
