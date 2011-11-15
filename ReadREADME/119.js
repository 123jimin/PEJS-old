for(var a=[],i=2,j,k,l,s;i<=10000;i++) for(j=2;Math.pow(i,j)<Math.pow(2,52);j++){
  s=''+Math.pow(i,j); for(k=l=0;k<s.length;k++) l+=~~s[k]; if(l==i) a.push(Math.pow(i,j));
}
a.sort(function(a,b){return a-b;}); console.log(a[29]);
