var a=[],n=0,i=0;
function nn(x){
  if(x<2) return 1;
  if(a[x]) return a[x];
  return a[x]=nn(x-1)+nn(x-2);
}
for(;i<30;i++) n+=nn(i); console.log(n+1);
