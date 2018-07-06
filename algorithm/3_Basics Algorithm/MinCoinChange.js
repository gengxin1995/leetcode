function MinCoinChange(coins) {
    var coins = coins;
    var cache = {};

    this.makeChange = function (amount) {
        var self = this;
        if (!amount) {
            return [];
        }
        if (cache[amount]) {
            return cache[amount];
        }

        var min = [], newMin, newAmount;
        for (var i = 0; i < coins.length; i++) {
            var coin = coins[i];
            newAmount = amount - coin;
            if (newAmount >= 0) {
                newMin = self.makeChange(newAmount);
            }
            if (newAmount >= 0 && (newMin.length < min.length - 1 || !min.length) && (newMin.length || !newAmount)) {
                min = [coin].concat(newMin);
                console.log('new Min ' + min + ' for ' + amount);
            }
        }
        return (cache[amount] = min);
    }
}

var minCoinChange = new MinCoinChange([1, 3, 5]);
console.log(minCoinChange.makeChange(11));

/**
 * 最少硬币找零
 * 转移方程：dp(i) = min{dp[i - coin[j] + 1}
 * @param values
 * @param total
 * @returns {Array}
 */
function makeChange(values, total) {
    var coinUsed = [],
        coinCache = [];
    coinUsed[0] = 0;
    coinCache[0] = 0;
    for (var i = 1; i <= total; i++) {
        var minCoin = i;
        var lastin = 0;
        for (var j = 0; j < values.length; j++) {
            if (values[j] <= i) {
                if (coinUsed[i - values[j]] + 1 <= minCoin && (i == values[j] || coinCache[i - values[j]] != 0)) { //同时判断i-coin[j]是否能找的开
                    minCoin = coinUsed[i - values[j]] + 1;
                    lastin = values[j];
                }
            }
        }
        coinUsed[i] = minCoin;
        coinCache[i] = lastin;
    }

    var res = [];

    while (total > 0) {
        res.push(coinCache[total]);
        total -= coinCache[total];
    }

    return res;
}

var values = [1, 3, 5];
var res = makeChange(values, 11);
console.log(res);