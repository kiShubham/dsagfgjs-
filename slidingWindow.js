/* 
*types:
? constant window k , Q.1
? longest subArray or subString with some < condition > , Q.2
? Number of subArray where some < condition > ,  ;560. Subarray Sum Equals K
? finding the maximum/shortest window with some <Condition >
*/
//*todo: 560. Subarray Sum Equals K leetcode

/* 
?pattern _ 1  

! Q.1 subArray with maximum sum ,window k  ;
*/
const arr = [-1, 2, 3, 3, 4, -1, 5];

const maximumSumofWindow = (arr, k) => {
  let l = 0,
    r = 0;
  let sum = 0;
  let maxSum = Number.MIN_VALUE;
  let n = arr.length;
  while (r <= n - 1) {
    // when the window size become more than k ; its zero based indexing so taking k-1
    if (r - l > k - 1) {
      sum = sum - arr[l];
      l++;
    }
    sum = sum + arr[r];
    r++;
    maxSum = Math.max(sum, maxSum);
  }

  return maxSum;
};
// console.log(maximumSumofWindow([-1, 2, 3, 3, 4, 5, -1], 4));

/* 
?pattern 2


! Q.2 longest subarray with sum <=k ;
*/
[-1, 2, 3, 3, 4, -1, 5];
const longestSubArray = (arr, k) => {
  let l = 0,
    r = 0;
  let sum = 0;
  let len = 0;
  let res = { l: 0, r: 0 };
  let n = arr.length;
  while (r < n) {
    sum = sum + arr[r];

    //shrink the window
    while (sum > k && l <= r) {
      sum = sum - arr[l];
      l = l + 1;
    }

    if (sum <= k && r - l + 1 > len) {
      len = r - l + 1; // maximum len
      res = { l: l, r: r }; // r + 1 to make the end index exclusive
    }

    r = r + 1;
  }
  return res;
};

// console.log(longestSubArray(arr, 5)); //[ -1, 2, 3 ]

/*
? pattern3

!whenever , find the no. of subarray with sum === k ;
when its a constant condition like  ,sum === k , its is very difficult . so how ?

answer will be 
*{ no. of subarray with sum <= k } - { no. of subarray with sum <= k-1 }  

*/
/*
? pattern4

! whenever , we find the minimum window , 
we will try to shrink it further till its fulfilling the < Condition >
so the shortest fulfiling the condtion will be the answer ;
*/

/* 
! Q.3 maximum points we can achive from k cards ;
*1423. Maximum Points You Can Obtain from Cards
the array is rotated array , so we can pick from back and front simaultaneously
consicutive 
In one step, you can take one card from the beginning or from the end of the row. You have to take exactly k cards.
*/

let cards = [6, 2, 3, 4, 7, 2, 1, 7, 1, 7, 7, 7, 5];

const maxPoints = (cards, k) => {
  let l = 0,
    r = k - 1, // 0 based indexing
    points = 0,
    maxPoints = 0;
  let firstSum = 0;
  const n = cards.length;

  for (let i = l; i <= r; i++) {
    firstSum += cards[i];
    points = firstSum;
    maxPoints = Math.max(points, maxPoints);
  }
  for (let i = 0; i <= k - 1; i++) {
    points = points - cards[k - 1 - i] + cards[n - 1 - i];
    maxPoints = Math.max(points, maxPoints);
  }

  console.log(maxPoints);

  return maxPoints;
};

let cards1 = [90, 51, 34, 9, 94, 38, 2, 9, 34, 68, 19, 77, 74, 62, 55, 17];
// console.log(maxPoints(cards1, 1)); //90;

/* 
! Q. Longest Substring without repeating characters ;
*/
let s = "cadbZabcd";

// use set ;
var lengthOfLongestSubstring = function (s) {
  let n = s.length;
  let l = 0;
  let r = 0;
  const set1 = new Set();
  let maxlen = 0;
  let len = 0;
  // set1.add(s[r]);
  // r++;

  while (r < n) {
    while (set1.has(s[r])) {
      set1.delete(s[l]);
      l++;
    }
    set1.add(s[r]);
    r++;
    len = set1.size;
    maxlen = Math.max(len, maxlen);
  }
  return maxlen;
};
// console.log(lengthOfLongestSubstring(s));

const longestSubstring = (str) => {
  let memo = {};
  let i = 0;
  let maxLength = 0;

  for (let j = 0; j < str.length; j++) {
    if (memo[str[j]] !== undefined && memo[str[j]] >= i) {
      i = memo[str[j]] + 1;
    }
    memo[str[j]] = j;
    maxLength = Math.max(maxLength, j - i + 1);
  }
  console.log(memo);

  return maxLength;
};

// let s = "cadbZabcd";
// console.log(longestSubstring(s)); // Expected output: 5 (the longest substring is "cadbZ")

