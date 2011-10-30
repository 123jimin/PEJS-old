function s5(x){return x<10?x*x*x*x*x:s5(x%10)+s5(~~(x/10));}
for(var s=0,i=10;i<9*9*9*9*9*9;i++) if(i==s5(i)) s+=i; console.log(s);
