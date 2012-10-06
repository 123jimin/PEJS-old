var rs=[],tl=11;
function posi(a,n){
  for(var t=a.slice(n),r,i=1;i<n-1;i++){
    r=a.slice(i,n).concat(a.slice(0,i).reverse(),t);
    if(n==tl) rs.push(r); else posi(r,n+1);
  }
}
posi([10,11,9,8,7,6,5,4,3,2,1],3)
console.log(rs.sort(function(x,y){
  for(var i=tl;i-->0;) if(x[i]!=y[i]) return x[i]-y[i];
  return 0;
})[2010].reverse().map(function(s){return String.fromCharCode(64+s);}).join(''));
