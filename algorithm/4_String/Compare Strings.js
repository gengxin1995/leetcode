/**
 * Compare two strings A and B, determine whether A contains all of the characters in B.
 * The characters in string A and B are all Upper Case letters.
 *
 * Notice
 * The characters of B in A are not necessary continuous or ordered.
 *
 * Example
 * For A = "ABCD" , B = "ACD" , return true .
 * For A = "ABCD" , B = "AABC" , return false .
 */
var compareString = function (s, t) {
    var res = {};
    for (var i = 0; i < s.length; i++) {
        if (!res.hasOwnProperty(s.charAt(i))) {
            res[s.charAt(i)] = 0;
        }
        res[s.charAt(i)]++;
    }
    for (var i = 0; i < t.length; i++) {
        if (!res.hasOwnProperty(t.charAt(i))) {
            res[t.charAt(i)] = 0;
        }
        res[t.charAt(i)]--;
        if (res[t.charAt(i)] < 0) {
            return false;
        }
    }
    return true;
}

var s = 'ABCD', t = 'ACD';
//var s = 'ABCD', t = 'AABC';
console.log(compareString(s, t));