function factors(n){
  var a={};
  if(n<4){
    a[n]=1; return a;
  }
  if(n%2==0){a[2]=0;while(n%2==0){a[2]++;n/=2;}}
  if(n%3==0){a[3]=0;while(n%3==0){a[3]++;n/=3;}}
  var p=5;
  while(p<=n){
    if(n%p==0){a[p]=0;while(n%p==0){n/=p;a[p]++;}}
    p+=(p%6==1?4:2);
  }
  return a;
}
for(var C=[[1]],i=1,j,k,l,o,a=[1],f;i<51;i++){
  C[i]=[1];
  for(j=1;j<i;j++){
    C[i].push(k=C[i-1][j]+C[i-1][j-1]);
    f=true;
    for(l in o=factors(k)) if(o[l]>=2) f=false;
    if(f&&a.indexOf(k)==-1) a.push(k);
  }
  C[i].push(1);
}
j=0;
for(i=0;i<a.length;i++) j+=a[i]; console.log(j);
