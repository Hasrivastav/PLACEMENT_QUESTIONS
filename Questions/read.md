###Longest sum subaarya- two typpes positive and negaativ
```class Solution{
    long maxSubarraySum(int arr[], int n){
        
        // Your code here
       
        int j =1;
        long maxSum = arr[0];
         long sum = arr[0];
        while(j<arr.length){
            
             sum = Math.max(arr[j] , sum+arr[j]);
            
            
            maxSum = Math.max(maxSum , sum);
            j++;
            
        }
        return maxSum;
    }
    
}
```java


//for positve 
```var maxSubArray = function(nums) {
    let i =0;
    let j =0;
    let sum =0;
    let maxSum = Number.MIN_VALUE;
    while(j<nums.length){
        sum+=nums[j];

        if(sum < 0 ){
            sum =0;
        }

        maxSum = Math.max(maxSum ,sum)
        j++;
    }
    return maxSum
};
```javascript









###count no. of subarry with sum k
```var subarraySum = function(nums, k) {
    let map = new Map();
    let sum = 0;
    let count = 0;
    map.set(0,1);
    for (let i=0;i<nums.length;i++) {
        sum += nums[i];
        if (map.has(sum-k)) {
         count += map.get(sum-k);
       }
        if (map.has(sum)){ 
            map.set(sum, map.get(sum)+1);
        }
        else map.set(sum, 1);
    }
    return count;
}```javascript















###longestssubarray with  sum k
```class Solution{
    lenOfLongSubarr(arr,n, k){
        //code here
        let map = new Map();
        let sum = 0;
        let j =0;
        let i=0;
        let maxLen = 0;
        while(j<arr.length){
            sum+=arr[j];
            
            if(sum === k){
                maxLen = Math.max(maxLen , j+1);
            }
            if(map.has(sum-k)){
                maxLen = Math.max(maxLen , j-map.get(sum-k))
            }
            if(!map.has(sum)){
                map.set(sum ,j);
            }
            j++;
        }
        return maxLen;
    }
}
```javascript




##longest subarray with sum 0
```public class Solution {
    public static int getLongestZeroSumSubarrayLength(int []arr){
        // Write your code here.
         int n = arr.length;
         int sum =0;
         int max=0;
         HashMap<Integer,Integer>map=new HashMap<>();

         for(int i=0;i<n;i++){
         sum+=arr[i];
         if(sum==0){
             max=i+1;
         }
         else if(map.get(sum)!=null){
             max=Math.max(max,i-map.get(sum));
              }
              else{
                  map.put(sum,i);
              }
         }
              return max;
    }
}
```java