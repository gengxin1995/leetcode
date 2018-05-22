/**
 * Given an array of strings, group anagrams together.
 *
 * Example:
 * Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
 * Output:
 * [
 * ["ate","eat","tea"],
 * ["nat","tan"],
 * ["bat"]
 * ]
 *
 * Note:
 * All inputs will be in lowercase.
 * The order of your output does not matter.
 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    var res = {};
    for (var i = 0; i < strs.length; i++) {
        var str = strs[i].split('').sort().join('');
        if (!res.hasOwnProperty(str)) {
            res[str] = [];
        }
        res[str].push(strs[i])
    }
    var out = [];
    for (var str in res) {
        out.push(res[str]);
    }
    return out;
};

var strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs));