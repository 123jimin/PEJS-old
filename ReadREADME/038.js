function isO(s){
  for(var a=[0,1,1,1,1,1,1,1,1,1],i=0;i<9;i++) a[~~s[i]]--;
  for(i=0;i<10;i++) if(a[i]!=0) return false; return true;
}
//9x : xxyyyzzz or xxyyyzzzwww
//9xx : 9xxyyyy or 9xxyyyyzzzz
for(var i=9123,j,s,m=0,n;i<10000;i++) if(isO(n=(i+''+i*2))&&~~n>m) m=n;
console.log(m);
