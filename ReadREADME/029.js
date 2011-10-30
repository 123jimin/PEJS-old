var x={},n=0,a,b,abl;
for(a=2;a<=100;a++)for(b=2;b<=100;b++){
  if(!x[abl=Math.round(b*Math.log(a)*10000000000)]){x[abl]=true;n++;}
}
console.log(n);
