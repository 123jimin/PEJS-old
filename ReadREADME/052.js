// console.log((1/7).toString().match(/\.(......)/)[1]);
var x=10,s,h=function(x){return (x+'').split('').sort().join('');};
for(;s=h(x);x++) if(s==h(2*x)&&s==h(3*x)&&s==h(4*x)&&s==h(5*x)&&s==h(6*x)) break;
console.log(x);
