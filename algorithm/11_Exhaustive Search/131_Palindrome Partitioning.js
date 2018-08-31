/**
 * Given a string s, partition s such that every substring of the partition is a palindrome.
 * Return all possible palindrome partitioning of s.
 *
 * Example:
 * Input: "aab"
 * Output:
 * [
 * ["aa","b"],
 * ["a","a","b"]
 * ]
 */
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
  var result = [],
    path = [];
  dfs(s, path, result, 0);
  return result;
};

function dfs(s, path, result, start) {
  if (start === s.length) {
    var tmp = path.map(function (t) {
      return t;
    });
    result.push(tmp);
    return;
  }

  for (var i = start; i < s.length; i++) {
    if (isPalindrome(s, start, i)) {
      path.push(s.substring(start, i + 1));
      dfs(s, path, result, i + 1);
      path.pop();
    }
  }
}

function isPalindrome(s, start, end) {
  while (start < end && s[start] === s[end]) {
    start++;
    end--;
  }
  return start >= end;
}

var s = 'aab';
console.log(partition(s));
