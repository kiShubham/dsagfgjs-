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

// * number of zeros at the end of factorial

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
  //10000000

  let res = 0;
  for (let i = 5; i <= num; i = i * 5) {
    res = res + Math.floor(num / i);
  }
  return res;
};

console.log(trailingZeroEfficient(251)); // 62

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

//! Prime Number ;

function ifprime(num) {
  if (num == 1 || num == 0) return false;
  if (num == 2 || num == 3) return true;
  if (num % 2 == 0 || num % 3 == 0) return false; // not prime
  // 25<=7 not even checking , so fastest yet O(1)
  for (let i = 5; i * i <= num; i = i + 6) {
    // console.log(num, i);
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
}

console.log(ifprime(7));

/*
! All Divisor of a number ; 
*/
// TC : theta( sq.rt (n) )
function divisor(num) {
  let arr = [];
  for (let i = 1; i * i <= num; i++) {
    if (num % i === 0) {
      arr.push(i);
      if (i !== num / i) arr.push(num / i);
      console.log(i, num / i);
    }
  }
  return arr;
}
// console.log(divisor(25));

// TC : theta( sq.rt (n) )
function divisorInSortedOrder(num) {
  let i = 0;
  for (i = 1; i * i < num; i++) {
    if (num % i === 0) console.log(i);
  }
  for (i; i >= 1; i--) {
    if (num % i === 0) console.log(num / i);
  }
  return "done";
}
// console.log(divisorInSortedOrder(20));

/* 
! Sieve of Erasthonese : to find the prime numbers till n ; 
*/
function sieve(num) {
  let primeArr = new Array(num + 1).fill(true);
  for (let i = 2; i <= num; i++) {
    if (ifprime(i)) {
      console.log(i);
      for (let j = i * i; j <= num; j = j + i) {
        // ifprime(j)=false
      }
    }
  }
}

/* 
!  computing power x^n where n>=0 ;
i/p : x= 2 ,n =3 , answer = 8 ;

*/

const computePower = (x, n) => {
  let ans = 1;
  for (let i = 0; i < n; i++) {
    ans = ans * x;
  }
  return ans;
};
console.log(computePower(2, 3));
console.log(computePower(2, 35));
