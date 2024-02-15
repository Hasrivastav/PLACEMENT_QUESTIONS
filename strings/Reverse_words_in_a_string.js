/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let st = [];
   let arr=  s.trim().split(" ")
   let result =""
   let newString = ""
   for(let i=0 ;i<arr.length ; i++){
      
       if(arr[i] !== ""){
         st.push(arr[i]);
     }
   }
    
    while(st.length){
       newString +=st.pop()+" "
       result = newString.trim()
    }
    return result
};