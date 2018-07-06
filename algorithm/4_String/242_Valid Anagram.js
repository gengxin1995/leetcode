/**
 * Given two strings s and t , write a function to determine if t is an anagram of s.
 *
 * Example 1:
 * Input: s = "anagram", t = "nagaram"
 * Output: true
 *
 * Example 2:
 * Input: s = "rat", t = "car"
 * Output: false
 *
 * Note:
 * You may assume the string contains only lowercase alphabets.
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
//解法一：对字符串排序后比较两个字符串是否相同
//时间复杂度是排序算法的时间复杂度，空间复杂度是O(n)
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    var s1 = s.split('').sort().join('');
    var t1 = t.split('').sort().join('');

    return s1 === t1;
};

function compare(a, b) {
    return a.localeCompare(b);
}
//解法二：判断两个字符串中各字符出现的频次是否相同
//时间复杂度是O(n)，空间复杂度是O(1)
var isAnagram1 = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    var res = {};
    for (var i = 0; i < s.length; i++) {
        if (!res.hasOwnProperty(s.charAt(i))) {
            res[s.charAt(i)] = 0;
        }
        res[s.charAt(i)]++;
        if (!res.hasOwnProperty(t.charAt(i))) {
            res[t.charAt(i)] = 0;
        }
        res[t.charAt(i)]--;
    }

    for (var i = 0; i < t.length; i++) {
        if (res[t.charAt(i)] !== 0) {
            return false;
        }
    }
    return true;
};

var s = "anagram", t = "nagaram";
//var s = "rat", t = "car"
console.log(isAnagram(s, t));