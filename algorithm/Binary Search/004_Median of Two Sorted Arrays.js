/**
 * nums1[k / 2 - 1]<=nums2[k / 2 - 1],则nums1和nums2合并后的第K大数必包含nums1[0]~nums1[k / 2 - 1]
 * 若k / 2 - 1超出了nums1的长度，则必取nums2[0]~nums2[k / 2 - 1]
 * 时间复杂度为O(log(m+n))
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var len1 = nums1.length,
        len2 = nums2.length;
    if (len1 === 0 && len2 === 0) {
        return -1.0
    }
    var len = len1 + len2;
    if (len % 2 === 0) {
        return (findKth(nums1, 0, nums2, 0, len / 2) + findKth(nums1, 0, nums2, 0, len / 2 + 1)) / 2;
    } else {
        return findKth(nums1, 0, nums2, 0, ~~(len/2) + 1);
    }
};

function findKth(nums1, index1, nums2, index2, k) {
    var len1 = nums1.length,
        len2 = nums2.length;
    if (index1 > len1 - 1) {
        return nums2[index2 + k - 1];
    }
    if (index2 > len2 - 1) {
        return nums1[index1 + k - 1];
    }
    if (k === 1) return Math.min(nums1[index1], nums2[index2]);
    var key1 = Infinity,
        key2 = Infinity;
    if (index1 + ~~(k/2) - 1 < len1)
        key1 = nums1[index1 + ~~(k / 2) - 1];
    if (index2 + ~~(k/2) - 1 < len2)
        key2 = nums2[index2 + ~~(k / 2) - 1];
    if (key1 > key2) {
        return findKth(nums1, index1, nums2, index2 + ~~(k / 2), k - ~~(k / 2));
    } else {
        return findKth(nums1, index1 + ~~(k / 2), nums2, index2, k - ~~(k / 2));
    }
}

var nums1 = [1, 3],
    nums2 = [2];
console.log(findMedianSortedArrays(nums1, nums2));