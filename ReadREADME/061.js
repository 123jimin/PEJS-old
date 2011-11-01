function pt(x){
  x=''+x; for(var a=[0,0,0,1,1,1,1,1,1],i=0;i<x.length;i++) a[~~x[i]]--;
  for(i=0;i<a.length;i++) if(a[i]!=0) return false; return true;
}
function c(a,b){return a%100==~~(b/100);}
var p=[0,0,0,[],[],[],[],[],[]],i,t,j0,j1,j2,j3,j4,j5,t0,t1,t2,t3,t4,t5,f=true;
for(i=1;(t=i*(i+1)/2)<10000;i++) if(t>=1000) p[3].push(t);
for(i=1;(t=i*i)<10000;i++) if(t>=1000) p[4].push(t);
for(i=1;(t=i*(3*i-1)/2)<10000;i++) if(t>=1000) p[5].push(t);
for(i=1;(t=i*(2*i-1))<10000;i++) if(t>=1000) p[6].push(t);
for(i=1;(t=i*(5*i-3)/2)<10000;i++) if(t>=1000) p[7].push(t);
for(i=1;(t=i*(3*i-2))<10000;i++) if(t>=1000) p[8].push(t);
for(i=345678;i<=876543&&f;i++) if(pt(i)){
  t=''+i;
  for(j0=0;j0<p[~~t[0]].length&&f;j0++){
    t0=p[~~t[0]][j0];
    for(j1=0;j1<p[~~t[1]].length&&f;j1++){
      t1=p[~~t[1]][j1]; if(c(t0,t1))
      for(j2=0;j2<p[~~t[2]].length&&f;j2++){
        t2=p[~~t[2]][j2]; if(c(t1,t2))
        for(j3=0;j3<p[~~t[3]].length&&f;j3++){
          t3=p[~~t[3]][j3]; if(c(t2,t3))
          for(j4=0;j4<p[~~t[4]].length&&f;j4++){
            t4=p[~~t[4]][j4]; if(c(t3,t4))
            for(j5=0;j5<p[~~t[5]].length&&f;j5++){
              t5=p[~~t[5]][j5]; if(c(t4,t5)&&c(t5,t0)){
                f=false;
                console.log(t0+t1+t2+t3+t4+t5);
                break;
              }
            }
          }
        }
      }
    }
  }
}
