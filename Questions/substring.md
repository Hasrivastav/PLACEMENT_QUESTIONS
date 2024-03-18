###minumum window substring




```/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {



 if(t.length > s.length ){
     return ""
 }   
    
 let requiredCount = t.length 
 let map = new Map()
 for(let char of t){
     map.set(char , (map.get(char)|| 0)+1)
 }
 let start = 0;
 let end =  0 ;
 let windowSize = Number.MAX_VALUE
 let start_i = 0
 while(end < s.length){
     let rightChar = s[end];
     if(map.has(rightChar) && map.get(rightChar)>0)requiredCount--;
          map.set(rightChar , (map.get(rightChar)||0 )-1)
          while (requiredCount === 0) {
            let currentWindow = end - start + 1;
            if (windowSize > currentWindow) {
                windowSize = currentWindow;
                start_i = start;
            }

            let leftChar = s[start];
            map.set(leftChar, (map.get(leftChar) || 0) + 1);
            if (map.get(leftChar) > 0) {
                requiredCount++;
            }
            start++;
        }
        end++;
    }

     return windowSize === Number.MAX_VALUE ? "" : s.slice(start_i, start_i + windowSize)
 

};
```javascript



###Repeted substring pattern
###Repeted String Match
###heyStackandNeedle(usign rabin karp) and (simpe.include method)
###isSubseqence



###SUbstring =