class Solution {
    public int maximumDifference(int[] nums) {
        int minValue = nums[0];
        int maxDiff = Integer.MIN_VALUE;

        for(int i = 0; i < nums.length; i++) {
            maxDiff = Math.max(maxDiff, nums[i] - minValue);
            minValue = Math.min(minValue, nums[i]);
        }

        if(maxDiff == 0) return -1;
        return maxDiff;
    }
}