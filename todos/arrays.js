// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("promise resolved");
//   }, 3000);
// });

// async function getData() {
//   const res = await p;
//   console.log(res);
//   console.log("namaste Javascript");
//   const res2 = await p;
//   console.log(res2);
//   console.log("namaste Javascript");
// }
// // getData();

// function a() {
//   let b = 10;
//   c();
//   function c() {}
// }

// a();
// console.log(b);
//!55

//* ************************* Arrays **************** */30

/*
*todo: 4.Remove duplicates from Sorted array , return the length of new array 
*todo: 5.Left Rotate an array by one place
*todo: 6.Left rotate an array by D places
*todo: 7.Move Zeros to end
todo: 19. Best Time to Buy and Sell Stock
todo: II,III

*todo: 9.Union of two sorted array ; 
*todo: intersection of arrays
*todo: 10.Find missing number in an array  XoR
*todo: 11.Maximum Consecutive Ones
*todo: 12.Find the number that appears once, 
*todo: Q:Given an integer array nums where every element appears three times except for one, which appears exactly once. Find the single element and return it. XOR

todo: 13.Longest subarray with given sum K(p…
todo: 14.Longest subarray with sum K (Positi…
todo: Pascal triangle 
* todo: 15.2Sum Problem ; 
* todo: solve !!! 3 sum 
todo: 4 sum and 4sum II ;
todo: 16.Sort an array of 0's 1's and 2's, dutch national flag algorithm ; 

todo: 17.Majority Element (>n/2 times) , moores algorithm  ;
todo: 18 .Kadane’s Algorithm : Maximum Subarray Sum in an Array 
todo: 20.Next Permutation
todo: 21. Leaders in array  ;
todo: 22.Longest Successive Elements  128.Longest Consecutive Sequence
todo: merge sorted Array ;
todo: Largest Subarray with 0 Sum

*/

// **********  infdt-1 ************* */18
/* 
/*  

todo:*- [ 7 ] Find the reverse of the number 
todo: Count the number of prime less than N (basic problem of crio file )
todo:- [ Y ] Factorial Trailing Zeroes : how many zero in factorial ;
todo:* - [Y] Find if the given number is palindrome
todo:*- [ ] Find if the given string is a palindrome

todo:*- [ 26 ] Remove Duplicates From sorted Array 
todo:*  - [1572 ] Find diagonal Sum
todo:*- [ ] Write a function that reverse an array 
todo:*- [ 242 ] Find if the given two strings are a valid anagram 
todo:* - [ ] write a fn to reverse a string

todo:* [151.] Reverse Words in a String
todo:* [541.] Reverse String II
todo:*- [ ] count frequency of characters
todo:* - [ ] remove whitespaces from a string 
todo:* - [ 2129.] capitalize the first letter of each word in a sentence 

todo: - [ ] Mock : Factorial Digit sum **
todo:* - [ 14 ] Longest common prefix ;
todo: - [ todo :] plus one to the integer and return the array : [9,9,9] + 1 : [1,0,0,0] 
*/

//*******************  INFDT 2 *******/ 3
/*
 
todo:- [ ] Nth Fibonacci number
todo: - [ ] power of two 
todo: - [ ] Find Triplet with maximum sum in unsorted Array 

 */

//*********** Matrix ******/ 4
/* 
todo: 1Q. print spiral matrix ;
todo: 2Q. Rotate the matrix ;
todo: 3Q. set Matrix Zero's
todo: 4Q. 59. Spiral Matrix II
*/

//? : 4.Remove duplicates from Sorted array , return the length of new array

/* Change the array nums such that the first k elements of nums contain 
the unique elements in the order they were present in nums initially. 
The remaining elements of nums are not important as well as the size of nums.
*/

//arr = [1,1,2],[]
// can use extra space ; set() or array ;extra space O(n) ,time:O(n)traversing array for inseting in set it takes O(1)

// time : O(n)
const removeDupSorted = (arr) => {
  const n = arr.length;
  let i = 0;
  let j = 1;
  while (j < n) {
    if (arr[j] !== arr[i]) {
      arr[i + 1] = arr[j];
      i++;
    }
    j++;
  }
  return { arr, num: i + 1 };
};
// console.log(removeDupSorted([1, 1, 2]));

// ? rotate by one place

function ro(arr) {
  const n = arr.length;
  let temp = arr[0];
  let i = 0;
  while (i <= n - 1) {
    arr[i] = arr[i + 1];
    i++;
  }
  arr[n - 1] = temp;
  return arr;
}
// console.log(ro([1, 2, 3, 4, 5, 6, 7, 8]));

//? : 5.Left Rotate an array by one place
/* 
Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
*/

