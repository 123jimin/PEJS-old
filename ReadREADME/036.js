function bb(n){
  n=~~n;
  var s='';
  while(n>1){
    s+=n%2;
    n=~~(n/2);
  }
  s+=n;
  for(var i=0,l=s.length;i*2<l;i++) if(s[i]!=s[l-i-1]) return false; return true;
}
function mp(s,k){
  s=''+s;
  for(var i=k,l=s.length;i<=l-1;i++) s+=s[l-1-i];
  return s;
}
for(var i=1,s=0,a;i<1000;i++){
  if(bb(a=mp(i,0))) s+=~~a;
  if(bb(a=mp(i,1))) s+=~~a;
}
console.log(s);
