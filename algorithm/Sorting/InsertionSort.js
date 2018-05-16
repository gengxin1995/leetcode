/**
 * 平均情况和最坏情况的时间复杂度为O(n^2)，最好情况的时间复杂度为O(n)
 * 空间复杂度为O(1)
 * @param arr
 */
function insertionSort(arr) {
    var len = arr.length;
    for (var i = 1; i < len; i++) {
        var j = i, key = arr[i];
        while (j > 0 && arr[j - 1] > key) {
            arr[j] = arr[j - 1];
            j--;
        }
        arr[j] = key;
    }
}

var arr = [5, 2, 18, 7, 22, 19];
insertionSort(arr);
console.log(arr);