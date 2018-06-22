/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var res = [], add = 0, len = digits.length;
    digits[len - 1]++;

    for (var i = len - 1; i >= 0; i--) {
        var sum = digits[i] + add;
        res[i] = sum % 10;
        add = ~~(sum / 10);
    }
    if (add) {
        res.unshift(1);
    }
    return res;
};

var digits = [9, 9, 9];

console.log(plusOne(digits));