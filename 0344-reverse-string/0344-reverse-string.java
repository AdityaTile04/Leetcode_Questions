class Solution {
    public void reverseString(char[] s) {
        char first = 0, last = (char) (s.length - 1);
        while(first < last) {
            char temp = s[last];
            s[last] = s[first];
            s[first] = temp;

            first++;
            last--;
        }
    }
}