function exactPow(n){
  n=Math.sqrt(n); return n==~~n;
}
function rev(s){return s.split('').reverse().join('');}
function genPalin(x,y){
  var s=x.toString();
  return y?s+rev(s):s+rev(s.slice(0,-1));
}
function numWays(n){
  for(var i=1,j=0;i*i*i<n;i++) if(exactPow(n-i*i*i)) j++;
  return j;
}
for(var i=1,j=0,k,b=[];j<6;i++) for(k=0;k<2;k++) if(numWays(~~genPalin(i,k))==4){
  j++; b.push(~~genPalin(i,k));
}
b.sort(function(a,b){return a-b;});
for(i=0,j=0;i<5;i++) j+=b[i]; console.log(j);
