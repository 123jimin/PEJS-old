for(var n=0,N=2011,p,q=2;q<N;q++)
  for(p=q-1;Math.sqrt(q)-Math.sqrt(p)<1;p--)
    if(p+q<=N) n+=Math.ceil(-Math.LN10*N/2/Math.log(Math.sqrt(q)-Math.sqrt(p)));
console.log(n);
