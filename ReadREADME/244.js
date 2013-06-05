var p=new Array(524288),q,ni,i,h,N=100000007;
var S=[2,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0],E=[2,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1];
function hash(a){
  for(var c=0,i=0,j;i<16;i++)
    if(a[i]==2) j=i; else c=c*2+a[i];
  return c*16+j;
}
function move(a,f,t){
  for(var b=[],i=0;i<16;i++)
    if(i==f) b[i]=a[t]; else if(i==t) b[i]=2; else b[i]=a[i];
  return b;
}
function next(aa){
  for(var a=aa[1],s=aa[0],x,y,r=[],i=0;a[i]<2;i++); x=i%4,y=~~(i/4);
  if(x) r.push([s+1,'R',move(a,i,i-1)]); if(x<3) r.push([s+1,'L',move(a,i,i+1)]);
  if(y) r.push([s+1,'D',move(a,i,i-4)]); if(y<3) r.push([s+1,'U',move(a,i,i+4)]);
  return r;
}
function prev(a,c){
  for(var i=0;a[i]<2;i++);
  switch(c){
    case 'L': return move(a,i,i-1);
    case 'R': return move(a,i,i+1);
    case 'U': return move(a,i,i-4);
    case 'D': return move(a,i,i+4);
  }
}
p[hash(S)]=[0,'']; q=[[0,S]];
do{
  ni=q.shift();
  ni=next(ni);
  for(i=0;i<ni.length;i++){
    h=hash(ni[i][2]);
    if(p[h]){
      if(p[h][0]==ni[i][0]&&p[h][1].indexOf(ni[i][1])==-1) p[h][1]+=ni[i][1];
    }else{
      p[h]=[ni[i][0],ni[i][1]]; q.push([ni[i][0],ni[i][2]]);
    }
  }
}while(q.length);

// Incomplete answer, but it works anyway!
for(i=1,ni=0;p[hash(E)][1].length==1;E=prev(E,p[hash(E)][1])){
  ni+=i*p[hash(E)][1].charCodeAt(0); i=243*i%N; ni%=N;
}
console.log(ni);
