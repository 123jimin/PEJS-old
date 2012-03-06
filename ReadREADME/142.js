(function(){
  for(var a=1,b,c,d,e,f,x,y,z;;a++) for(b=2-a%2;b<a;b+=2) for(x=(a*a+b*b)/2,y=(a*a-b*b)/2,c=1;c*c<x*2;c++){
    d=Math.floor(Math.sqrt(x*2-c*c)); if(d*d!=x*2-c*c) continue; z=c*c-x; if(z>=y||z<=0) continue;
    e=Math.floor(Math.sqrt(y+z)),f=Math.floor(Math.sqrt(y-z)); if(e*e==y+z&&f*f==y-z){console.log(x+y+z);return;}
  }
}());
