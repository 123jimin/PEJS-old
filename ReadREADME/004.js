function isP(s){return s==s.toString().split('').reverse().join('')}
var l=0,i,j;
for(i=999;i>=900;i--)for(j=999;j>=900;j--)if(isP(i*j)&&i*j>l)l=i*j;console.log(l);
