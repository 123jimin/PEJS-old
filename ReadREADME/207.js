var j=0,i=1,k=1;
do{
  if(++i==k*2){k*=2;j++;}
}while(j*12345>=i-1);
console.log(i*i-i);
