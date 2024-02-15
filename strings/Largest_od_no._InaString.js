/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
    let start = 0 ; let end = num.length-1
    let result = ""
    if(num[end] % 2 !== 0) return num;
    else{
while(num[end] % 2 == 0 ) {
     end --;
    }
    result = num.slice(start , end+1)


    }
    return result
};