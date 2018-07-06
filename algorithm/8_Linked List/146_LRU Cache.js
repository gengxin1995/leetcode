/**
 * Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and put.
 *
 * get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
 * put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.
 *
 * Follow up:
 * Could you do both operations in O(1) time complexity?
 */

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.obj = {};
    this.arr = [];
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    var val = this.obj[key];
    if (val > 0) {
        var index = this.arr.indexOf(key);
        this.arr.splice(index, 1);
        this.arr.push(key);
        return val;
    } else {
        return -1;
    }
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.obj[key]) {
        this.obj[key] = value;
        var index = this.arr.indexOf(key);
        this.arr.splice(index, 1);
        this.arr.push(key);
        return;
    }

    if (this.capacity === this.arr.length) {
        var k = this.arr.shift();
        this.obj[k] = undefined;
    }

    this.obj[key] = value;
    this.arr.push(key);
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = Object.create(LRUCache).createNew(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */