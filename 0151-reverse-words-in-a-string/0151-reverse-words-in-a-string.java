class Solution {
    public String reverseWords(String s) {
        String[] word = s.split(" +");
        int n = word.length;
        StringBuilder sb = new StringBuilder();

        for(int i = n - 1; i >= 0; i--) {
            sb.append(word[i]);
            sb.append(" ");
        }

        return sb.toString().trim();
    }
}