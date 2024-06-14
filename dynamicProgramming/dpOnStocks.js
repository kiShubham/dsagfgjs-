//dp on 1d
//dp on grid
// dp on subsequences;
// dp on strings

/// now dp on stocks

/*
special focus on how to space optimize ;

? problem: 
* Best Time to Buy and Sell Stock |(DP-35)
* Buy and Sell Stock - II|(DP-36)
* Buy and Sell Stocks III|(DP-37)
* Buy and Sell Stocks IV|(DP-38)
* Buy and Sell Stocks With Cooldown|(DP-39)
* Buy and Sell Stocks With Transaction Fee|(DP-40)

*/

/* 
* 121.Best Time to Buy and Sell Stock |(DP-35) .
? buy once sell once;

You are given an array prices where prices[i] is the price of a given stock on the ith day.
You want to maximize your profit by choosing a single day to buy one stock and 
choosing a different day in the future to sell that stock.
Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
*/
let prices = [7, 1, 5, 3, 6, 4];

function bstockI(prices) {
  let i = 1;
  let n = prices.length;
  let min = prices[0];
  let profit = 0;
  let maxProfit = 0;
  while (i < n) {
    profit = prices[i] - min;
    maxProfit = Math.max(profit, maxProfit);
    min = Math.min(min, prices[i]);
    i++;
  }
  return maxProfit;
}

// console.log(bstockI(prices));

/* 
*122. Best Time to Buy and Sell Stock II
? buy many times sell many times; we want total possible profit;

You are given an integer array prices where prices[i]
is the price of a given stock on the ith day.
On each day, you may decide to buy and/or sell the stock. 
You can only hold at most one share of the stock at any time. 
However, you can buy it then immediately sell it on the same day.
Find and return the maximum profit you can achieve.

*/
prices = [7, 1, 5, 3, 6, 4];
// prices = [1, 2, 3, 4, 5];

function bstockII(prices) {
  let i = 1;
  let n = prices.length;
  let profit = 0;
  let buy = prices[0];

  while (i < n) {
    if (prices[i] > buy) profit += prices[i] - buy;
    buy = prices[i]; // dp
    i++;
  }
  return profit;
}
// console.log(bstockII(prices));

// do with recursion

/* 
At any index i have to know wheter i have bought previously or not or sold ;
-let buy :tells us can we buy or not; 0 or 1 ; 0 cant buy , 1 can buy
-explore possibilities on that day : either we can buy or we will not , in each case we can have profit ;
-negative sign why:suppose we buy on day one (7) and we sell on day 3 (5) : profit: 5 - 7 = -2
  profit : 5-7 can be writtern as : (-7){// -prices[i]} + (+5) ;so when we are selling we are adding +num;
  and when we are buying we are adding (-7) to the answer (or think like ultimately we have to sell it so add -ve symbol)

*how to write recurrence/recursion :
1.Express everything in terms of (index,buy) ;buy tells us can we buy or not ;
2.explore possibilities on that day :
3. looking for profits ;take max of all profits ;
4. base case ;when we reach the last day the arry is ended, so return zero we cant make any profit now ;
  what is we have some stock left if pocket till  the last day  ,(-num) , but the market is closed,
  so profit will be zero ;

time complextiy : we have 2 option every day (arr[i]): 2^n
space : auxilary stock space :O(N) : we can optimize it apply memoization ;
changing parameter is index and buy , 
*/

function bstockIIRecursion(prices) {
  const n = prices.length;

  const fn = (index, buy) => {
    if (index === n) return 0;
    let profit = 0;

    if (buy) {
      //we are allowed to buy
      //* if we want buy on that day, buy is changed 1 -> 0 because we bought the stock ;
      let intrested = -prices[index] + fn(index + 1, 0);

      //* now if buy is 1 but we are not intrested in buying the stock ,not buyed so buy will remain same
      let notInterested = 0 + fn(index + 1, 1);

      profit = Math.max(intrested, notInterested);
    }
    //we are not allowed to buy,but we can sell
    else {
      //* if we want to sell ;buy is changed 0 -> 1 ;
      let intrested = prices[index] + fn(index + 1, 1);

      //* if we dont want to sell ;buy remains same;
      let notInterested = 0 + fn(index + 1, 0);

      profit = Math.max(intrested, notInterested);
    }
    return profit;
  };
  // index is 0 as we starting from day one ;and buy = 1;
  return fn(0, 1);
}
// console.log(bstockIIRecursion(prices));

