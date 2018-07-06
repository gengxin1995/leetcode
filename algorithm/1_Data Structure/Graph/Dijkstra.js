function dijkstra(graph, src) {
    var dist = [],
        visited = [];
    var len = graph.length;

    for (var i = 0; i < len; i++) {
        dist[i] = Infinity;
        visited[i] = false;
    }
    dist[src] = 0;
    for (var i = 0; i < len - 1; i++) {
        var u = findMinDist(dist, visited);
        if (u < 0) break;
        visited[u] = true;
        for (var v = 0; v < len; v++) {
            if (!visited[v] && graph[u][v] !== 0 && dist[u] !== Infinity && dist[u] + graph[u][v] < dist[v]) {
                dist[v] = dist[u] + graph[u][v];
            }
        }
    }
    return dist;
}

function findMinDist(dist, visited) {
    var min = Infinity,
        index = -1;
    for (var v = 0; v < dist.length; v++) {
        if (!visited[v] && dist[v] < min) {
            min = dist[v];
            index = v;
        }
    }
    return index;
}

var graph = [[0,2,4,0,0,0],
             [0,0,1,4,2,0],
             [0,0,0,0,3,0],
             [0,0,0,0,0,2],
             [0,0,0,3,0,2],
             [0,0,0,0,0,0]];

console.log(dijkstra(graph, 0));