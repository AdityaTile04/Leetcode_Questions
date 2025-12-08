class Solution {
    public int longestSubarray(int[] nums) {
        int ans = 0, i = 0, j = -1, count = 0;

        while(i < nums.length) {
            if(nums[i] == 1) {
                i++;
            } else {
                i++;
                count++;
            }

            while(count > 1 && j < i) {
                j++;
                if(nums[j] == 0) {
                    count--;
                }
            }
            ans = Math.max(ans, i - j - 1);
        }
        return ans - 1;
    }
}