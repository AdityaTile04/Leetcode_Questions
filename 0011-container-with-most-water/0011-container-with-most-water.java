class Solution {
    public int maxArea(int[] height) {
        int res = 0;
        int start = 0, end = height.length - 1;

        while(start < end) {
            int left = height[start];
            int right = height[end];

            int area = Math.min(left, right) * (end - start);
            res = Math.max(res, area);

            if(left < right) {
                start++;
            } else {
                end--;
            }
        }
        return res;
    }
}