/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let n = height.length
    let prefix = new Array(n)
    let sufix = new Array(n)
    prefix[0] = height[0]
    for(let i = 1;i<n;i++){
        prefix[i]=Math.max(prefix[i-1],height[i])
    }
    sufix[n-1] = height[n-1]
    for(let i=n-2;i>=0;i--){
        sufix[i]=Math.max(sufix[i+1],height[i])
    }
let ans = 0
    for(let i=0;i<n;i++){
      ans+=Math.min(prefix[i],sufix[i])-height[i];
    }
    return ans

};