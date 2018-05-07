/**
 * left-child: i * 2 + 1
 * right-child: i * 2 + 2
 * parent: Math.floor((i-1)/2)
 * @param nums
 */

var heapSort = function (nums) {
    var len = nums.length;

    //建堆
    for (var i = ~~((len-1)/2); i >= 0; i--) {
        heapify(nums, i, len);
    }

    for (var j = len - 1; j >=1; j--) {
        swap(nums, 0, j);
        heapify(nums, 0, --len);
    }
}

function heapify(nums, i, len) {
    var left = i * 2 + 1,
        right = i * 2 + 2,
        largest = i;
    if (left < len && nums[left] > nums[largest]) {
        largest = left;
    }
    if (right < len && nums[right] > nums[largest]) {
        largest = right;
    }
    if (largest !== i) {
        swap(nums, i, largest);
        heapify(nums, largest, len);
    }
}

function swap(nums, i, j) {
    var tmp = nums[i];
    nums[i] = nums[j];
    nums[j] = tmp;
}

var nums = [5, 2, 18, 7, 22, 19];
heapSort(nums);
console.log(nums);