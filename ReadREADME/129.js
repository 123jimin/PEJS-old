function A(n){
  if(n%2==0||n%5==0) return 0;
  for(var v=1,i=1;v;i++) v=(v*10+1)%n;
  return i;
}
for(var i=1000001;A(i)<=1000000;i+=2); console.log(i);
