function diff(){
  for(var t=arguments[0],i=1;i<arguments.length;i++) if(t==arguments[i]) return false; return true;
}
function no(){
  for(var a=[1,1,1,1,1,1,1,1,1],i=0,s=0;i<arguments.length;i++) a[arguments[i]]=0;
  for(i=0;i<10;i++) if(a[i]) s+=i; return s;
}
var ss=0,d3,d4,d5,d6,d7,d8,d9,d0;
for(d3=0;d3<10;d3++)
  for(d4=0;d4<10;d4+=2)
    if(diff(d4,d3)) for(d5=(18-d3-d4)%3;d5<10;d5+=3)
      if(diff(d5,d4,d3)) for(d6=0;d6<10;d6+=5)
        if(diff(d6,d5,d4,d3))
for(d7=0;d7<10;d7++) if((''+d5+d6+d7)%7==0&&diff(d7,d6,d5,d4,d3))
for(d8=0;d8<10;d8++) if((''+d6+d7+d8)%11==0&&diff(d8,d7,d6,d5,d4,d3))
for(d9=0;d9<10;d9++) if((''+d7+d8+d9)%13==0&&diff(d9,d8,d7,d6,d5,d4,d3))
for(d0=0;d0<10;d0++) if((''+d8+d9+d0)%17==0&&diff(d0,d9,d8,d7,d6,d5,d4,d3))
  ss+=no(d3,d4,d5,d6,d7,d8,d9,d0)*1100000000+(''+d3+d4+d5+d6+d7+d8+d9+d0)*2;
console.log(ss);
