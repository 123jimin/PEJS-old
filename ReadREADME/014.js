function cl(n){
  var i=0;
  while(n!=1){
    i++;
    n=n%2?3*n+1:n/2;
  }
  return i;
}
var n,nl=0,i,il;for(i=3;i<1000000;i+=2){if((il=cl(i))>nl){nl=il;n=i;}}console.log(n);
