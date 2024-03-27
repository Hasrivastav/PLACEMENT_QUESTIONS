import java.util.*;
class findtheOccuranceofPterrn
{
     static int prime = 101; // Define prime as a static property

    long calculatehash(String str) {
        long hash = 0;

        for (int i = 0; i < str.length(); i++) {
            hash += str.charAt(i) * Math.pow(prime, i); // Access prime using Solution.prime
        }

        return hash;
    }

    long updateHash(long prevHash, char preChar, char newChar, int patternLength) {
        long newHash = (prevHash - preChar) / prime; // Access prime using Solution.prime
        newHash += newChar * Math.pow(prime, patternLength - 1); // Access prime using Solution.prime
        return newHash;
    }

    ArrayList<Integer> search(String pattern, String txt) {
        ArrayList<Integer> result = new ArrayList<>();
        int patternLength = pattern.length();
        long hash = this.calculatehash(pattern);
        long textHash = this.calculatehash(txt.substring(0, patternLength));
        for (int i = 0; i <= txt.length() - pattern.length(); i++) {
            if (textHash == hash) {
                if (txt.substring(i, i + patternLength).equals(pattern)) {
                    result.add(i + 1);
                }
            }
            if (i < txt.length() - pattern.length()) {
                textHash = this.updateHash(textHash, txt.charAt(i), txt.charAt(i + patternLength), patternLength);
            }

        }
        return result;
    }
   
}

