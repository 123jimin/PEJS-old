var a,b,f=false;
for(a=1;a<=333&&!f;a++){
  for(b=a+1;2*b+a<1000&&!f;b++){
    if(a*a+b*b==(1000-a-b)*(1000-a-b)){f=true;console.log(a*b*(1000-a-b));}
  }
}