const rotate = (arr, i, j) => {
  const n = arr.length;
  if (n <= 1) return arr;
  // let mid = Math.floor(n / 2);
  while (i < j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    i++;
    j--;
  }
  return arr;
};
// console.log(rotate([1, 2, 3], 0, 2));

const leftRotate = (arr, k) => {
  const n = arr.length;
  if (k == n) return arr;
  k = k % n;

  rotate(arr, 0, n - k - 1);
  rotate(arr, n - k, n - 1);
  return rotate(arr, 0, n - 1);
};
// console.log(leftRotate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 86685));

//! todo: 7.Move Zeros to end
// [1,0,2,3,0,0,0,0,1,4,2,5,1,1] -> [1,2,3,1,4,2,5,1,0,0,0,0,0]
// [0,0,0,0,0,1,2,3,4]
// brute  store all non-Zeros to temp [] then replace in main arr

const moveZeros = (arr) => {
  const n = arr.length;
  let valid = 1;
  let zero = 0;
  while (valid < n) {
    if (arr[valid] !== 0 && arr[zero] === 0) {
      arr[zero] = arr[valid];
      arr[valid] = 0;
      zero++;
    }
    if (arr[zero] !== 0) zero++;
    valid++;
  }
  return arr;
};
// console.log(moveZeros([1, 0, 2, 3, 0, 0, 0, 0, 1, 4, 2, 5, 1, 1]));

//! todo: 9.Union of two sorted array ;brute: use set,optimal : 2pointer ;
/* 
arr1[] = {1,2,3,4,5}  
arr2[] = {2,3,4,4,5}
Output:
 {1,2,3,4,5}
*/

//time :O(n+m) ; space: o(n+m) for returning the answer not for solving;
const unionTwoSortedArr = (arr1, arr2) => {
  let n = arr1.length;
  let m = arr2.length;
  let i = 0;
  let j = 0;
  let res = [];
  while (i < n && j < m) {
    if (arr1[i] <= arr2[j]) {
      if (res.length == 0 || arr1[i] !== res[res.length - 1]) res.push(arr1[i]);
      i++;
    } else if (arr1[i] >= arr2[j]) {
      if (res.length == 0 || arr2[j] !== res[res.length - 1]) res.push(arr2[j]);
      j++;
    }
  }
  while (i < n) {
    if (res.length == 0 || arr1[i] !== res[res.length - 1]) res.push(arr1[i]);
    i++;
  }
  while (j < m) {
    if (res.length == 0 || arr2[j] !== res[res.length - 1]) res.push(arr2[j]);
    j++;
  }

  return res;
};

// console.log(unionTwoSortedArr([1, 2, 3, 4, 4, 5, 6], [2, 3, 4, 4, 5]));

//! todo: intersection of sorted arrays
/* 
arr1 = [1,2,2,3,4];
arr2 = [2,2,3,3,5,6];

res = [2,2,3]

*/
const intersectionArray = (arr1, arr2) => {
  const n = arr1.length;
  const m = arr2.length;
  let res = [];
  let i = 0,
    j = 0;
  while (i < n && j < m) {
    if (arr1[i] === arr2[j]) {
      res.push(arr1[i]);
      i++;
      j++;
    } else if (arr1[i] > arr2[j]) {
      j++;
    } else if (arr1[i] < arr2[j]) {
      i++;
    }
  }
  return res;
};
// console.log(intersectionArray([1, 2, 2, 3, 6, 7, 8], [2, 2, 3, 3, 7, 8]));
// console.log(intersectionArray([0], [0]));

// todo: 10.Find missing number in an array
/* 
Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
Input: nums = [3,0,1]
Output: 2
*/
const missingNumber = (arr) => {
  arr = arr.sort((a, b) => a - b);
  if (arr[0] != 0) return 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != i) {
      return i;
    }
  }
  return arr.length;
};

const missingFlag = (arr) => {
  let n = arr.length;
  let res = new Array(n + 1).fill(false);

  let temp1;
  let temp2;
  for (let i = 0; i < n; i++) {
    res[arr[i]] = true;
  }
  for (let i = 0; i < res.length; i++) {
    if (!res[i]) return i;
  }
};
const missingFlagII = (arr) => {
  let n = arr.length;
  let numSum = (n * (n + 1)) / 2;
  const sum = arr.reduce((acc, curr) => acc + curr, 0);
  return numSum - sum;
};

const missingXor = (arr) => {
  let n = arr.length;
  let xor1 = 0;
  let xor2 = 0;
  for (let i = 0; i < n; i++) {
    xor2 = xor2 ^ arr[i];
    xor1 = xor1 ^ (i + 1);
  }
  return xor2 ^ xor1;
};

