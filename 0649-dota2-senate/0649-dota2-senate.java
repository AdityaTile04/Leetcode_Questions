class Solution {
    public String predictPartyVictory(String senate) {
        int n = senate.length();

        Queue<Integer> ridx = new LinkedList<>();
        Queue<Integer> didx = new LinkedList<>();

        for (int i = 0; i < n; i++) {
            if (senate.charAt(i) == 'R') {
                ridx.add(i);
            } else {
                didx.add(i);
            }
        }
        while (!ridx.isEmpty() && !didx.isEmpty()) {
            int i = ridx.poll(), j = didx.poll();

            if (i < j) {
                ridx.add(i + n);
            } else {
                didx.add(j + n);
            }
        }
        return (ridx.isEmpty()) ? ("Dire") : ("Radiant");
    }
}