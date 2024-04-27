function fun(n) {
  if (n == 0) return;
  console.log(n);
  fun(n - 1);
  console.log(n);
}

// fun(3);

function recFun(n) {
  if (n === 0) return 0;
  recFun(n - 1);
  console.log(n);
  recFun(n - 1);
}
// recFun(3);

function addup(n) {
  if (n == 1) return 0;
  return 1 + addup(Math.floor(n / 2));
}
// console.log(addup(16));

function binaryRep(n) {
  if (n === 0) return;
  binaryRep(Math.floor(n / 2));
  console.log(n % 2);
}

// binaryRep(5);

function printN(n) {
  if (n === 0) return;
  console.log(n);
  printN(n - 1);
}

// printN(10);

function isPal(string, start, end) {
  if (start >= end) return true; //no or single character ;
  return string[start] == string[end] && isPal(string, start + 1, end - 1);
}
let string = "eekss";
let string1 = "eeksskee";

// console.log(isPal(string, 0, string.length - 1)); //false ;
// console.log(isPal(string1, 0, string1.length - 1)); //true ;

function sumN(n) {
  let res = 0;
  while (n > 0) {
    res = res + (n % 10);
    n = Math.floor(n / 10);
  }
  return res;
}
console.log(sumN(5656));

function sumNRec(n) {
  if (n === 0) return 0;
  return (n % 10) + sumNRec(Math.floor(n / 10));
}
console.log(sumNRec(9987));
