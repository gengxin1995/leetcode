/**
 * 最好情况、最坏情况和平均时间复杂度为O(nlogn)
 * 空间复杂度为O(n)
 * @param arr
 * @returns {*}
 */
function mergeSort(arr) {
    var len = arr.length;
    if (len < 2) {
        return arr;
    }
    var mid = Math.floor(len / 2);
    var left = arr.slice(0, mid);
    var right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    var result = [];
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    while (left.length) {
        result.push(left.shift());
    }
    while (right.length) {
        result.push(right.shift());
    }
    return result;
}

var arr = [5, 2, 18, 7, 22, 19];
var res = mergeSort(arr);
console.log(res);