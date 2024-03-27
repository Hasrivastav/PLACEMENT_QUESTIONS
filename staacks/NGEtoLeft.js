// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

var ngltoLeft = function(nums){
    
    let stack = []
    let ans= []
    for(let i =0 ; i<nums.length ; i++){
        let num = nums[i]
        while(stack.length &&  stack[stack.length-1] <=num){
            stack.pop()
        }
        ans[i] = stack.length?stack[stack.length-1] : -1;
        stack.push(num)
    }
    return ans 
}


console.log(ngltoLeft([1,3,2,4]))
