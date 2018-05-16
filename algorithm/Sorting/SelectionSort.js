/**
 * 最好情况、最坏情况和平均时间复杂度均为O(n^2)，空间复杂度O(1)
 * @param arr
 */
function selectionSort(arr) {
    var len = arr.length;
    var min;
    for (var i = 0; i < len; i++) {
        min = i;
        for (var j = i; j < len; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        swap(arr, i, min);
    }
}

function swap(arr, i, j) {
    var tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

var arr = [5, 2, 18, 7, 22, 19];
selectionSort(arr);
console.log(arr);