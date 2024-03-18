ar groupAnagrams = function(strs) {
    let map =  new Map()

    for(let i =0 ;i<strs.length ; i++){
        let temp = strs[i].split('').sort().join('');
        if(!map.has(temp)){
            map.set(temp ,[])
        }
        map.get(temp).push(strs[i]);
    }

    return [...map.values()]
};