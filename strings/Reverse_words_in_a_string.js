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

// //in java//
// public class ReverseWords {
//   public String reverseWords(String s) {
//       StringBuilder result = new StringBuilder();
//       String[] arr = s.trim().split("\\s+"); // Split by one or more spaces

//       for (int i = arr.length - 1; i >= 0; i--) {
//           if (!arr[i].isEmpty()) {
//               result.append(arr[i]).append(" ");
//           }
//       }

//       return result.toString().trim();
//   }

//   public static void main(String[] args) {
//       ReverseWords solution = new ReverseWords();
//       String s = "the sky is blue";
//       System.out.println(solution.reverseWords(s)); // Output: "blue is sky the"
//   }
// }
