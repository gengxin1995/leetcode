/**
 * Given n pieces of wood with length L[i] (integer array). Cut them into small pieces to guarantee you could have equal or more than k pieces with the same length. What is the longest length you can get from the n pieces of wood? Given L & k, return the maximum length of the small pieces.
 * You couldn't cut wood into float length.
 * If you couldn't get >= k pieces, return 0.
 *
 * Example
 * For L=[232, 124, 456], k=7, return 114.
 *
 * Challenge
 * O(n log Len), where Len is the longest length of the wood.
 */

/**
 * @param L: Given n pieces of wood with length L[i]
 * @param k: An integer
 * @return: The maximum length of the small pieces
 */
const woodCut = function (L, k) {
    var start = 0,
        end = 0;
    for (var i = 0; i < L.length; i++) {
        if (L[i] > end) {
            end = L[i] + 1;
        }
    }

    while (start + 1 < end) {
        var mid = ~~((start + end) / 2);
        if (C(L, k, mid)) {
            start = mid;
        } else {
            end = mid;
        }
    }
    return start;
}

function C(L, k, mid) {
    var count = 0;
    for (var i = 0; i < L.length; i++) {
        count += ~~(L[i] / mid);
    }
    return count >= k;
}

var L=[232, 124, 456];
console.log(woodCut(L, 7))