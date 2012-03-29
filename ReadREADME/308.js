for(var s=0,i=0,j=0,A=2,As,D=1;s<9e15;A++){
  i=0;
  for(As=Math.sqrt(A),D=1;D<=As;D++){
    i+=(D+3*A+1)*(~~(A/D)-~~((A-1)/(D+1)));
    if(A%(D+1)==0){
      i-=2*A;
      break;
    }
  }
  if(D>As){
    for(D=~~(A/D);;D--){
      if(D<A&&A%D==0){
        i+=A+A/D;
        break;
      }
      i+=~~(A/D)+3*A+1;
    }
    D=A-1;
  }
  i=i*2+A/(D+1)-A-4;
  s+=i;
  if(D==A-1){
    j++; if(j==10001) break;
  }
}
console.log(s);
