function countLetters(n){
  switch(n){
    case 1: case 2: case 6: case 10: return 3;
    case 4: case 5: case 9: return 4;
    case 3: case 7: case 8: case 40: case 50: case 60: return 5;
    case 11: case 12: case 20: case 30: case 80: case 90: return 6;
    case 15: case 16: case 70: return 7;
    case 13: case 14: case 18: case 19: return 8;
    case 17: return 9;
    case 1000: return 11;
  }
  if(n%100==0) return countLetters(~~(n/100))+7;
  if(n<100) return countLetters(n%10) + countLetters(n-n%10);
  return countLetters(n-n%100) + 3 + countLetters(n%100);
}

var sum = 0;
for(i=1;i<=1000;i++) sum+=countLetters(i);
console.log(sum);
