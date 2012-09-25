for(var u=new Uint8Array(1e5),i=3,j;i*i<1e5;i+=2) if(!u[i]) for(j=i;i*j<1e5;j+=2) u[i*j]=1;
function asdf(x){if(x<10) return (10+x); return asdf(x%10)*asdf(~~(x/10));}
for(i=1001;i<=9997;i+=2)
  if(i==1487||u[i]) continue;
  else for(j=i+4;2*j-i<9999;j+=2)
    if(u[j]||u[2*j-i]) continue;
    else if(asdf(i)==asdf(j)&&asdf(j)==asdf(2*j-i)) console.log(i+''+j+''+(2*j-i));
