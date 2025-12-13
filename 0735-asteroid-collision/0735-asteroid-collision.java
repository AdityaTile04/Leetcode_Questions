class Solution {
    public int[] asteroidCollision(int[] a) {
        Stack<Integer> stack = new Stack<>();
        boolean isPushed = true;
        for (int i = 0; i < a.length; i++) {
            isPushed = true;
            while (!stack.isEmpty()) {
                int peek = stack.peek();
                if (peek > 0 && peek == a[i] * -1) {
                    stack.pop();
                    isPushed = false;
                    break;
                } else if (peek == a[i] || peek * a[i] > 0 || (peek < 0 && a[i] > 0)) {
                    break;
                } else if (Math.abs(peek) > Math.abs(a[i])) {
                    isPushed = false;
                    break;
                } else if (Math.abs(peek) < Math.abs(a[i])) {
                    stack.pop();
                }
            }
            if (isPushed) {
                stack.push(a[i]);
            }
        }
        int[] res = new int[stack.size()];
        int j = 0;
        for (int i : stack) {
            res[j++] = i;
        }
        return res;
    }
}