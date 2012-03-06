function modProd(a,b,n){
  if(b==0) return 0;
  if(b==1) return a%n;
  return (modProd(a,(b-b%10)/10,n)*10+(b%10)*a)%n;
}
for(var s,r=Math.floor(Math.pow(7,21)/Math.pow(21,7)),t=0,m=1,n=1,i=0;i<21;i++) m=(m*7)%Math.pow(21,7),n=(n*7)%1e9;
s=modProd(n+1,n+4*(Math.pow(21,7)-Math.pow(12,7)),1e9);
t=modProd(r,1+m,1e9)+modProd(modProd(r/2,r-1,1e9),Math.pow(21,7),1e9);
s+=modProd(3*(Math.pow(21,7)-Math.pow(12,7)),t,1e9)+1e9;
t=modProd(m,(m+1)/2,1e9)+modProd(r,modProd((Math.pow(21,7)-1)/2,Math.pow(21,7),1e9),1e9);
s=(s-t%1e9)%1e9; console.log(s);
