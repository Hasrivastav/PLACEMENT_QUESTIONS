class Solution 
{
    //Function to find if there is a celebrity in the party or not.
    celebrity(M, n)
    {
        // code here
        let c = 0;
        for(let i =0;i<n;i++){
            if(M[c][i]===1){
                c=i;
            }
        }
        
        for(let i =0;i<n;i++){
            if(i!==c && (M[c][i]===1 || M[i][c]===0)) return -1;
        }
        return c;
    }
}