/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    const n = s.length;
      
      for (let l = Math.floor(n / 2); l >= 1; l--) {

          if (n % l === 0) {
              const times = n / l;
              const pattern = s.slice(0, l);
              let newStr = '';
              
              for (let i = 0; i < times; i++) {
                  newStr += pattern;
              }
              
              if (s === newStr) {
                  return true;
              }
          }
      }
      
      return false;
};