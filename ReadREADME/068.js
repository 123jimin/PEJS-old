for(var a,b,s=(10*11/2+15)/5,i=100;i<=421;i++)
  if((i+'').split('').sort().join('')=='124'){
    a=[i%10,~~(i/10)%10,~~(i/100)];
    a.push(s-a[0]-a[1],s-a[1]-a[2],s-a[2]-3,s-5-a[0]);
    if((b=a.join(' ').split(' ')).sort(function(a,b){return a-b;}).join(' ')=='1 2 4 7 8 9 10')
      console.log('653'+a[5]+'3'+a[2]+a[4]+a[2]+a[1]+a[3]+a[1]+a[0]+a[6]+a[0]+'5');
  }
