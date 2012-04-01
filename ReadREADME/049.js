function primeQ(n){if(n%2==0||n%3==0)return false;for(x=5;x<=Math.sqrt(n);x+=6)if(n%x==0||n%(x+2)==0) return false;return true;}
function asdf(x){if(x<10)return (10+x);return asdf(x%10)*asdf(~~(x/10))}
for(var i=1001,j;i<=9997;i+=2){if(i==1487||!primeQ(i))continue;for(j=i+4;2*j-i<9999;j+=2){
if(!primeQ(j)||!primeQ(2*j-i))continue;if(asdf(i)==asdf(j)&&asdf(j)==asdf(2*j-i))console.log(i+''+j+''+(2*j-i))}}