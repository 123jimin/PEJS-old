var d1=new Date(1901,0,1,0,0,0,0),d2=new Date(2000,11,31,0,0,0),i=0;
while(d1.getTime()<d2.getTime()){if(d1.getDay()==0)i++;d1.setMonth(d1.getMonth()+1);}
console.log(i);
