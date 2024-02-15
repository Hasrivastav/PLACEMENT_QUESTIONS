/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let st  = [];
    let result = ""
    let start =0;
    for(let i=0 ; i<s.length ; i++){
        if(s[i]=== "(") {
            if(st.length === 0)
            {
                start = start +1;
            }
            st.push(s[i])
            }
        else if (s[i]===")"){ 
            st.pop()
            if(st.length === 0){
                result+= s.slice(start , i)
                start = i +1;
            }
            }
    }
    return result
};