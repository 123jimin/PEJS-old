function makeStr(s){s=''+s; return 'S'+s.split('').sort().join('');}
for(var a={},b,i=1;;i++){
  b=makeStr(i*i*i);
  if(!a[b]) a[b]=[i];
  else{
    a[b].push(i);
    if(a[b].length>=5){
      console.log(a[b][0]*a[b][0]*a[b][0]);
      break;
    }
  }
}
