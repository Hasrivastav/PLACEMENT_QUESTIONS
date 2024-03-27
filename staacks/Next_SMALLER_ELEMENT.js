module.exports = { 
    //param A : array of integers
    //return a array of integers
       prevSmaller : function(A){
   
         let st= []
         let ans = []
         for(let i=0;i<A.length;i++){
             while(st.length && st[st.length-1]>=A[i]){
                 st.pop()
             }
             ans[i]=st.length?st[st.length-1] :-1;
             st.push(A[i])
         }
         return ans;
       }
   };
   