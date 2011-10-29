var a=[1,2],x,y,s=2;
while((x=a.pop())<=4000000){y=a.pop();a.push(y,x,x+y);s+=(x+y)%2?0:(x+y);}
console.log(s);
