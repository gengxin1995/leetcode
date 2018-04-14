/**
 * The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)
 *
 * P   A   H   N
 * A P L S I I G
 * Y   I   R
 *
 * And then read line by line: "PAHNAPLSIIGYIR"
 *
 * Write the code that will take a string and make this conversion given a number of rows:
 *
 * string convert(string text, int nRows);
 *
 * convert("PAYPALISHIRING", 3) should return "PAHNAPLSIIGYIR".
 */

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    var result = new Array();
    var len = s.length;
    var i, j, k;
    for (i = 0; i < numRows; i++) {
        result[i] = new Array();
    }
    i = 0;
    while (i < len) {
        for (j = 0; j < numRows && i < len; j++) {
            result[j].push(s[i++]);
        }
        for (k = numRows-2; k >= 1 && i < len; k--) {
            result[k].push(s[i++]);
        }
    }

    var tmp = '';

    for (i = 0; i < numRows; i++) {
        var len1 = result[i].length;
        for (j = 0; j <= len1; j++) {
            if (result[i][j] !== undefined) {
                tmp += result[i][j];
            }
        }
    }

    return tmp;
};

console.log(convert("PAYPALISHIRING", 3));