//*using hashMap
const longestSubstring_hashMap = (str) => {
  let l = 0,
    r = 0;
  let maxlen = 0;
  let hydra = new Map();
  const n = str.length;
  while (r < n) {
    if (hydra.has(str[r])) {
      // find its index , update value of l next to it
      l = Math.max(l, hydra.get(str[r]) + 1); // c is in first , if not checked l will become 1 ;

      hydra.set(str[r], r);
    } else {
      hydra.set(str[r], r);
    }

    maxlen = Math.max(maxlen, r - l + 1);

    r++;
  }
  return maxlen;
};

// console.log(longestSubstring_hashMap(s));

/*
 * 1004. Max Consecutive Ones III
- Given a binary array nums and an integer k, 
return the maximum number of consecutive 1's in the array
 if you can flip at most k 0's. 

  Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
  Output: 6
 */

let ones = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0];
ones = [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1];

const maxConsecutive = (arr, k) => {
  let l = 0,
    r = 0;
  let zerosCount = 0;
  let maxlen = 0;
  let zeros = new Map();

  let n = arr.length;
  while (r < n) {
    if (arr[r] === 0) {
      let numberofZeros = zeros.size;
      //zeros.set(no.ofzeroth:indexofr)
      zeros.set(numberofZeros === 0 ? 1 : numberofZeros + 1, r);
      zerosCount++;
    }
    if (zerosCount > k) {
      let tempKey = zeros.size - k;
      l = zeros.get(tempKey) + 1;
    }

    // console.log(r, l);
    maxlen = Math.max(maxlen, r - l + 1);
    r++;
  }
  return maxlen;
};
// console.log(maxConsecutive(ones, (k = 3)));

const maxConsecutiveOtherway = (arr, k) => {
  let l = 0,
    r = 0;
  let maxlen = 0,
    len = 0;
  let zeros = 0;
  let n = arr.length;
  while (r < n) {
    if (arr[r] === 0) zeros++;
    if (zeros > k) {
      if (arr[l] === 0) zeros--;
      l++;
    }
    if (zeros <= k) len = r - l + 1;
    maxlen = Math.max(maxlen, len);
    r++;
  }
  return maxlen;
};

// console.log(maxConsecutiveOtherway(ones, 3));

/*
 * Fruit into Baskets

You are visiting a farm that has a single row of fruit trees arranged from left to right.
 The trees are represented by an 
? integer array fruits of size N,  where fruits[i]  is the type of fruit the ith tree produces.
You want to collect as much fruit as possible.
 However, the owner has some strict rules that you must follow :

?You only have two baskets, and each basket can only hold a single type of fruit. 
There is no limit on the amount of fruit each basket can hold.
Starting from any tree of your choice, you must pick exactly one fruit from every tree 
(including the start tree) while moving to the right.
 The picked fruits must fit in one of the baskets.)
Once you reach a tree with fruit that cannot fit in your baskets, you must stop.
Given the integer array fruits, return the maximum number of fruits you can pick
 */
let fruits = [3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4];

const basketBrute = (arr) => {
  let maxlen = 0;
  len = 0;
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    let basket = new Set();
    for (let j = i; j < n; j++) {
      basket.add(arr[j]);
      if (basket.size <= 2) {
        maxlen = Math.max(maxlen, j - i + 1);
      } else break;
    }
  }
  return maxlen;
};

console.log(basketBrute(fruits)); // 1, 2, 1, 1, 2 // 5

// tc : r moves till n ; l moves till n ;->O(2n) ; sc ->O(3) three elements at max in map ;
//size of map is 3 (exteremly small) constant ;
const basketBetter = (arr) => {
  let l = 0,
    r = 0;
  let maxlen = 0;
  let n = arr.length;
  let basket = new Map();

  while (r < n) {
    basket.set(
      arr[r],
      basket.get(arr[r]) === undefined ? 1 : basket.get(arr[r]) + 1
    );
    if (basket.size > 2) {
      while (basket.size > 2) {
        basket.set(arr[l], basket.get(arr[l]) - 1);
        if (basket.get(arr[l]) === 0) basket.delete(arr[l]);
        l++;
      }
    }
    if (basket.size <= 2) {
      maxlen = Math.max(maxlen, r - l + 1);
    }
    r++;
  }
  return maxlen;
};
fruits = [0, 1, 2, 2, 2, 2];
console.log(basketBetter(fruits));

//tc :  O(N)
const basketOptimal = (arr) => {
  let l = 0;
  let r = 0;
  let maxLen = 0;
  let n = arr.length;
  let basket = new Map();
  while (r < n) {
    basket.set(
      arr[r],
      basket.get(arr[r]) === undefined ? 1 : basket.get(arr[r]) + 1
    );

    if (basket.size > 2) {
      basket.set(arr[l], basket.get(arr[l]) - 1);
      if (basket.get(arr[l]) === 0) basket.delete(arr[l]);
      l++;
    }

    if (basket.size <= 2) maxLen = Math.max(maxLen, r - l + 1);
    r++;
  }
  return maxLen;
};
console.log(basketOptimal(fruits));
