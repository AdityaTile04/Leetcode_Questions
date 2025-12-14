class Solution {
    public String decodeString(String s) {
        Stack<Integer> stack = new Stack<>();
        Stack<StringBuilder> stack1 = new Stack<>();
        StringBuilder sb = new StringBuilder();

        int n = 0;

        for(char c : s.toCharArray()) {
            if(Character.isDigit(c)) {
                n = n * 10 + (c - '0');
            } else if(c == '[') {
                stack.push(n);
                n = 0;
                stack1.push(sb);
                sb = new StringBuilder();
            } else if(c == ']') {
                int k = stack.pop();
                StringBuilder temp = sb;
                sb = stack1.pop();

                while(k-- > 0) {
                    sb.append(temp);
                } 
            } else {
                sb.append(c);
            }
        }
        return sb.toString();
     }
}