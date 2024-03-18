var diagonalSort = function(mat) {
    const m = mat.length;
    const n = mat[0].length;
    
    const map = new Map();
    
    // Store diagonal elements
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (!map.has(i - j)) {
                map.set(i - j, []);
            }
            map.get(i - j).push(mat[i][j]);
        }
    }
    
    // Sort diagonal elements
    for (let [key, value] of map) {
        value.sort((a, b) => a - b);
    }
    
    // Put sorted elements back
    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            mat[i][j] = map.get(i - j).pop();
        }
    }
    
    return mat;
};
