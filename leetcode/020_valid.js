/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  var left = ['(', '{', '['];
  var right = [')', '}', ']'];
  var stack = [];

  stack.push(s[0]);
  for (var i = 1; i < s.length; i++) {
    if (right.indexOf(s[i]) > -1 && right.indexOf(s[i]) === left.indexOf(stack[stack.length - 1])) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }

  if (stack.length === 0) {
    return true;
  } else {
    return false;
  }
};

var s = '([)]';
console.log(isValid(s));
