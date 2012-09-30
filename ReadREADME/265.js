var c=5,m=1<<c,s=0;
function f(a,n){
  if(a.length==m-1){
    for(var x=0,i=0;i<a.length-(c-2);i++,x*=2) x+=a[i]%2;
    s+=x/2;
    return;
  }
  a.push(n);
  var x=(n*2)%m;
  if(a.indexOf(x)==-1) f(a,x);
  if(a.indexOf((x+1)%m)==-1) f(a,x+1);
  a.pop();
}

f([],0); console.log(s);
