function f(n){
  var x=~~(999/n);
  return n*x*(x+1)/2;
}
console.log(f(3)+f(5)-f(15));
