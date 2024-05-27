// let ,var ,const
/* one();

function one() {
  let a = 1;
  function two() {
    let b = 1;
    function three() {
      let c = 1;
      console.log(a, b);
    }
    three();
  }
  two();
}
one();

fns();

// packagejson; */

// const arr = [10, 12, 15, 21];
// for (var i = 0; i < arr.length; i++) {
//   setTimeout(function (i) {
//     console.log("Index: " + i + ", element: " + arr[i]); // 4,4,4,4
//   }, 3000);
//   console.log("Index: " + i + ", element: " + arr[i]); //0,1,2,3,
// }

// giv

// ['hello', 'aba', 'abc']
// ["aba"]

// "ahha" //

const isPalindrome = (arr) => {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (isPalindromeString(arr[i])) {
      res.push(arr[i]);
    }
  }
  return res;
};
// console.log(isPalindrome(["hello", "aba", "abc", "abba"]));

function isPalindromeString(string) {
  let n = string.length;
  let i = 0;
  let j = n - 1;
  while (i <= j) {
    if (string[i] === string[j]) {
      //continues
      i++;
      j--;
    } else return false;
  }
  return true;
}

// console.log(isPalindromeString("abdkba"));

let box = [1, 2, 3, [4, 5, [6, 7]]];
console.log(...box, ...box[3 - 4], ...box[3][2]);
