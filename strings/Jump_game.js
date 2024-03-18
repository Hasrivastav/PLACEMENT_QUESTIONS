**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
     let finalIndex = nums.length-1 ;
    for(let i=nums.length-2;i>=0;i--){
      if(nums[i]+i >= finalIndex){
          finalIndex = i;
      }
    }
    return finalIndex === 0
};