
    //Function to count the next greater elements.
    count_NGEs(N, arr, queries, indices)
    {
        //your code here
        let ans = []
        for(let i = 0;i<queries ; i++){
            let curr = arr[indices[i]];
            let j = N-1;
            let stack = []
            while(j>indices[i]){
                if(arr[j]>curr){
                    stack.push(arr[j])
                }
                j--;
            }
           ans[i] = stack.length 
        }
        return ans
    }
