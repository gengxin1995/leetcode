/**
 * There are two sorted arrays nums1 and nums2 of size m and n respectively.
 *
 * Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).
 *
 * Example 1:
 * nums1 = [1, 3]
 * nums2 = [2]
 * The median is 2.0
 *
 * Example 2:
 * nums1 = [1, 2]
 * nums2 = [3, 4]
 * The median is (2 + 3)/2 = 2.5
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var nums = nums1.concat(nums2);
    // nums.sort(function (a, b) {
    //     return a-b;
    // });
    sort(nums);
    var len = nums.length;

    if (len % 2 === 1) {
        return nums[~~(len/2)];
    } else {
        return (nums[len/2-1] + nums[len/2])/2;
    }
};

function sort(nums) {

    for (var i = 0; i < nums.length-1; i++) {
        for (var j = i+1; j < nums.length; j++) {
            if (nums[i] > nums [j]) {
                var tmp = nums[i];
                nums[i] = nums[j];
                nums[j] = tmp;
            }
        }
    }
    return nums;
}
var num1 = [1, 2];
var num2 = [3, 4];
console.log(findMedianSortedArrays(num1, num2));