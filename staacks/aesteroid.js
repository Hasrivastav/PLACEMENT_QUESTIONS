/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(arr) {
    let stack = []
    let ans = []
    for(let i = 0;i<arr.length ; i++){
        while(!stack.length == 0 && arr[i]<0 && stack[stack.length-1]>0){
            let sum = arr[i]+stack[stack.length-1];
            if(sum<0){
                stack.pop()
            }else if(sum  > 0){
                    arr[i]=0; 
            }else{
                stack.pop()
                arr[i]=0;
            }
        }
       if(arr[i]!==0){
        stack.push(arr[i])
       }

    }
    return stack
};