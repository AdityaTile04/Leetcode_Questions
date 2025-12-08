class Solution {
    public int longestOnes(int[] nums, int k) {
        int ans = 0, i = 0, j = -1, count = 0;

        while(i < nums.length) {
            if(nums[i] == 0) {
                count++;
                i++;
            } else {
                i++;
            }

            while(count > k) {
                j++;
                if(nums[j] == 0) {
                    count--;
                }
            }
        int window = i - 1 - j;
        ans = Math.max(ans, window);
        }
        return ans;
    }
}