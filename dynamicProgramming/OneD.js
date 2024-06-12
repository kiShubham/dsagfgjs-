/**
 * 
 *! You are climbing a staircase. It takes n steps to reach the top.
`*  Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 */
//1D :
// count the number of ways (or all possible ways): apply recursion
// multiple ways to do it , give maximum ,give minimum  or best way : apply recursion

//step
//1.try to represent the problem in terms of index ;
//2.do all possible stuff on that index according to the problem statement
//3.sum of all stuff->count all the ways ;minimum of all stuff-> find minimum, same for best ,maximum
// ! climbing stairs ;
// total number of stairs is: n
// we need to find out total number of ways

//*pure recursion ;
function stairs(n) {
  if (n === 0) return 1;
  else if (n === 1) return 1;

  oneStep = stairs(n - 1);
  twoStep = stairs(n - 2);
  //so we need total number of ways
  return oneStep + twoStep;
}

// console.log(stairs(10));

//* applying memoization
function stairsTabu(n) {
  let dp = new Array(n + 1).fill(null);
  dp[0] = 1;
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}
// console.log(stairsTabu(10));

function stairsMemo(n) {
  const memoization = (n, memo = {}) => {
    if (n === 0) return 1; // Base case: 1 way to reach the 0th step
    else if (n === 1) return 1; // Base case: 1 way to reach the 1st step

    // Check if the result for 'n' steps is already in the memo object
    if (n in memo) {
      return memo[n]; // Return the stored value if found
    }

    // Calculate the number of ways for n-1 and n-2 steps recursively
    const oneStep = stairs(n - 1, memo);
    const twoStep = stairs(n - 2, memo);

    // Store the result for 'n' steps in the memo object
    memo[n] = oneStep + twoStep;

    // Return the total number of ways
    return memo[n];
  };
  return memoization(n, {});
}
// console.log(stairsMemo(10));

//! frog jumping ;
/* 
frog wants to climb from the 0th stair to the (n-1)th stair.
At a time the frog can climb either one or two steps. 
A height[N] array is also given. Whenever the frog jumps
from stair i to stair j, the energy consumed in the jump 
is abs(height[i]- height[j]), where abs() means the absolute difference.
return the 
* "minimum energy"
that can be used by the 
frog to jump from stair 0 to stair N-1.
*/
/* 

steps to write recursion
1.express the problem in terms of index 
2. do all stuff on that index 
3. its asking minimum energy , so take minimal of all stuff;

*/
/* 
so we need to go f(n-1) , minimum energy requires to reach n-1 stair from 0 index;
we can assume a array with 0 based index till n-1 index, 
so what will be the cost of reaching oth index, that will be 0
because we are standing at 0 (oth energy-oth energy = 0);
therefor at index 0 energy diff is 0 ;n==0 rtn 0;

*/

// we are writing fn as we on stair n-1 going towards 0 ;top to bottom

function frogJump(height, index) {
  if (index === 0) return 0;

  let right = Infinity;
  let left = Infinity;
  if (index >= 1)
    left =
      Math.abs(height[index] - height[index - 1]) + frogJump(height, index - 1);
  if (index >= 2) {
    right =
      Math.abs(height[index] - height[index - 2]) + frogJump(height, index - 2);
  }
  return Math.min(left, right);
}
// console.log(frogJump([30, 10, 60, 10, 60, 50], 5));

function frogMemo(n, arr) {
  const memoization = (n, arr, memo) => {
    if (n == 0) return 0;

    if (n in memo) return memo[n];

    let single = memoization(n - 1, arr, memo) + Math.abs(arr[n] - arr[n - 1]);

    let double = Infinity;
    if (n > 1)
      double = memoization(n - 2, arr, memo) + Math.abs(arr[n] - arr[n - 2]);

    memo[n] = single + double;

    return memo[n];
  };
  return memoization(n, arr, {});
}

function frogMemo_I(n, arr, dp) {
  if (n == 0) return 0;
  if (dp[n] !== null) return dp[n];

  let doubleJump = Infinity;
  //now do all stuff at index ;
  let singleJump = frogMemo_I(n - 1) + Math.abs(arr[n] - arr[n - 1]);
  if (n >= 2) {
    doubleJump = frogMemo_I(n - 2) + Math.abs(arr[n] - arr[n - 2]);
  }
  return (dp[n] = Math.min(singleJump, doubleJump));
}
let dp = new Array(7).fill(null);
console.log(frogMemo_I(5, [30, 10, 60, 10, 60, 50], dp));

function minEnergyForFrog(n, arr) {
  // Base case: No energy needed to reach the 0th stone
  if (n === 0) return 0;

  // Initialize minimum energy for single and double jumps (assuming positive values)
  let singleJump = Infinity;
  let doubleJump = Infinity;
  if (n >= 1) {
    // Handle case where n is 1 (single jump only)
    singleJump = Math.abs(arr[n] - arr[n - 1]);
  }
  if (n >= 2) {
    doubleJump = Math.abs(arr[n] - arr[n - 2]) + minEnergyForFrog(n - 2, arr);
  }
  // Return the minimum energy required (single or double jump)
  return Math.min(singleJump, doubleJump);
}

// console.log(minEnergyForFrog(6, [30, 10, 60, 10, 60, 50]));
