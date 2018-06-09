/**
 * Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:
 * Integers in each row are sorted from left to right.
 * The first integer of each row is greater than the last integer of the previous row.
 *
 * Example 1:
 * Input:
 * matrix = [
 * [1,   3,  5,  7],
 * [10, 11, 16, 20],
 * [23, 30, 34, 50]
 * ]
 * target = 3
 * Output: true
 *
 * Example 2:
 * Input:
 * matrix = [
 * [1,   3,  5,  7],
 * [10, 11, 16, 20],
 * [23, 30, 34, 50]
 * ]
 * target = 13
 * Output: false
 */

/**
 * 时间复杂度为O(log(mn))
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    var m = matrix.length;
    if (m === 0) return false;
    var n = matrix[0].length;
    if (n === 0) return false;
    var start = -1,
        end = m * n;
    while (start + 1 < end) {
        var mid = ~~((start + end) / 2);
        var i = ~~(mid / n),
            j = mid % n;
        if (matrix[i][j] === target) {
            return true;
        } else if (matrix[i][j] < target) {
            start = mid;
        } else {
            end = mid;
        }
    }
    return false;
};

// var matrix = [
//     [1,   3,  5,  7],
//     [10, 11, 16, 20],
//     [23, 30, 34, 50]
//     ];
var matrix = [[1,1]];
console.log(searchMatrix(matrix, 2));














