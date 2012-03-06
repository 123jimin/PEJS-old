//Alexandre Marin's answer in the problem thread.
for(var s=0,i=0,c=new Uint16Array(210),p=new Uint16Array(200);i<=200;i++) c[i]=1024;
(function bt(q,d){if(q>200||d>c[q]) return; p[c[q]=d]=q; for(var i=d+1;i--;bt(q+p[i],d+1));}(1,0))
for(i=1;i<=200;s+=c[i++]); console.log(s);
/*

// ~4min (VERY bad)
function exists(a,n){
  if(a[0]==n||a[1]==n||a[2]==n||a[3]==n) return true;
  for(var l=0,m,h=a.length;h>l+1;){
    m=~~((l+h)/2);
    if(a[m]==n) return true;
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
        if(z<c) b=[],c=z;
        b.push(union(a[j-1][x],a[i-j-1][y]).concat(i));
      }
    }
  }
  s+=c; a.push(b);
}
console.log(s);

*/
