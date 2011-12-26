var a=[5,11,17,23,29,41,47],o=[],i1,i2,i3,i4,i5,i6,x=0,t=6008819575;
for(i1=0;i1<a.length;i1++) t=t/a[i1]*(a[i1]-1);
function f(p){
  if(o[p]) return o[p];
  var i=5; while(i%p) i+=3;
  return o[p]=~~((6008819576-i)/3/p);
}
for(i1=0;i1<7;i1++){
  x+=f(a[i1]);
  for(i2=i1+1;i2<7;i2++){
    x-=f(a[i1]*a[i2]);
    for(i3=i2+1;i3<7;i3++){
      x+=f(a[i1]*a[i2]*a[i3]);
      for(i4=i3+1;i4<7;i4++){
        x-=f(a[i1]*a[i2]*a[i3]*a[i4]);
        for(i5=i4+1;i5<7;i5++){
          x+=f(a[i1]*a[i2]*a[i3]*a[i4]*a[i5]);
          for(i6=i5+1;i6<7;i6++)x-=f(a[i1]*a[i2]*a[i3]*a[i4]*a[i5]*a[i6]);
        }
      }
    }
  }
}
x+=f(a[0]*a[1]*a[2]*a[3]*a[4]*a[5]*a[6]);
console.log((6008819573-2)/3-x);
