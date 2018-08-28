/**
 * Given a permutation which may contain repeated numbers, find its index in all the permutations of these numbers, which are ordered in lexicographical order. The index begins at 1.
 *
 * Example
 * Given the permutation [1, 4, 2, 2], return 3.
 */

/**
 * @param A: An array of integers
 * @return: A long integer
 */
const permutationIndexII = function (A) {
  var len = A.length,
    index = 1,
    weight = 1,
    multi = 1,
    hash = {};

  for (var i = len - 1; i >= 0; i--) {
    if (hash[A[i]]) {
      hash[A[i]] += 1;
      multi *= hash[A[i]];
    } else {
      hash[A[i]] = 1;
    }
    var count = 0;
    for (var j = i + 1; j < len; j++) {
      if (A[i] > A[j]) {
        count++;
      }
    }
    index += count * weight / multi;
    weight *= (len - i);
  }

  return index;
}

var A = [1, 4, 2, 2];
console.log(permutationIndexII(A));
