class Solution {
    public void moveZeroes(int[] nums) {
        int n = nums.length;

        int start = 0;
        for(int end = 0; end < n; end++) {
            if(nums[end] != 0) {
                int temp = nums[start];
                nums[start] = nums[end];
                nums[end] = temp;

                start++;
            }
        }
    }
}