// it will still have recursion call stack , auxilary stack space : O(n) to remove this we need tabulation  ;
function bstockII_Memoization(prices) {
  const n = prices.length;
  //*
  const memo = Array.from({ length: n }, () => Array(2).fill(null)); //[[null,null] ,..upto n]

  const fn = (index, buy) => {
    if (index === n) return 0;
    //*
    if (memo[index][buy] !== null) return memo[index][buy];

    let profit = 0;
    if (buy) {
      let interested = -prices[index] + fn(index + 1, 0);
      let notInterested = 0 + fn(index + 1, 1);

      profit = Math.max(interested, notInterested);
    } else {
      let interested = prices[index] + fn(index + 1, 1);
      let notInterested = 0 + fn(index + 1, 0);
      profit = Math.max(interested, notInterested);
    }
    //*
    return (memo[index][buy] = profit);
  };
  return fn(0, 1);
}

// console.log(bstockII_Memoization(prices));

/*

* Buy and Sell Stocks III|(DP-37)  && BSIV just count is argument , same logic 
You are given an array prices where prices[i] is the price of a given stock on the ith day.
Find the maximum profit you can achieve.
? You may complete at most two transactions.
Note: You may not engage in multiple transactions simultaneously 
(i.e., you must sell the stock before you buy again).

* Made a 3d dp array ; because we have three variable which is changing ,
 Index, buy and count
 possible range of index is n, buy is 2 (0 and 1) and count is 3 ( 2, 1 ,0 ) 

*/
//memoization has stack space ,Auxilary stack space ;

function bstockIII_Memoization(prices) {
  const n = prices.length;
  let count = 2;

  //*
  const memo = Array.from(
    { length: n },
    () => Array.from({ length: 2 }, () => Array(count + 1).fill(null)) // 2 possiblity of buy, 3possiblity of count :2,1,0
  );

  const fn = (index, buy, count) => {
    if (index === n) return 0;
    if (count === 0) return 0;
    //*
    if (memo[index][buy][count] !== null) return memo[index][buy][count];

    let profit = 0;
    if (buy) {
      let interested = -prices[index] + fn(index + 1, 0, count);
      let notInterested = 0 + fn(index + 1, 1, count);

      profit = Math.max(interested, notInterested);
    } else {
      let interested = prices[index] + fn(index + 1, 1, count - 1);
      let notInterested = 0 + fn(index + 1, 0, count);
      profit = Math.max(interested, notInterested);
    }
    //*
    return (memo[index][buy][count] = profit);
  };
  return fn(0, 1, count);
}
prices = [7, 1, 5, 3, 6, 4];
prices = [3, 3, 5, 0, 0, 3, 1, 4];
prices = [2, 1, 4, 5, 2, 9, 7];
prices = [2, 4, 1];
// console.log(bstockIII_Memoization(prices));

//* BSIV
/* 
You are given an integer array prices where prices[i] 
is the price of a given stock on the ith day, and an integer k.

Find the maximum profit you can achieve. 
* You may complete at most k transactions: 
i.e. you may buy at most k times and sell at most k times.

*/

function maxProfit(k, prices) {
  const n = prices.length;
  let count = k;

  const memo = Array.from(
    { length: n },
    () => Array.from({ length: 2 }, () => Array(count + 1).fill(null)) // 2 possiblity of buy, 3possiblity of count :2,1,0
  );

  const fn = (index, buy, count) => {
    if (index === n) return 0;
    if (count === 0) return 0;
    //*
    if (memo[index][buy][count] !== null) return memo[index][buy][count];

    let profit = 0;
    if (buy) {
      profit = Math.max(
        -prices[index] + fn(index + 1, 0, count),
        fn(index + 1, 1, count)
      );
    } else {
      profit = Math.max(
        prices[index] + fn(index + 1, 1, count - 1),
        fn(index + 1, 0, count)
      );
    }
    //*
    return (memo[index][buy][count] = profit);
  };
  return fn(0, 1, count);
}
// console.log(maxProfit(2, prices));
