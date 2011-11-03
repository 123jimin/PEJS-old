function sumDivs(n){
  var s=0,i=2;
  while(i*i<=n){
    if(n%i==0) if(i*i!=n) s+=i+n/i; else s+=i;
    i++;
  }
  return s+1;
}
for(var i=2,s=0,c=1,h,k,x;i<1000000;i++){
  k=i;h=[];do{h.push(k);k=sumDivs(k);}while(i<=k&&k<1000000&&h.indexOf(k)==-1);
  if(i<=k&&k<1000000&&c<=h.length){
    if(c<h.length-h.indexOf(k)){
      c=h.length-h.indexOf(x=k);
    }
  }
}
console.log(x);
