/**
 * Say you have an array for which the ith element is the price of a given stock on day i.
 * Design an algorithm to find the maximum profit.
 * You may complete as many transactions as you like (ie, buy one and sell one share of the stock multiple times).
 * However, you may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).
 * Example
 * Given an example [2,1,2,0,1], return 2
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if (prices === null || prices.length <= 1) return 0;

  var res = 0;
  for (var i = 1; i < prices.length; i++) {
    var diff = prices[i] - prices[i - 1];
    if (diff > 0) res += diff;
  }

  return res;
};
