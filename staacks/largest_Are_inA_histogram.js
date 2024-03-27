/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    
    let nsl  = getNsl(heights)
    let nsr  = getNsr(heights)
    let width = []
     for(let i=0;i<heights.length;i++){
         width[i] = nsr[i]-nsl[i] -1;
     }
     let max = 0;
     for(let i=0;i<heights.length;i++){
      max = Math.max(max , width[i]*heights[i])
     }
     return max;
};


var getNsl = (arr)=>{
    let ans = []
    let st = []
    for(let i =0;i<arr.length;i++){
        while(st.length && arr[st[st.length-1]] >= arr[i]){
          st.pop()

        }
        ans[i] = st.length?st[st.length-1]:-1;
        st.push(i)
    }
    return ans;
}

var getNsr = (arr)=>{
    let ans = []
    let st = []
    for(let i =arr.length-1;i>=0;i--){
        while(st.length && arr[st[st.length-1]] >= arr[i]){
          st.pop()
      }
        ans[i] = st.length?st[st.length-1]:arr.length;
        st.push(i)
    }
    return ans;
}

// ///**
//  * @param {number[]} heights
//  * @return {number}
//  */
// var largestRectangleArea = function(heights) {
//     // Initialize variables
//     let max = 0; // Initialize the maximum area
//     let stack = []; // Initialize a stack to keep track of indices
//     let n = heights.length; // Get the length of the input array

//     // Iterate through the array heights and process each element
//     for (let i = 0; i <= n; i++) {
//         // While the stack is not empty and the current height is less than the height of the element at the top of the stack
//         while (stack.length > 0 && (i === n || heights[i] < heights[stack[stack.length - 1]])) {
//             // Pop the index of the element from the stack
//             let curr = stack.pop();
//             // Calculate the width of the rectangle
//             let right = i; // Right boundary is the current index i
//             let left = stack.length > 0 ? stack[stack.length - 1] : -1; // Left boundary is the index at the top of the stack, or -1 if stack is empty
//             let height = heights[curr]; // Height of the rectangle is the height of the popped element
//             let width = right - left - 1; // Width of the rectangle is the difference between the current index and the index at the top of the stack minus 1
//             let area = height * width; // Calculate the area of the rectangle
//             max = Math.max(max, area); // Update the maximum area
//         }
//         // Push the current index i onto the stack
//         stack.push(i);
//     }

//     // Return the maximum area
//     return max;
// };//