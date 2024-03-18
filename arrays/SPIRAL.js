/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let n = matrix.length ;
    let m = matrix[0].length

    let top = 0 , bottom = n-1 ,  left = 0 , right = m-1;
    let result =[];


while(top<=bottom && left<=right ){
 for(let i = left ;i<=right ; i++){
        result.push(matrix[top][i])
    } 
    top++;

    for(let i = top ; i <= bottom ;i++){
        result.push(matrix[i][right])
    }
    right--;

   if (top <= bottom) {
    for(let i=right ; i>=left ; i--){
        result.push(matrix[bottom][i])
    }
  bottom--;
    }

    if(right>=left){
        for(let i=bottom;i>=top ; i--){
            result.push(matrix[i][left])
        }
        left++;
    }
   

   
}
return result;

   
};