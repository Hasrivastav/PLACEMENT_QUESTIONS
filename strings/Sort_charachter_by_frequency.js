/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let map = new Map();
    for(const char of s){
       map.set(char , (map.get(char)||0)+1);
    }
 
    const pq = Array.from(map.entries())
    pq.sort((a , b)=> b[1] - a[1])
   
    let result = '';
     for (const [char, freq] of pq) {
         result += char.repeat(freq);
     }
 
     return result
 
 };