function floydWarshall(graph) {
    var dist = [];
    var len = graph.length;

    for (var i = 0; i < len; i++) {
        dist[i] = [];
        for (var j = 0; j < len; j++) {
            if (graph[i][j] === 0) {
                dist[i][j] = Infinity;
            } else {
                dist[i][j] = graph[i][j];
            }
        }
    }

    for (var k = 0; k < len; k++) {
        for (var i = 0; i < len; i++) {
            for (var j = 0; j < len; j++) {
                if (dist[i][k] + dist[k][j] < dist[i][j]) {
                    dist[i][j] = dist[i][k] + dist[k][j];
                }
            }
        }
    }

    return dist;
}

var graph = [[0,2,4,0,0,0],
             [0,0,1,4,2,0],
             [0,0,0,0,3,0],
             [0,0,0,0,0,2],
             [0,0,0,3,0,2],
             [0,0,0,0,0,0]];

console.log(floydWarshall(graph));