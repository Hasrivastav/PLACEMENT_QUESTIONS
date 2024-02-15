/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false
    let arr = [];
    for(let i=0 ;i<s.length ; i++){
        arr[s[i]] = (arr[s[i]] || 0) + 1;
    }
    for(let i=0 ;i<t.length ; i++){
        if(!arr[t[i]]) return false
        else{
            arr[t[i]] =arr[t[i]]-1;
        }
    }
    return true
};