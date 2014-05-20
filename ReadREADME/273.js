for(var p=[5,13],q,n=17,s=0,t=0,l,m,i,x,y,z,w,c,d;n<150;n+=4) if(n%3&&n%5&&n%7&&n%11) p.push(n);
q=p.map(function(n){
  for(var a=[],v,i=1;!isNaN(v=Math.sqrt(n-i*i));i++) if(v==(0|v)){
    s+=i; return [i,v];
  }
});
l=[q[0][0]]; m=[q[0][1]];
for(n=1;n<p.length;n++){
  z=q[n][0]; w=q[n][1];
  for(i=l.length;i-->0;){
    c=l[i]; d=m[i];
    x=c*z+d*w; y=c*w-d*z; if(y<0) y=-y;
	s+=y; l.push(y); m.push(x);
    y=d*w-c*z; x=d*z+c*w;
	if(x>y){s+=y; l.push(y); m.push(x);}
	else{s+=x; l.push(x); m.push(y);}
	if(s>=1e15){s-=1e15; t++;}
  }
  l.push(z); m.push(w);
}
for(s+='';s.length<15;s='0'+s);
console.log(t+s);
