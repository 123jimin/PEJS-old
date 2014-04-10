var i,states=[[[1,0],[0,0,0,0,1]]];
function day(){
  var ns=[];
  states.forEach(function(state){
    var a,f=state[0],sh=state[1],s=sh[0]+sh[1]+sh[2]+sh[3]+sh[4],i=0,j;
    if(s==1){
      a=[0,0,0,0,0];
      for(;i<5;i++) if(sh[i]){
        for(;i-->0;a[i]=1); break;
      }
      ns.push([[f[0],f[1]+1],a]);
      return;
    }
    for(;i<5;i++) if(sh[i]){
      a=sh.slice(); a[i]=sh[i]-1;
      for(j=i;j-->0;a[j]++);
      ns.push([[f[0]*sh[i]/s,f[1]],a]);
    }
  });
  states=ns;
}
for(i=0;i<16;i++) day(); i=0;
states.forEach(function(state){
  i+=state[0][0]*state[0][1];
});
console.log((i-2).toFixed(6));
