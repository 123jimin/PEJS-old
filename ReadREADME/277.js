for(var s='UDDDUdddDDUDDddDdDddDDUDDdUUDd',i=0,n=1,m;i<s.length;i++){
  switch(s[s.length-1-i]){
    case 'D': n*=3; break;
    case 'd':
      m=(n*3+1)/2;
      while(m!=Math.floor(m)){
        n+=Math.pow(3,i+1);
        m=(n*3+1)/2;
      }
      n=m;
      break;
    case 'U':
      m=(n*3-2)/4;
      while(m!=Math.floor(m)){
        n+=Math.pow(3,i+1);
        m=(n*3-2)/4;
      }
      n=m;
      break;
  }
}
n+=Math.pow(3,s.length)*~~(Math.pow(10,15)/Math.pow(3,s.length));
while(n-Math.pow(3,s.length)>Math.pow(10,15)) n-=Math.pow(3,s.length);
console.log(n);
