/**
 * Say you have an array for which the ith element is the price of a given stock on day i.
 *
 * Design an algorithm to find the maximum profit. You may complete as many transactions as you like (ie, buy one and sell one share of the stock multiple times). However, you may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).
 *
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var min = prices[0];
    var result = 0;

    for (var i = 1; i < prices.length; i++) {
        if (prices[i] > min) {
            result += prices[i] - min;
            min = prices[i];
        } else if (prices[i] < min) {
            min = prices[i];
        }
    }

    return result;
};