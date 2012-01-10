function f(x){
  return Math.floor(Math.pow(2,30.403243784-x*x))*1e-9;
}
for(var u=-1;u!=f(f(u));u=f(f(u))); console.log(u+f(u));
