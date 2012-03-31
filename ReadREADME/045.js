for(var x,y,f=1,h,xy0=[[0,1],[0,-1],[1,-5],[1,5],[3,-19],[3,19]],i=0;f;)
  for(i=0;f&&i<xy0.length;i++){
    x=xy0[i][0],y=xy0[i][1];
  if(x>0&&y>0&&y%6==5&&(h=x*(2*x-1))>40755) f=false;
	xy0[i][0]=-7*x-y+2,xy0[i][1]=-48*x-7*y+12;
  }
console.log(h);