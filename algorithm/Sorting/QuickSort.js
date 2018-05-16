function quickSort(arr, l, r) {
    if (r <= l) {
        return;
    }
    var left = l;
    var right = r;
    var pos = arr[right];
    while (left < right) {
        while (left < right && arr[left] <= pos) {
            left++;
        }
        if (left < right) {
            arr[right] = arr[left];
            right--;
        }
        while (left < right && arr[right] > pos) {
            right--;
        }
        if (left < right) {
            arr[left] = arr[right];
            left++;
        }
    }
    arr[left] = pos;
    quickSort(arr, l, left - 1);
    quickSort(arr, left + 1, r);
}

var arr = [5, 2, 18, 7, 22, 19, 32, 16, 24];
quickSort(arr, 0, arr.length - 1);
console.log(arr);