function Set() {
    this.items = {};
}

Set.prototype = {
    add: function (val) {
        if (!this.has(val)) {
            this.items[val] = val;
            return true;
        }
        console.log('该值已存在');
        return false;
    },
    delete: function (val) {
        if (this.has(val)) {
            delete this.items[val];
            return true;
        }
        console.log('该值不存在');
        return false;
    },
    has: function (val) {
        return this.items.hasOwnProperty(val);
    },
    clear: function () {
        this.items = {};
    },
    size: function () {
        return Object.keys(this.items).length;
    },
    values: function () {
        var values = [];
        for (var i = 0, keys = Object.keys(this.items); i < keys.length; i++) {
            values.push(this.items[keys[i]]);
        }
        return values;
    }
}

var set = new Set();
set.add(1);
set.add(2);
set.add(2);
set.delete(0);
console.log(set.size());
console.log(set.values());