/**
 * Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
 * You may assume NO duplicates in the array.
 *
 * Example
 * [1,3,5,6] , 5 → 2
 * [1,3,5,6] , 2 → 1
 * [1,3,5,6] , 7 → 4
 * [1,3,5,6] , 0 → 0
 *
 * Challenge
 * O(log(n)) time
 */

/**
 * @param A: an integer sorted array
 * @param target: an integer to be inserted
 * @return: An integer
 */
const searchInsert = function (A, target) {
    var start = -1,
        end = A.length;
    while (start + 1 < end) {
        var mid = ~~((start + end) / 2);
        if (A[mid] === target) {
            return mid;
        } else if (A[mid] < target) {
            start = mid;
        } else {
            end = mid;
        }
    }
    return start + 1;
}
var A = [1,3,5,6];
console.log(searchInsert(A, 0));