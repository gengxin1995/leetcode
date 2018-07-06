function Graph() {
    var vertices = [];
    var adjList = new Map();

    //添加顶点
    this.addVertex = function (v) {
        vertices.push(v);
        adjList.set(v, []);
    };

    //添加边
    this.addEdge = function (v, w) {
        //无向图
        adjList.get(v).push(w);
        adjList.get(w).push(v);
    };

    this.toString = function () {
        var s = '';
        for (var i = 0; i < vertices.length; i++) {
            s += vertices[i] + '->';
            var neighbors = adjList.get(vertices[i]);
            for (var j = 0; j < neighbors.length; j++) {
                s += neighbors[j] + ' ';
            }
            s += '\n';
        }
        return s;
    }

    //广度优先遍历+最短路径
    this.bfs = function (v, callback) {
        var visited = [];
        var d = []; //从v到u的距离
        var pred = [];
        for (var i = 0; i < vertices.length; i++) {
            visited[vertices[i]] = false;
            d[vertices[i]] = 0;
            pred[vertices[i]] = null;
        }
        var queue = [];
        visited[v] = true;
        queue.push(v);
        while (queue.length > 0) {
            var u = queue.shift();
            var neighbors = adjList.get(u);
            for (var i = 0; i < neighbors.length; i++) {
                var w = neighbors[i];
                if (!visited[w]) {
                    visited[w] = true;
                    d[w] = d[u] + 1;
                    pred[w] = u;
                    queue.push(w);
                }
            }
            if (callback) {
                callback(u);
            }
        }
        return {
            distances: d,
            predecessors: pred
        };
    };
    
    //深度优先遍历
    this.dfs = function (callback) {
        var visited = [];
        for (var i = 0; i < vertices.length; i++) {
            visited[vertices[i]] = false;
        }
        var stack = [];
        for (var i = 0; i < vertices.length; i++) {
            var v = vertices[i];
            if (!visited[v]) {
                stack.push(v);
                while (stack.length > 0) {
                    var u = stack.pop();
                    if (callback && !visited[u]) {
                        callback(u);
                    }
                    visited[u] = true;
                    var neighbors = adjList.get(u);
                    for (var j = neighbors.length - 1; j >= 0; j--) {
                        var w = neighbors[j];
                        if (!visited[w]) {
                            stack.push(w);
                        }
                    }
                }
            }
        }
    }
}

function printNode(value) {
    console.log('visited vertex: ' + value);
}
//打印从第一个顶点到其他顶点的路径
function formPath(myVertices, shortestPath) {
    var fromVertex = myVertices[0];
    for (var i = 1; i < myVertices.length; i++) {
        var toVertex = myVertices[i];
        var path = [];
        for (var v = toVertex; v !== fromVertex; v = shortestPath.predecessors[v]) {
            path.push(v);
        }
        path.push(fromVertex);
        var s = path.pop();
        while (path.length > 0) {
            s += ' - ' + path.pop();
        }
        console.log(s);
    }
}

var graph = new Graph();
var myVertices = ['A','B','C','D','E','F','G','H','I'];
for (var i = 0; i < myVertices.length; i++) {
    graph.addVertex(myVertices[i]);
}
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');

console.log(graph.toString());

var shortestPath = graph.bfs(myVertices[0], printNode);
// console.log(shortestPath);
// formPath(myVertices, shortestPath);

graph.dfs(printNode);