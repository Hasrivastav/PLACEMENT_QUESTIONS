var findDiagonalOrder = function(mat) {
    const m = mat.length;
    const n = mat[0].length;
    
    const mp = new Map();
    const result = [];
    
    // Fill the map using (i+j) as the key
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            const key = i + j;
            if (!mp.has(key)) {
                mp.set(key, []);
            }
            mp.get(key).push(mat[i][j]);
        }
    }
    
    let flip = true;
    for(let [key, value] of mp.entries()) {
        if (flip) {
            value.reverse();
        }
        for (let num of value) {
            result.push(num);
        }
        flip = !flip;
    }
    
    return result;
};
