/**
 * Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, determine if s can be segmented into a space-separated sequence of one or more dictionary words.

 Note:

 The same word in the dictionary may be reused multiple times in the segmentation.
 You may assume the dictionary does not contain duplicate words.
 Example 1:

 Input: s = "leetcode", wordDict = ["leet", "code"]
 Output: true
 Explanation: Return true because "leetcode" can be segmented as "leet code".
 Example 2:

 Input: s = "applepenapple", wordDict = ["apple", "pen"]
 Output: true
 Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
 Note that you are allowed to reuse a dictionary word.
 Example 3:

 Input: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
 Output: false
 */

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  if (s === null || s.length === 0) return true;
  if (wordDict === null || wordDict.length === 0) return false;

  var max_len = 0;
  for (var i in wordDict) {
    max_len = Math.max(max_len, wordDict[i].length);
  }

  var can_break = [];
  can_break[0] = true;
  for (var i = 1; i <= s.length; i++) {
    for (var j = i - 1; j >=0; j--) {
      if (i - j > max_len) break;
      var word = s.substring(j, i);
      if (can_break[j] && wordDict.indexOf(word) > -1) {
        can_break[i] = true;
        break;
      }
    }
  }

  return !!can_break[s.length];
};

var s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"];
console.log(wordBreak(s, wordDict));
