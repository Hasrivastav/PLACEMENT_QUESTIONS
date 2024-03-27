/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    

    let st = []
    let ans = []
    let n = nums.length
    for(let i=n*2-1; i>=0;i--){
      
      while(st.length && st[st.length - 1]<=nums[i%n])
      {
        st.pop()
      }
      if(i<n){
        ans[i]= st.length ? st[st.length - 1] :-1
      }

      st.push(nums[i % n]);
    }
 return ans;

};