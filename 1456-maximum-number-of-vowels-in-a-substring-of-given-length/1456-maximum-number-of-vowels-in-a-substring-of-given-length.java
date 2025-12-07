class Solution {
    public int maxVowels(String s, int k) {
        int ans = 0;
        int count = 0;

        for (int i = 0; i < k; i++) {
            char ch = s.charAt(i);

            if (isVowel(ch)) {
                count++;
            }
        }

        ans = count;

        for (int i = k; i < s.length(); i++) {
            char chi = s.charAt(i);
            char chimk = s.charAt(i - k);

            if (isVowel(chi))
                count++;
            if (isVowel(chimk))
                count--;

            ans = Math.max(ans, count);
        }

        return ans;
    }

    private boolean isVowel(char ch) {
        return ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u';
    }
}