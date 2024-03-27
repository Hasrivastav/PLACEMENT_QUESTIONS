/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {

    let stack = []
    let map = new Map();

    for(let i=nums2.length-1;i>=0;i--){
        let num = nums2[i]
       while(stack.length && stack[stack.length-1]<=nums2[i]){
        stack.pop()
       }
       map.set(num , stack.length ? stack[stack.length-1]:-1)
       stack.push(num)
    }

    let ans = []
    for(let num of nums1){
        if(map.has(num)){
            ans.push(map.get(num))
      }
    }
    return ans
};