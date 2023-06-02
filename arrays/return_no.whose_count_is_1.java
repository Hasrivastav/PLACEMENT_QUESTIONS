class Solution {
    public int singleNumber(int[] nums) {
          int result =0;

        Map<Integer,Integer> map = new HashMap<>();
        for(int i =0;i<nums.length;i++){
            if(map.containsKey(nums[i])){
                map.put(nums[i],map.get(nums[i])+1);
            }
            else{
                map.put(nums[i],1);
            }
        }

        for(int num:map.keySet())
        {
            if(map.get(num)==1){
              result = num;
            }
        }
return result;
        }
}