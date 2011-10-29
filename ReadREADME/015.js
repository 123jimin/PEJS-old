function f(n){return n<2?1:n*f(n-1);}
console.log(f(40)/f(20)/f(20));
