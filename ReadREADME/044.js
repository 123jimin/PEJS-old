//The public forum (http://jp.t50.us/r/pe/44/0) says that next solution is HUGE.
//So this yields the correct answer.
function isP(n){
  var i=~~Math.sqrt((n*=2)/3);
  while(i*(3*i-1)<n) i++;
  return i*(3*i-1)==n;
}
for(var i=1,j,f=true;f;i++){
  for(var j=1;j<i;j++){
    if(isP(i*(3*i-1)/2-j*(3*j-1)/2)&&isP(i*(3*i-1)/2+j*(3*j-1)/2)){
      console.log(i*(3*i-1)/2-j*(3*j-1)/2);
      f=false; break;
    }
  }
}
