// time complexity :θ(d) , d is digits
//how many digits in a number ;
const countInt = (num) => {
  if (num === 0) return 1;
  let x = 0;
  while (num > 0) {
    num = Math.floor(num / 10);
    x++;
  }
  return x;
};
// console.log(countInt(7337));

// time complexity :θ(d) , d is digits
const palindromeNum = (num) => {
  let x = 0;
  let res = num;
  while (res !== 0) {
    let temp = res % 10;
    res = Math.floor(res / 10);
    x = x * 10 + temp;
  }
  return x === num;
};

// console.log(palindromeNum(12321));

// Tc: θ(n) ,aux space :θ(1)
const factorialIterative = (num) => {
  if (num == 0 || num == 1) {
    return 0;
  }
  let res = 1;
  for (let i = 2; i <= num; i++) {
    res = i * res;
  }
  return res;
};
// console.log(factorialIterative(6));

// Tc: θ(n) , Aux space: θ(n)
const factorialRecursive = (n) => {
  if (n == 0) {
    return 1;
  } else {
    return n * factorialRecursive(n - 1);
  }
};

// console.log(factorialRecursive(4));

// this fn not works if num = 100 ; too large to calculate factorial
// some issue with this code : timecomplexity is linear ;
const trailingZeroNaive = (num) => {
  let factorial = factorialRecursive(num);
  let temp = 0;
  let res = 0;
  while (temp == 0) {
    let temp2 = factorial % 10;
    factorial = Math.floor(factorial / 10);
    temp = temp2;
    if (temp2 == 0) res++;
  }
  return res;
}; //number of zeros at the end of factorial

// console.log(trailingZeroNaive(10));

// the hint is 2*5=10 ; we have to find how many 2 ,5 pair is consisted by number like
//10 = > 10,9,8,7,6,5,4,3,2,1 ; so we can see 10,2,5 : 2 pairs of 2,5 so their could be 2 zeros at the end of 10! ;
//their is a thing that numbe of 5 is always less than number of two's , so their for just count 5 ;
//TC: θ(logn) ,Aux Space : O(1)

const trailingZeroEfficient = (num) => {
  //   let x = Math.floor(num / 5) + Math.floor(num / 25) + Math.floor(num / 125);

  let res = 0;
  for (let i = 5; i <= num; i = i * 5) {
    res = res + Math.floor(num / i);
  }
  return res;
};

// console.log(trailingZeroEfficient(251)); // 62

/* 
! Greatest common divisor ;
*/

// *Naive soln ;
/* 
    TC : O(min(x,y)) , space complexity :
*/
const gcdNaive = (x, y) => {
  let res = Math.min(x, y);
  while (res > 0) {
    if (x % res == 0 && y % res == 0) {
      return res;
    }
    res--;
  }
  return res;
};
// console.log(gcdNaive(3, 4));

const gcdEuclidean = (x, y) => {
  if (y === 0) return x;
  return gcdEuclidean(y, x % y);
};

const gcdIterative = (x, y) => {
  while (b !== 0) {
    a = a % b;
    [a, b] = [b, a];
  }
  return a;
};

/* 
! lcm ;
* naive time complexity : O(a*b - max(a,b)) ; here is a*b is worst case like 3,7 their lcm is 21 ;
* or we can say O(LCM - max(a,b)) ;
*/
const myLcmNaive = (x, y) => {
  let max = Math.max(x, y);
  let bool = true;
  // infinite loop  ;
  while (bool) {
    if (max % x == 0 && max % y == 0) {
      return max;
    }
    max++;
  }
};
// console.log(myLcmNaive(7, 3));

const myLcm = (x, y) => {
  return (x * y) / gcdEuclidean(a, b);
};
