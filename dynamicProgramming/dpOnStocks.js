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
prices = [1, 2, 3, 4, 5];

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
console.log(bstockII(prices));
