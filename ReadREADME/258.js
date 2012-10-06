function am(x,y,m,s){
  for(var a=[],i=0,j;i<s;i++){
    for(a[i]=j=0;j<s;j++){
      if(j<i) a[i]=(a[i]+x[(j+s-1)%s]*y[i-j])%m;
      else a[i]=(a[i]+x[(j+s-1)%s]*y[s+j-i])%m;
    }
  }
  for(i=0;i<s;i++){
    for(a[s+i]=j=0;j<s;j++){
      if(j>0&&j<=i) a[s+i]=(a[s+i]+x[s+j]*y[1+s+i-j])%m;
      else a[s+i]=(a[s+i]+x[s+j]*y[(s-1-i+j)%s])%m;
    }
  }
  return a;
}
function arrPow(a,p,m,s){
  if(p==1) return a;
  if(p%2==1) return am(arrPow(a,p-1,m,s),a,m,s);
  var b=arrPow(a,p/2,m,s);
  return am(b,b,m,s);
}
for(var s=0,a=[],i=0;i<4000;i++) a[i]=i==0||i==2000||i==3999?1:0;
var x=arrPow(a,1e18,20092010,2000);
for(i=0;i<2000;s+=x[i++]); console.log(s%20092010);
