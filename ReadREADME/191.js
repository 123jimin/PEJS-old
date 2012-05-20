var a=[];
function numPrize(r,d){
  if(d<0) return 0; if(d==0) return 1;
  if(d==1) return 2+r;
  if(d==2) return 4+r*4;
  var k=d*2+r; if(a[k]) return a[k];
  switch(r){
    case 0:
      return a[k]=numPrize(0,d-1)+numPrize(0,d-2)+numPrize(0,d-3);
    case 1:
      return a[k]=numPrize(0,d-1)+numPrize(1,d-1)+numPrize(0,d-2)+numPrize(1,d-2)+numPrize(0,d-3)+numPrize(1,d-3);
  }
}
console.log(numPrize(1,30));
