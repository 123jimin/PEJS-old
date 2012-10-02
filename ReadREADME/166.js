for(var z=0,S,a=0,b,c,d,e,f,g,h,i,j,k,l,m,n;a<10;a++) for(b=0;b<10;b++)
for(c=0;c<10;c++) for(d=0;d<10;d++) for(e=0;e<10;e++){
  f=a+b+c-d-e; if(f<0) break; if(f>=10){e+=f-10;continue;}
  for(g=0;g<10;g++) for(h=0;h<10;h++){
    i=d+f+e-g-h; if(i<0) break; if(i>=10){h+=i-10;continue;}
	for(j=0;j<10;j++){
	  k=j+e+c-i-b; if(k>=10) break; if(k<0){j-=k+1;continue;}
	  if(a+d+k!=i+f+j) break; // j+=1 -> k+=1
	  l=a+g+j-f-b; if(l>=10) break; if(l<0) continue;
	  if(i+f+j!=h+l+c) break; // j+=1 -> k+=1
	  for(m=0;m<10;m++){
	    S=a+d+k+m;
		n=S-a-g-j; if(n>=10) break; if(n<0){m-=n+1;continue;}
		n=S-d-f-e; if(n>=10) break; if(n<0){m-=n+1;continue;}
		n=S-k-i-b; if(n>=10) break; if(n<0){m-=n+1;continue;}
		z++;
	  }
	}
  }
}
console.log(z);