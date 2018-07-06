/**
 * Given an integer array, find a subarray with sum closest to zero.
 * Return the indexes of the first number and last number.
 *
 * Example
 * Given [-3, 1, 1, -3, 5], return [0, 2], [1, 3], [1, 1], [2, 2] or [0, 4]
 *
 * Challenge
 * O(nlogn) time
 */

function Node(val, index) {
    this.val = val;
    this.index = index;
}

/**
 * @param nums: A list of integers
 * @return: A list of integers includes the index of the first number and the index of the last number
 */
const subarraySumClosest = function (nums) {
    var arr = [];
    var sum = 0;
    arr.push(new Node(0, 0));
    //遍历数组求得子数组和，并将其索引记录下
    for (var i = 0; i < nums.length; i++) {
        sum += nums[i];
        arr.push(new Node(sum, i + 1));
    }
    //对子数组和排序
    arr.sort(function (a, b) {
        return a.val - b.val;
    })
    var min = Infinity;
    var closest_index = 1;
    //逐个比较相邻两项差值的绝对值，返回差值绝对值最小的两项
    for (var i = 1; i < nums.length; i++) {
        var diff = Math.abs(arr[i].val - arr[i - 1].val);
        if (min > diff) {
            min = diff;
            closest_index = i;
        }
    }
    var left = Math.min(arr[closest_index - 1].index, arr[closest_index].index);
    var right = Math.max(arr[closest_index - 1].index, arr[closest_index].index) - 1;

    var res = [];
    res.push(left);
    res.push(right);
    return res;
};
var nums = [-3, 1, 1, -3, 5];
console.log(subarraySumClosest(nums));