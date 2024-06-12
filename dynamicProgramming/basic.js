/* 
? Those who cannot remember the past are condemened to repeat it ;


it is the optimization over plain recursion;
reuse the previous solution of subproblem ;when we have overlaping suub problem 

1. Memoisation ; top-down approach
2. Tabulation  ; bottom-up approach

1. Recursion: each function calls give rise to 2 more: therefore O(2^n)
2. Memoization: stores in an array: O(n)
   Subproblem results are stored in an array, ensuring that each subproblem is solved only once.
3. Tabulation: iterative approach and takes O(n) subproblems from the smallest to the largest.
RECURSION: Top down: We start from answer, go to the base case and then go back
MEMOIZATION: TOP DOWN:  avoids redundant calls done in recursion reducing time complexity
TABULATION IS: Bottom up: We start from the base case and we try to go to the required answer
*/

/*
 * Memoization ;;
 */

//!fibonacci number : 0,1,1,2,3,5,8,13,...

/* const firstfibonacci = (num) => {
  if (num <= 1 ) return num;
  return firstfibonacci(num - 1) + firstfibonacci(num - 2);
}; */
//? using memoization ;
//tc: Θ(n), auxilary-space :Θ(n) , recursion call stack space : O(n);
// it is easy to write with respect to tabulation ,
let memo = new Array(100).fill(null); // let suppose num ranges to 99, so making a memo array of n+1 length ;

const firstfibonacci = (num) => {
  if (num == 1 || num == 0) return num;

  if (memo[num] != null) return memo[num];

  memo[num] = firstfibonacci(num - 1) + firstfibonacci(num - 2);

  return memo[num];
};
// console.log(firstfibonacci(8));

//? using tabulation ;
//tc: Θ(n), auxilary -space :Θ(n) , no recursion call stck
// faster than memoization but complex code ;

/* const firstfibonacciTabu = (n) => {
  let dp = new Array(n + 1);

  dp[0] = 0;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
};
console.log(firstfibonacciTabu(8));
 */

//? in this we have not use the space (array) tc : Θ(n), sc: O(1)

const firstfibonacciTabu = (n) => {
  let curr;

  let prev = 1,
    prev2 = 0;

  for (let i = 2; i <= n; i++) {
    curr = prev + prev2;
    prev2 = prev;
    prev = curr;
  }

  return curr;
};
// console.log(firstfibonacciTabu(8));

/* 
! Longest common subsequence (lcs) **
given two strings find the length of the longest common subsequence string ;  

total subsequence : total 2^n ; 
"ABC" :"A", "B", "C", "AB", "AC" ,"BC" , "ABC" ; in subseqence order of the string remain same ; 

string1: "ABCDGH" ;
string2: "AEDFHR" ;
 HERE THE LONGEST SUBSEQUENCE IS "ADH"  LENGTH : 3 ;

 STRING1: XY ;
 STRING2: GW ;
 NO COMMON SUBSEQUENCE ;

*/
const longestCommonSubsequence = (s1, s2, m, n) => {
  //m,n are lengths
  if (m == 0 || n == 0) return 0;
  if (s1[m - 1] === s2[n - 1]) {
    return 1 + longestCommonSubsequence(s1, s2, m - 1, n - 1);
  } else {
    return Math.max(
      longestCommonSubsequence(s1, s2, m - 1, n),
      longestCommonSubsequence(s1, s2, m, n - 1)
    );
  }
};
let string1 = "ABCDGH";
let string2 = "AEDFHR";

// console.log(
//   longestCommonSubsequence(string1, string2, string1.length, string2.length)
// );

//? using memoization ;

let memo1 = Array.from({ length: string1.length + 1 }, () =>
  new Array(string2.length + 1).fill(null)
);

const lcsMemo = (s1, s2, m, n) => {
  if (memo1[m][n] !== null) {
    return memo1[m][n];
  }
  if (m == 0 || n == 0) memo1[m][n] = 0;
  else if (s1[m - 1] === s2[n - 1]) {
    memo1[m][n] = 1 + lcsMemo(s1, s2, m - 1, n - 1);
  } else
    memo1[m][n] = Math.max(
      lcsMemo(s1, s2, m - 1, n),
      lcsMemo(s1, s2, m, n - 1)
    );
  return memo1[m][n];
};
// console.log(lcsMemo(string1, string2, string1.length, string2.length));