let ru = [
  45, 35, 38, 13, 12, 23, 48, 15, 44, 21, 43, 26, 6, 37, 1, 19, 22, 3, 11, 32,
  4, 16, 28, 49, 29, 36, 33, 8, 9, 39, 46, 17, 41, 7, 2, 5, 27, 20, 40, 34, 30,
  25, 47, 0, 31, 42, 24, 10, 14,
];
// console.log(missingXor(ru));
// console.log(missingFlagII(ru));
// console.log(missingFlag(ru));
// console.log(missingNumber([0, 1, 2]));
// console.log(missingNumber(ru));

// todo: 11.Maximum Consecutive Ones

var findMaxConsecutiveOnes = function (nums) {
  let count = 0;
  let max = 0;
  const n = nums.length;
  let i = 0;
  while (i < n) {
    if (nums[i] === 1) {
      count++;
    } else {
      count = 0;
    }
    max = Math.max(count, max);
    i++;
  }
  return max;
};

// console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1]));

// todo: 12.Find the number that appears once,
/* 
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

Input: nums = [4,1,2,1,2]
Output: 4

brute: hash map ;key->number ,value->counts
*/

const numberAppearOnce = (arr) => {
  const n = arr.length;
  let map1 = new Map();
  for (let i = 0; i < n; i++) {
    if (map1.has(arr[i])) {
      let temp = map1.get(arr[i]);
      map1.set(arr[i], temp + 1);
    } else map1.set(arr[i], 1);
  }

  const valueIterator = map1.values();
  const keyIterator = map1.keys();
  for (let i = 0; map1.size; i++) {
    let value = valueIterator.next().value;
    let char = keyIterator.next().value;
    if (value == 1) {
      return char;
    }
  }
};

// console.log(numberAppearOnce([4, 1, 2, 1, 2]));

// a^a =0 ; since every number is coming twice so we can use xor;
const numberAppearOnceXor = (arr) => {
  let res = null;
  for (let i = 0; i < arr.length; i++) {
    res = res ^ arr[i];
  }
  return res;
};
// console.log(numberAppearOnceXor([4, 1, 2, 1, 2]));

// todo: 13.Longest subarray with given sum K(p…
/* 
brute: 2 loop;
better: hashing ;
optimal :
*/

const longestSubArray = (arr, k) => {
  const n = arr.length;
  let count = 0; //length of subarray
  let index = 0;
  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = i; j < n; j++) {
      sum += arr[j];
      if (sum == k) {
        if (j - i + 1 > count) {
          count = j - i + 1;
          index = i;
        }
      } else if (sum > k) {
        break;
      }
    }
  }
  return { count, index }; // length of subArray and starting index of subArray ;
};
// console.log(longestSubArray([4, 1, 2, 1, 2, 2, 3, 4, 1, 0, -1, 1, 1, 0, 1], 3));

// todo: 14.Longest subarray with sum K (Positi…

// todo: 15.2Sum Problem ;
const twosum = (arr, target) => {
  let map = new Map();
  let n = arr.length;
  let i = 0;
  while (i < n) {
    let search = target - arr[i];
    if (map.has(search)) {
      let j = map.get(search);
      return [j, i];
    } else {
      map.set(arr[i], i);
      i++;
    }
  }
  return -1;
};
// console.log(twosum([1, 2, 3, 4, 5, 6, 7], 3));

//!incomplete
const twoSumOptimal = (arr, target) => {
  let n = arr.length;
  let copy = new Array();
  for (let i = 0; i < n; i++) {
    copy[i] = arr[i];
  }
  copy = copy.sort((a, b) => a - b);
  return copy;
};

// console.log(twoSumOptimal([1, 4, 2, 3], 0));
// todo: solve !!! 3 sum //target = 0
// brute:o(n3)
//better ;
const sumIII = (arr) => {
  let res = [];
  let myset = new Set();
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      let sum = arr[i] + arr[j];
      let search = sum == 0 ? 0 : -sum;

      let bool = myset.has(search);
      if (bool) {
        res.push([arr[i], arr[j], search]);
      } else {
        myset.add(arr[j]);
      }
    }
    myset.clear();
  }
  // sort ,
  for (let i = 0; i < res.length; i++) {
    res[i].sort((a, b) => a - b);
  }

  return res;
};

// console.log(sumIII([-1, 0, 1, 2, -1, -4]));
// console.log(sumIII([0, 0, 0]));

// todo: 4 sum and 4sum II ;
// todo: 16.Sort an array of 0's 1's and 2's, dutch national flag algorithm ;

// todo: 19. Best Time to Buy and Sell Stock
// todo: Best Time to Buy and Sell Stock II,III

// todo: 1Q. print spiral matrix ; //O(n*m)

