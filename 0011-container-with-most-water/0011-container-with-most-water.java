class Solution {
    public int maxArea(int[] height) {
        int i = 0, j = height.length - 1;
        int maxWater = 0;
        
        while(i < j) {
            int h = Math.min(height[i], height[j]);
            int w = j - i;
            int curr = h * w;
            maxWater = Math.max(maxWater, curr);

            if(height[i] < height[j]) {
                i++;
            } else {
                j--;
            }
        }
        return maxWater;
    }
}