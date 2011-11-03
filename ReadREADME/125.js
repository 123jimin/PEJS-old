function isP(s){s+='';for(var i=0;i<~~(s.length/2);i++)
  if(s[i]!=s[s.length-1-i])return false; return true;}
for(var p=[],i=1,j,v;i<10000;i++)
  for(j=i+1,v=i*i+j*j;v<100000000;j++,v+=j*j)
    if(isP(v)&&p.indexOf(v)==-1) p.push(v);
for(j=i=0;i<p.length;i++)j+=p[i]; console.log(j);
