/**
 * 最小生成树
 * @param graph
 * @returns {Array}
 */
function prim(graph) {
    var parent = [],
        key = [],
        visited = [],
        len = graph.length;

    for (var i = 0; i < len; i++) {
        key[i] = Infinity;
        visited[i] = false;
    }
    key[0] = 0;
    parent[0] = -1;
    for (var i = 0; i < len - 1; i++) {
        var u = minKey(key, visited);
        if (u < 0) break;
        visited[u] = true;
        for (var v = 0; v < len; v++) {
            if (graph[u][v] && !visited[v] && graph[u][v] < key[v]) {
                parent[v] = u;
                key[v] = graph[u][v];
            }
        }
    }
    return parent;
}

function minKey(key, visited) {
    var min = Infinity,
        index = -1;
    for (var i = 0; i < key.length; i++) {
        if (!visited[i] && key[i] < min) {
            min = key[i];
            index = i;
        }
    }
    return index;
}

var graph = [[0,2,4,0,0,0],
             [2,0,2,4,2,0],
             [4,2,0,0,3,0],
             [0,4,0,0,3,2],
             [0,2,3,3,0,2],
             [0,0,0,2,2,0]];
var res = prim(graph);
console.log(res);