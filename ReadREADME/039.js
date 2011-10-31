function iq(n){
  var i=~~Math.sqrt(n);
  return i*i==n;
}
for(var a=3,b,d=[],e;3*a<=1000;a++)
  for(b=a+1;a+b*2<1000;b++)
    if(iq(a*a+b*b)){
      e=a+b+Math.sqrt(a*a+b*b);
      d[e]=d[e]?d[e]+1:1;
    }
for(b=a=0;a<=1000;a++){
  if(d[a]&&b<d[a]){b=d[a];c=a;}
}
console.log(c);
