function 
    topView(root) {
        if (!root) return [];
    
        let q = [{ node: root, col: 0 }];
        let map = new Map(); // Map to store nodes by column
        let result = [];
    
        while (q.length) {
            let { node, col } = q.shift();
    
            if (!map.has(col)) {
                map.set(col, node.val); // Store only the topmost node at each column
            }
    
            if (node.left) {
                q.push({ node: node.left, col: col - 1 });
            }
            if (node.right) {
                q.push({ node: node.right, col: col + 1 });
            }
        }
    
        // Extract nodes from the map in ascending order of column index
        let sortedColumns = Array.from(map.keys()).sort((a, b) => a - b);
        for (let col of sortedColumns) {
            result.push(map.get(col));
        }
    
        return result;
    
}