class Solution {
    public int longestConsecutive(int[] nums) {
        Arrays.sort(nums);
        if(nums.length == 0) return 0;

        int n = nums.length;
        int lastSmaller = Integer.MIN_VALUE;
        int longest = 1;
        int count = 0;

        for(int i = 0; i < n; i++) {
            if(nums[i] - 1 == lastSmaller) {
                count += 1;
                lastSmaller = nums[i];
            } else if(lastSmaller != nums[i]) {
                count = 1;
                lastSmaller = nums[i];
            }
            longest = Math.max(longest, count);
        } 
        return longest;
    }
}