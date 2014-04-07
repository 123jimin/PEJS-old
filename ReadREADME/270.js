var o={},M=1e8;
function modProd(a,b){
  if(b==0) return 0;
  if(b==1) return a%M;
  return (modProd(a,(b-b%10)/10)*10+(b%10)*a)%M;
}
function C(a){
  if(a.length==3)
    if(a[0]+a[1]==2||a[0]+a[2]==2||a[1]+a[2]==2) return 1;
  var i=1,j,v=0,k=a.join(' '),x=[1],xi=2,y=a.slice(1);
  if(o[k]) return o[k];
  if(a[0]==1){
    i++; x[1]=a[1]; y.shift();
	if(a[1]==1) v=C(a.slice(1));
	else{a[1]--;v=C(a);a[1]++;}
  }else x[1]=a[0]-1;
  for(y.push(1);i<a.length-1;i++,xi++){
    for(j=1;j<=a[i];j++){
	  x[xi]=j; y[0]=a[i]-j;
	  if(i==a.length-2&&j==a[i]) continue;
	  if(y[0]==0) y.shift();
	  v=(v+modProd(C(x),C(y)))%M;
	}
  }
  if(a[i]!=1) x[xi]=a[i]-1;
  return o[k]=(v+C(x))%M;
}
console.log(C([30,30,30,30]));
