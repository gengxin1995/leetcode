function Queue() {
    this.items = [];
}

Queue.prototype = {
    enqueue: function (ele) {
        this.items.push(ele);
    },
    dequeue: function () {
        if (!this.isEmpty()) {
            return this.items.shift()
        }
    },
    front: function () {
        return this.items[0];
    },
    isEmpty: function () {
        return this.items.length === 0;
    },
    size: function () {
        return this.items.length;
    }
}

//击鼓传花
function hotPotato(nameList, num) {
    var queue = new Queue();
    for (var i = 0; i < nameList.length; i++) {
        queue.enqueue(nameList[i]);
    }
    while (queue.size() > 1) {
        for (var i = 0; i < num; i++) {
            queue.enqueue(queue.dequeue());
        }
        console.log(queue.dequeue() + '被淘汰了');
    }
    return queue.dequeue();
}

var names = ['Tony', 'Tom', 'John', 'Lily', 'Yamy', 'David'];
var winner = hotPotato(names, 9);
console.log('获胜者是：' + winner);