/**
 * Given a list of integers, which denote a permutation.
 * Find the previous permutation in ascending order.
 *
 * Example
 * For [1,3,2,3] , the previous permutation is [1,2,3,3]
 * For [1,2,3,4] , the previous permutation is [4,3,2,1]
 *
 * Note
 * The list may contains duplicate integers.
 * @param nums
 */
var previousPermutation = function (nums) {
  var len = nums.length;
  var pos = -1;

  //从后往前找到满足nums[pos] > nums[pos + 1]
  for (var i = len - 2; i >= 0; i--) {
    if (nums[i] > nums[i + 1]) {
      pos = i;
      break;
    }
  }

  //未找到表明当前排列已是最小，将其变为最大排列
  if (pos === -1) {
    reverse(nums, 0, len - 1);
    return;
  }

  //从后往前，找到第一个比nums[pos]小的数nums[l]
  var l = len - 1;
  while (l > pos && nums[l] >= nums[pos]) l--;

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

var nums = [1,2,3,4];
previousPermutation(nums);
console.log(nums);
