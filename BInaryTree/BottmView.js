
if(!root) return []
let result =[]
let queue = [{node:root  , col:0}]
let map  = new Map()
while(queue.length){
    let {node  , col} = queue.shift();
    
    if(!map.has(col)){
        map.set(col , node.data)
    }
    
    if(node.left) queue.push({node:node.left , col:col-1})
    if(node.right) queue.push({node:node.right , col:col+1})
 }
 
 let sortedColumns = Array.from(map.keys()).sort((a,b)=>a-b);
 for(let col of sortedColumns){
     let node = map.get(col)
     result.push(node)
 }
 
 return result
 