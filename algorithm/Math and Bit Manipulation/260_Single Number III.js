/**
 * Given an array of numbers nums, in which exactly two elements appear only once and all the other elements appear exactly twice.
 * Find the two elements that appear only once.
 *
 * Example:
 * Input:  [1,2,1,3,2,5]
 * Output: [3,5]
 *
 * Note:
 * The order of the result is not important. So in the above example, [5, 3] is also correct.
 * Your algorithm should run in linear runtime complexity. Could you implement it using only constant space complexity?
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    var len = nums.length;
    var aXORb = 0;
    //得到结果为a^b
    for (var i = 0; i < len; i++) {
        aXORb ^= nums[i];
    }
    //利用a^b的结果对原数组进分类
    //利用a^b不为0，则a^b的结果必存在某一二进制位不为0，将最低位的1提取出来
    var last1Bit = aXORb - (aXORb & (aXORb - 1));
    var single1 = 0, single2 = 0;
    //在last1Bit位上a和b必然相异，利用这一特性进行分组
    for (var i = 0; i < len; i++) {
        if ((last1Bit & nums[i]) === 0) {
            single1 ^= nums[i];
        } else {
            single2 ^= nums[i];
        }
    }
    var res = [];
    res.push(single1);
    res.push(single2);
    return res;
};
var nums = [1,2,1,3,2,5];
console.log(singleNumber(nums));