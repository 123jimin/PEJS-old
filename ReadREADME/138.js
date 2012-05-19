for(var x=[0,0,0,0],y=[-1,1,-1,1],L=[],s=0,tx,ty,i=0,j;i<20;i++){
  for(j=0;j<4;j++){
    tx=x[j],ty=y[j];
    if(tx>0&&ty>0) if(L.indexOf(ty)==-1){
      s+=ty;
      if(L.push(ty)==12){i=20;break;}
    }
    x[j]=-9*tx-4*ty+(j<2?-4:4);
    y[j]=-20*tx-9*ty+(j<2?-8:8);
  }
}
console.log(s);
