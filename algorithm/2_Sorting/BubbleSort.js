/**
 * 平均情况和最坏情况的时间复杂度为O(n^2)，最好情况的时间复杂度为O(n)
 * 空间复杂度为O(1)
 * @param arr
 */
function bubbleSort(arr) {
    var len = arr.length;
    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }
}

function bubbleSort1(arr) {
    var i = arr.length - 1;
    while (i > 0) {
        var pos = 0;
        for (var j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                pos = j;
                swap(arr, j, j + 1);
            }
        }
        i = pos;
    }
}

function bubbleSort2(arr) {
    var tail = arr.length - 1;
    for (var i = 0; i < tail; tail--) {
        for (var j = tail; j > i; j--) {
            if (arr[j] < arr[j - 1]) {
                swap(arr, j - 1, j);
            }
        }
        i++;
        for (var j = i; j < tail; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }
}

function swap(arr, i, j) {
    var tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

var arr = [5, 2, 18, 7, 22, 19];
bubbleSort2(arr)
console.log(arr);