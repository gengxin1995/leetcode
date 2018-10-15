/**
 * Say you have an array for which the ith element is the price of a given stock on day i.
 * If you were only permitted to complete at most one transaction (ie, buy one and sell one share of the stock), design an algorithm to find the maximum profit.
 * Example
 * Given an example [3,2,3,1,2], return 1
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  var min = prices[0];
  var res = 0;

  for (var i = 1; i < prices.length; i++) {
    res = Math.max(res, prices[i] - min);
    min = Math.min(min, prices[i]);
  }

  return res;
};

var prices = [3,2,3,1,2];
console.log(maxProfit(prices));
