/**
 * left: i * 2 + 1
 * right: i * 2 +2
 * parent: Math.floor((i-1)/2)
 * @param arr
 */
function heapSort(arr) {
    var len = arr.length;
    build_maxHeap(arr, len);

    for (var i = len - 1; i >= 0; i--) {
        swap(arr, 0, i);
        maxHeapify(arr, 0, --len);
    }
}

function build_maxHeap(arr, len) {
    for (var i = ~~((len - 1) / 2); i >= 0; i--) {
        maxHeapify(arr, i, len);
    }
}

function maxHeapify(arr, i, len) {
    var left = i * 2 + 1,
        right = i * 2 + 2,
        largest = i;
    if (left < len && arr[left] > arr[largest]) {
        largest = left;
    }
    if (right < len && arr[right] > arr[largest]) {
        largest = right;
    }
    if (largest !== i) {
        swap(arr, largest, i);
        maxHeapify(arr, largest, len);
    }
}

function swap(arr, i, j) {
    var tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}


var arr = [5, 2, 18, 7, 22, 19];
heapSort(arr);
console.log(arr);