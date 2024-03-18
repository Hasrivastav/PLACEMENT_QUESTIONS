/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var verticalTraversal = function(root) {
    if (!root) return [];

    let q = [{ node: root, row: 0, col: 0 }];
    let map = new Map();

    while (q.length) {
        let { node, row, col } = q.shift();

        if (!map.has(col)) {
            map.set(col, []);
        }
        map.get(col).push({ val: node.val, row });

        if (node.left) {
            q.push({ node: node.left, row: row + 1, col: col - 1 });
        }
        if (node.right) {
            q.push({ node: node.right, row: row + 1, col: col + 1 });
        }
    }

    // Sort the columns by column index
    let sortedColumns = Array.from(map.keys()).sort((a, b) => a - b);

    // Construct the result array
    let result = [];
    for (let col of sortedColumns) {
        let nodes = map.get(col).sort((a, b) => {
            if (a.row !== b.row) {
                return a.row - b.row; // Sort by row index
            } else {
                return a.val - b.val; // Sort by node value
            }
        }).map(node => node.val);

        result.push(nodes);
    }

    return result;
}
 
