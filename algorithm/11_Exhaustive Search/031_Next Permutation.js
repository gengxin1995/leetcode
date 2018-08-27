/**
 * Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.
 * If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).
 * The replacement must be in-place and use only constant extra memory.
 * Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.
 * 1,2,3 → 1,3,2
 * 3,2,1 → 1,2,3
 * 1,1,5 → 1,5,1
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  var len = nums.length;
  var pos = -1;

  //从后往前寻找索引满足nums[pos] < nums[pos + 1]
  for (var i = len - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      pos = i;
      break;
    }
  }

  //未找到表明当前排列已是最大，将其变为最小排列
  if (pos === -1) {
    reverse(nums, 0, len - 1);
    return;
  }

  //从后往前，找到第一个比nums[pos]大的数nums[l],即nums[pos] < nums[l]
  var l = len - 1;
  while (l > pos && nums[l] <= nums[pos]) l--;

  //交换nums[pos]与nums[l]
  var tmp = nums[l];
  nums[l] = nums[pos];
  nums[pos] = tmp;

  //反转pos + 1 ~ len - 1 之间的元素
  reverse(nums, pos + 1, len - 1);
};

function reverse(nums, start, end) {
  for (var i = start, j = end; i < j; i++, j--) {
    var tmp = nums[i];
    nums[i] = nums[j];
    nums[j] = tmp;
  }
}

var nums = [1,1,5];
nextPermutation(nums)
console.log(nums);
