/**
 * Say you have an array for which the ith element is the price of a given stock on day i.
 * Design an algorithm to find the maximum profit. You may complete at most two transactions.
 *
 * Example
 * Given an example [4,4,6,1,1,4,2,5], return 6.
 *
 * Note
 * You may not engage in multiple transactions at the same time
 * (ie, you must sell the stock before you buy again).
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if (prices === null || prices.length <= 1) return 0;
  var len = prices.length;

  var resultFront = [];
  resultFront[0] = 0;
  for (var i = 1, min = prices[0]; i < len; i++) {
    resultFront[i] = Math.max(resultFront[i - 1], prices[i] - min);
    min = Math.min(min, prices[i]);
  }

  var resultBack = [];
  resultBack[len - 1] = 0;
  for (var i = len - 2, max = prices[len - 1]; i >=0; i--) {
    resultBack[i] = Math.max(resultBack[i + 1], max - prices[i]);
    max = Math.max(max, prices[i]);
  }

  var result = 0;
  for (var i = 0; i < len; i++) {
    result = Math.max(result, resultFront[i] + resultBack[i]);
  }

  return result;
};
