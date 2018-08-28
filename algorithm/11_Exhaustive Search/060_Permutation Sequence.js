var getPermutation = function (n, k) {
  var a = [];
  a[0] = 1;
  for (var i = 1; i <= 9; i++) {
    a[i] = a[i - 1] * i;
  }

  var res = '',
    hash = [];

  for (var i = n; i >= 1; i--) {
    var tmp = Math.ceil(k / a[i - 1]);
    k -= (tmp - 1) * a[i - 1];
    var index = find(tmp, hash);
    res += index;
  }

  return res;
}

function find(index, hash) {
  var num = 0;
  for (var i = 1; i <= 9; i++) {
    if (!hash[i]) num++;
    if (num === index) {
      hash[i] = true;
      return i;
    }
  }
}

console.log(getPermutation(3, 3));
