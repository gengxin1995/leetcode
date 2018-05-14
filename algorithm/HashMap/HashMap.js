function HashMap() {
     items = [];

     var loseloseHashCode = function (key) {
         var hash = 0;
         for (var i = 0; i < key.length; i++) {
             hash += key.charCodeAt(i)
         }
         return hash % 37;
     };

     this.put = function (key, value) {
         var pos = loseloseHashCode(key);
         console.log(pos + '-' + key);
         items[pos] = value;
     };

     this.get = function (key) {
         return items[loseloseHashCode(key)];
     };

     this.remove = function (key) {
         items[loseloseHashCode(key)] = undefined;
     };

     this.print = function () {
         for (var i = 0; i < items.length; i++) {
             if (items[i] !== undefined) {
                 console.log(i + ':' + items[i]);
             }
         }
     }
}

var hash = new HashMap();
hash.put('geng', '123');
hash.put('xin', '456');
hash.put('lv', '789');
hash.print();
console.log(hash.get('xin'));


