function ds(s){var n='',f=0,i,sd;for(i=s.length-1;i>=0;i--){sd=2*s[i]+f;
if(sd>=10){sd-=10;f=1;}else f=0;n=sd+n;}return f?'1'+n:n;}
var s='1',i,dt=0;for(i=0;i<1000;i++)s=ds(s);for(i=0;i<s.length;i++)dt+=~~s[i];
console.log(dt);
