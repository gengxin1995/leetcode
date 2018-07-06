/**
 * Given a string and an offset, rotate string by offset. (rotate from left to right)
 *
 * Example
 * Given "abcdefg" .
 * offset=0 => "abcdefg"
 * offset=1 => "gabcdef"
 * offset=2 => "fgabcde"
 * offset=3 => "efgabcd"
 * Challenge
 * Rotate in-place with O(1) extra memory.
 */

/**
 * @param str
 * @param offset
 */
var rotateString = function (str, offset) {
    var arr = str.split('');
    for (var i = 0; i < offset; i++) {
        arr.unshift(arr.pop());
    }
    return arr.join('');
}

var str = "abcdefg";
console.log(rotateString(str, 3));