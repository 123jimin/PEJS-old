var u={},d={};
var pd=function(x){
  if(x.length==1) return x[0].map(function(k){return [k];});
  var a=pd(x.slice(1)),r=[];
  if(a.length==0) return [];
  x[0].forEach(function(k){
    a.forEach(function(s){
      r.push([k].concat(s));
    });
  });
  return r;
};
var up=function(a){
  if(a.length==1) return 1;
  var i,m,k=a.join(''),s;
  if(u[k]) return u[k];
  for(i=1,m=[],s=0;i<a.length;i++){
    m.push([1,2,3].filter(function(n){
      return a[i]!=n&&a[i-1]!=n;
    }));
  }
  pd(m).forEach(function(x){
    s+=down(x);
  });
  return u[k]=s;
};
var down=function(a){
  var i,m,k=a.join(''),s;
  if(d[k]) return d[k];
  for(i=0,m=[],s=0;i<a.length;i++){
    m.push([1,2,3].filter(function(n){
      return a[i]!=n;
    }));
  }
  pd(m).forEach(function(x){
    s+=up(x);
  });
  return d[k]=s;
};
// Warning: it is a bit inaccurate(rounded), but since it is always multiple of 8...
console.log(down([0,0,0,0,0,0,0,0]));
