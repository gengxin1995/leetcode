var quickSort = function (nums, left, right) {
    if (right -left+1 < 2)
        return;
    var tl = left;
    var tr = right;
    var pos = nums[right];

    while (left < right) {
        while (left < right && nums[left] <= pos) {
            left++;
        }
        if (left < right && nums[left] > pos) {
            nums[right] = nums[left];
            right--;
        }
        while (left < right && nums[right] > pos) {
            right--;
        }
        if (left < right && nums[right] <= pos) {
            nums[left] = nums[right];
            left++;
        }
    }
    nums[left] = pos;
    quickSort(nums, tl, left - 1);
    quickSort(nums, left + 1, tr);

}

var nums = [5, 2, 18, 7, 22, 19];
quickSort(nums, 0, nums.length - 1);
console.log(nums);