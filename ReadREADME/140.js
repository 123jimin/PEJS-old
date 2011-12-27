for(var ix=[0,0,-3,-3,-4,-4,2,2],iy=[1,-1,2,-2,5,-5,7,-7],tx,ty,a=[],i=0,j;i<30;i++)
  for(j=0;j<8;j++){
    if(ix[j]>0&&a.indexOf(ix[j])==-1) a.push(ix[j]);
    tx=-9*ix[j]-4*iy[j]-14,ty=-20*ix[j]-9*iy[j]-28,ix[j]=tx,iy[j]=ty;
  }
a.sort(function(x,y){return x-y;}).slice(0,30);
for(i=j=0;i<30;i++) j+=a[i]; console.log(j);
