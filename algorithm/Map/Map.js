function Map() {
    this.items = {};
}

Map.prototype = {
    set: function (key, value) {
        this.items[key] = value;
    },
    delete: function (key) {
        if (this.has(key)) {
            delete this.items[key];
            return true;
        }
        console.log('该值不存在');
        return false;
    },
    has: function (key) {
        return this.items.hasOwnProperty(key);
    },
    get: function (key) {
        return this.has(key) ? this.items[key] : undefined;
    },
    clear: function () {
        this.items = {};
    },
    size: function () {
        return Object.keys(this.items).length;
    },
    keys: function () {
        return Object.keys(this.items);
    },
    values: function () {
        var values = [];
        for (var key in this.items) {
            if (this.has(key)) {
                values.push(this.items[key])
            }
        }
        return values;
    },
    getItems: function () {
        return this.items;
    }
}

var map = new Map();
map.set(1, 'xin');
map.set(2, 'geng');
map.set(3, 'xinxin');
console.log(map.has(2))
console.log(map.size());
console.log(map.getItems());