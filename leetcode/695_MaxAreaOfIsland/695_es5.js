/**
 * Given a non-empty 2D array grid of 0's and 1's, an island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.
 * Find the maximum area of an island in the given 2D array. (If there is no island, the maximum area is 0.)
 *
 * Example 1:
 * [[0,0,1,0,0,0,0,1,0,0,0,0,0],
 * [0,0,0,0,0,0,0,1,1,1,0,0,0],
 * [0,1,1,0,1,0,0,0,0,0,0,0,0],
 * [0,1,0,0,1,1,0,0,1,0,1,0,0],
 * [0,1,0,0,1,1,0,0,1,1,1,0,0],
 * [0,0,0,0,0,0,0,0,0,0,1,0,0],
 * [0,0,0,0,0,0,0,1,1,1,0,0,0],
 * [0,0,0,0,0,0,0,1,1,0,0,0,0]]
 * Given the above grid, return 6. Note the answer is not 11, because the island must be connected 4-directionally.
 *
 * Example 2:
 * [[0,0,0,0,0,0,0,0]]
 * Given the above grid, return 0.
 *
 * Note: The length of each dimension in the given grid does not exceed 50.
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    var m = grid.length;
    var n = grid[0].length;
    var result = 0;
    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            result = Math.max(result, dfs(grid, i, j));
        }
    }
    return result;
};

function dfs(grid, i, j) {
    var m = grid.length;
    var n = grid[0].length;
    if (i >= 0 && i < m && j >= 0 && j < n) {
        if (grid[i][j] === 1) {
            grid[i][j] = 0;
            return 1 + dfs(grid, i-1, j) + dfs(grid, i, j+1) + dfs(grid, i+1, j) + dfs(grid, i, j-1);
        }
    }
    return 0;
}