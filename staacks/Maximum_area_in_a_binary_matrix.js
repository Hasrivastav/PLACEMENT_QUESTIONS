/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    let histogram = new Array(matrix[0].length).fill(0)
    let maxArea = 0;
    for(let i =0;i<matrix.length;i++){
        for(let j =0;j<matrix[0].length;j++){
            histogram[j] = matrix[i][j] === '1' ? histogram[j] + 1 : 0;
              
        }
        const area = findHistogramArea(histogram)
        maxArea = Math.max(maxArea , area )
        
    }
    return maxArea;
    };
    
    var findHistogramArea = (histogram)=>{
        let maxArea  = 0;
        let Nsr = getNsr(histogram)
        let Nsl = getNsl(histogram)
     for(let i =0;i<histogram.length ; i++){
      
        const width = Nsr[i] - Nsl[i]-1;
        const area = histogram[i] * width;
        maxArea =Math.max(maxArea , area)    
     }
     return maxArea;
    
    }
    
    var getNsl =(histogram)=>{
        let stack =[]
        let ans = []
       for(let i=0;i<histogram.length ; i++){
          while(stack.length && histogram[stack[stack.length-1]]>=histogram[i]){
            stack.pop()
          }
          ans[i] = stack.length?stack[stack.length-1] :-1;
          stack.push(i)
       }
       return ans 
    }
    
    var getNsr =(histogram)=>{
        let stack =[]
        let ans = []
       for(let i=histogram.length-1;i>=0; i--){
          while(stack.length && histogram[stack[stack.length-1]]>=histogram[i]){
            stack.pop()
          }
          ans[i] = stack.length?stack[stack.length-1] :histogram.length;
          stack.push(i)
       }
       return ans 
    }