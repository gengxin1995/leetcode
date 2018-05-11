function QueueElement(element, priority) {
    this.element = element;
    this.priority = priority;
}

/**
 * 优先级队列
 * @constructor
 */
function PriorityQueue() {
    this.items = [];
}

PriorityQueue.prototype = {
    enqueue: function (ele, prio) {
        var element = new QueueElement(ele, prio);
        if(this.isEmpty()){
            this.items.push(element);
        } else {
            for (var i = 0; i < this.items.length; i++) {
                if (this.items[i].priority < element.priority) {
                    this.items.splice(i, 0, element);
                    break;
                }
            }
        }
    },
    dequeue: function () {
        if (!this.isEmpty()) {
            return this.items.shift();
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

var queue = new PriorityQueue();
queue.enqueue('xin', 2);
queue.enqueue('geng', 4);
console.log(queue.size());

queue.dequeue();
queue.dequeue();
console.log(queue.size());
console.log(queue.front());







