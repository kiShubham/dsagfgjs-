const countInt = (num) => {
  let count = 0;
  while (num > 0) {
    count++;
    num = Math.floor(num / 10);
  }
  return count;
};

// console.log(countInt(1234));

const checkPalindrome = (num) => {
  let temp = 0;
  let res = num;
  while (res !== 0) {
    temp = temp * 10 + (res % 10);
    res = Math.floor(res / 10);
  }
  return temp;
};
// console.log(checkPalindrome(12121));

const factorialIterative = (num) => {
  if (num == 0 || num == 1) return 1;
  let res = 1;
  for (let i = 2; i <= num; i++) {
    res = i * res;
  }
  return res;
};

const factorialRecursive = (num) => {
  if (num == 0 || num == 1) return 1;
  else {
    return num * factorialRecursive(num - 1);
  }
};

// console.log(factorialRecursive(6));

const trailingZeroInFactorial = (num) => {
  if (num < 5) return 0;
  let count = 0;
  while (num >= 5) {
    count = count + Math.floor(num / 5);
    num = num / 5;
  }

  return count;
};

// console.log(trailingZeroInFactorial(125));

const trailingZeroRecursive = (num) => {
  return num == 0
    ? 0
    : Math.floor(num / 5) + trailingZeroRecursive(Math.floor(num / 5));
};

// console.log(trailingZeroRecursive(25));

//O(n)
const primeNumberNaive = (num) => {
  let bool = true;
  if (num == 0 || num == 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      bool = false;
      break;
    }
  }
  return bool;
};

// console.log(primeNumberNaive(20));

/* 
   x*y = num
   5*6 = 30 
   x<=y
   x*x<=num
   5*5 <=30
   5<=root(30)~5.5
   x<=root(n)
   run the loop till root(n) as there is always a "x" which is less then root(n) 
   which is divisible by n completely and hence will be non prime if x exist ;
  */

// tc : O(√n)
const primeNum = (num) => {
  if (num == 0 || num == 1) {
    return false;
  }
  let bool = true;
  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    if (num % i == 0) {
      bool = false;
    }
  }
  return bool;
};

// console.log(primeNum(2));

//     5 6; 7 8; 9; 10; 11 12; 13 14; 15; 16; 17 18; 19 20;
// 3times faster than O(√n)
const primeMoreEff = (num) => {
  if (num <= 1) return false;
  if (num === 2 || num === 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i = i + 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
};

// console.log(primeMoreEff(1031));

//for printing all prime till n (including n)
// time : n*√n
const seiveOfErasthonese = (n) => {
  let isPrime = new Array(n + 1).fill(true);
  for (let i = 2; i * i <= n; i++) {
    if (isPrime[i]) {
      for (let j = 2 * i; j <= n; j = j + i) {
        isPrime[j] = false;
      }
    }
  }
  for (let i = 2; i <= n; i++) {
    if (isPrime[i]) {
      console.log(i);
    }
  }
};
// seiveOfErasthonese(1031);

// time :Θ(n)
const computingPower = (n, p) => {
  if (p === 0) return 1;
  let temp = 1;
  for (let i = 0; i < p; i++) {
    temp *= n;
  }
  return temp;
};
// console.log(computingPower(3, 0));

//O(log(n))
//auxspace : O(log n )
const computingPowerRecursive = (n, p) => {
  if (p === 0) return 1;
  else {
    if (p % 2 == 0) {
      return (
        computingPowerRecursive(n, p / 2) * computingPowerRecursive(n, p / 2)
      );
    } else {
      return computingPowerRecursive(n, p - 1) * n;
    }
  }
};

// console.log(computingPowerRecursive(3, 2));
const binary = (num) => {
  let arr = [];
  while (num > 0) {
    if (num % 2 !== 0) {
      arr.push(1);
    } else {
      arr.push(0);
    }
    num = Math.floor(num / 2);
  }
  console.log(arr);
};
// binary(19);

const computingPowerBinary = (x, num) => {
  let res = 1;
  while (num > 0) {
    if (num % 2 !== 0) {
      res = res * x;
    }
    x = x * x;
    num = Math.floor(num / 2);
  }
  return res;
};
// console.log(computingPowerBinary(3, 2));
