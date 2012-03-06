// 222262ms (Very bad)
function exists(a,n){
  if(a.length<5) return a.indexOf(n)!=-1;
  for(var l=0,m,h=a.length;h>l+1;){
    m=~~((l+h)/2); if(a[l]==n||a[m]==n) return true;
    if(a[m]>n) h=m; else l=m;
  }
  return a[l]==n||a[l+1]==n;
}
function union(a,b){
  for(var c=[],i=0;i<a.length;i++) c.push(a[i]);
  for(i=0;i<b.length;i++) if(!exists(c,b[i])) c.push(b[i]);
  return c;
}
for(var a=[[[1]],[[1,2]]],b,i=3,j,x,y,z,c,m,n,s=1;i<=200;i++){
  for(b=[],c=99999,m=0,j=1;j*2<=i;j++){
    for(x=0;x<a[j-1].length;x++) for(y=0;y<a[i-j-1].length;y++){
      if((z=union(a[j-1][x],a[i-j-1][y]).length)<=c){
        if(z<c) b=[];
        c=z; b.push([j,x,y]);
      }
    }
  }
  s+=c;
  a.push(b.map(function(v){return union(a[v[0]-1][v[1]],a[i-v[0]-1][v[2]]).concat(i)}));
}
console.log(s);
