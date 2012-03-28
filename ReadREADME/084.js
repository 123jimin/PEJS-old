function isCC(n){return n==2||n==17||n==33;} function isCH(n){return n==7||n==22||n==36;}
function nextR(n){if(n<5) return 5; if(n<15) return 15; if(n<25) return 25; if(n<35) return 35; return 5;}
function nextU(n){if(n<12) return 12; if(n<28) return 28; return 12;}
function multiply(a,b){
  for(var c=[],i=0,j,k;i<40;i++) for(c.push([]),j=0;j<40;j++)
    for(c[i][j]=k=0;k<40;k++) c[i][j]+=a[i][k]*b[k][j];
  return c;
}
for(var numFaces=4,a=[],b=[],c=[],i=0,j,d1,d2,gt,pb,x=0,y=0,z=0;i<40;i++){
  b.push(1/40); for(a.push([]),j=0;j<40;j++) a[i][j]=0;
  for(d1=1;d1<=numFaces;d1++) for(d2=1;d2<=numFaces;d2++){
    pb=1/numFaces/numFaces;
    if(d1==d2&&d2==numFaces){
      a[i][10]+=pb/Math.pow(numFaces,4);
      pb*=(1-1/Math.pow(numFaces,4));
    }
    gt=(i+d1+d2)%40;
    if(gt==30) a[i][10]+=pb,pb=0;
    else if(isCC(gt)){
      a[i][0]+=pb/16;
      a[i][10]+=pb/16;
      pb*=7/8;
    }else if(isCH(gt)){
      a[i][0]+=pb/16; a[i][10]+=pb/16; a[i][11]+=pb/16;
      a[i][24]+=pb/16; a[i][39]+=pb/16; a[i][5]+=pb/16;
      a[i][nextR(gt)]+=pb/8; a[i][nextU(gt)]+=pb/16;
      a[i][(gt+37)%40]+=pb/16;
      pb*=3/8;
    }
    a[i][gt]+=pb;
  }
}
for(i=0;i<10;i++) a=multiply(a,a);
for(i=0;i<40;i++){
  for(pb=j=0;j<40;j++) pb+=b[j]*a[j][i];
  c.push(pb);
  if(c[x]<pb) x=i;
  else if(c[y]<pb) y=i;
  else if(c[z]<pb) z=i;
}
console.log((x<10?'0'+x:''+x)+(y<10?'0'+y:''+y)+(z<10?'0'+z:''+z));
