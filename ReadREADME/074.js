function d(n){
  n=''+n; for(var s=0,i=0;i<n.length;i++) s+=f[~~n[i]]; return s;
}
for(var f=[1,1,2,6,24,120,720,720*7,720*56,720*56*9],a,b=new Uint8Array(f[9]*7),i=1,k,l=0;i<1e6;i++){
  if(!b[k=d(i)]){ 
    for(a=[i];a.indexOf(k)==-1;k=d(k)) a.push(k);
    b[d(i)]=a.length;
  }
  if(b[d(i)]==60) l++;
}
console.log(l);
