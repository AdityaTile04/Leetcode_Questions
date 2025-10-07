class Solution {
    public String longestPalindrome(String s) {
        int max = 0, start = 0, end = 0;
        int n = s.length();
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                if (isPalindrome(s, i, j) == true) {
                    if ((j - i + 1) > max) {
                        max = j - i + 1;
                        start = i;
                        end = j;
                    }
                }
            }
        }
        return s.substring(start, end + 1);
    }

    public boolean isPalindrome(String s, int i, int j) {
        int n = s.length();
        while (i < j) {
            int ch1 = s.charAt(i);
            int ch2 = s.charAt(j);
            if (ch1 != ch2) {
                return false;
            }
            i++;
            j--;
        }
        return true;
    }
}