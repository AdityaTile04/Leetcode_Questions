class Solution {
    public boolean isAnagram(String s, String t) {
        s = s.toLowerCase();
        t = t.toLowerCase();

        if(s.length() != t.length()) {
            return false;
        }

        char[] chS = s.toCharArray();
        char[] chT = t.toCharArray();

        Arrays.sort(chS);
        Arrays.sort(chT);

        return Arrays.equals(chS, chT);
    }
}