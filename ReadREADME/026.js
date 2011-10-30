/* Algorithm from http://tafakuri.net/?p=69 */
function cl(n){
  var x=0,y;
  while(n%2==0)n/=2;while(n%5==0)n/=5;
  if(n>1){
    y=10%n;x=1;while(y!=1){y=y*10%n;x++;}
  }
  return x;
}
var m=0,n,i=7,j=0;
while(i<1000){if((n=cl(i))>m){m=n;j=i;}i++;}
console.log(j);