const printSpiralMatrix = (arr) => {
  let left = 0;
  let top = 0;
  let right = arr[0].length - 1;
  let bottom = arr.length - 1;
  let res = [];

  if (!right) {
    for (let i = 0; i <= arr.length - 1; i++) {
      res.push(arr[i]);
    }
  }

  while (left <= right && top <= bottom) {
    for (let i = left; i <= right; i++) {
      res.push(arr[top][i]);
    }
    top++;

    for (let i = top; i <= bottom; i++) {
      res.push(arr[i][right]);
    }
    right--;

    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        res.push(arr[bottom][i]);
      }
      bottom--;
    }
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        res.push(arr[i][left]);
      }
      left++;
    }
  }
  return res;
};
let rotateMat = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
// console.log(printSpiralMatrix(rotateMat));
// console.log(printSpiralMatrix([[1, 2, 1]]));

// todo: 2Q. Rotate the matrix ;
const rotateMatfn = (arr) => {
  const n = arr.length;
  const m = arr[0].length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      let temp = arr[i][j];
      arr[i][j] = arr[j][i];
      arr[j][i] = temp;
    }
  }
  for (let i = 0; i < n; i++) {
    arr[i].reverse();
  }
  return arr;
};
/* console.log(
  rotateMatfn([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
); */

// todo: 3Q. set Matrix Zero's
const zeroMatrix = [
  [1, 1, 1, 1],
  [0, 0, 0, 1],
  [1, 1, 0, 1],
  [1, 1, 1, 1],
];

const setZeroI = (arr) => {
  let n = arr.length; //no of col;
  let m = arr[0].length; // no. of rows;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (arr[i][j] === 0) {
        for (let row = 0; row < m; row++) {
          if (arr[row][j]) {
            arr[row][j] = "*";
          }
        }
        for (let col = 0; col < n; col++) {
          if (arr[i][col]) {
            arr[i][col] = "*";
          }
        }
      }
    }
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (arr[i][j] == "*") arr[i][j] = 0;
    }
  }
  return arr;
};

// console.log(setZeroI(zeroMatrix));

const setMatrixWayII = (arr) => {
  let n = arr.length;
  let m = arr[0].length;
  let row = new Array(n).fill(1);
  let col = new Array(m).fill(1);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (arr[i][j] === 0) {
        row[i] = 0;
        col[j] = 0;
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (row[i] === 0 || col[j] === 0) {
        arr[i][j] = 0;
      }
    }
  }
  return arr;
};

// console.log(setMatrixWayII(zeroMatrix));

const setMatrixWayIII = (arr) => {};

// todo: 4Q. 59. Spiral Matrix II

// valid parenthesis;
const validParenthesis = (string) => {
  let i = 0;
  let stack = [];

  while (i < string.length) {
    if (stack[stack.length - 1] === "{" && string[i] === "}") stack.pop();
    else if (stack[stack.length - 1] === "(" && string[i] === ")") stack.pop();
    else if (stack[stack.length - 1] === "[" && string[i] === "]") stack.pop();
    else stack.push(string[i]);
    i++;
  }
  if (stack.length != 0) return false;
  return true;
};
// console.log(validParenthesis("{{[]}}")); //true
// console.log(validParenthesis("{{[[(]]}}")); // false

/* 
?  Greatest element to the right ;
*/

const ngr = (arr) => {
  let stack = [];
  let ans = [];
  let n = arr.length;
  for (let i = n - 1; i >= 0; i--) {
    if (stack.length === 0) ans.push(-1);
    else if (stack[stack.length - 1] > arr[i])
      ans.push(stack[stack.length - 1]);
    else if (stack[stack.length - 1] <= arr[i]) {
      while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
        stack.pop();
      }
      if (stack.length == 0) {
        ans.push(-1);
      } else if (stack[stack.length - 1] > arr[i]) {
        ans.push(stack[stack.length - 1]);
      }
    }
    stack.push(arr[i]);
  }
  return ans.reverse();
};
// console.log(ngr([1, 2, 3, 4, 5]));

function matrixMultiplication(n1, m1, n2, m2, grid1, grid2) {
  let res = Array.from({ length: 2 }, () => new Array(5).fill(null));
  for (let i = 0; i <= n1; i++) {
    for (let j = 0; j < m2; j++) {
      for (let k = 0; k < m1; k++) {
        res[i][j] += grid1[i][k] * grid2[k][j];
      }
    }
    return res;
  }

  return res;
}

const grid1 = [
  [1, 4],
  [5, 9],
];

const grid2 = [
  [1, 2, 8, 8, 4],
  [3, 3, 6, 5, 2],
];

console.log(matrixMultiplication(2, 2, 2, 5, grid1, grid2));
