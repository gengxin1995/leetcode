/**
 * Given a permutation which contains no repeated number, find its index in all the permutations of these numbers, which are ordered in lexicographical order. The index begins at 1.
 *
 * Example
 * Given [1,2,4], return 1.
 */
/**
 * @param A: An array of integers
 * @return: A long integer
 */
const permutationIndex = function (A) {
  var len = A.length,
    index = 1,
    weight = 1;

  for (var i = len - 1; i >= 0; i--) {
    var count = 0;
    for (var j = i + 1; j < len; j++) {
      if (A[i] > A[j]) {
        count++;
      }
    }
    index += count * weight;
    weight *= (len - i);
  }

  return index;
}
