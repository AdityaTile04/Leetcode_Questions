class Solution {
    public int maxOperations(int[] nums, int k) {
        int count = 0;
        Arrays.sort(nums);

        int start = 0;
        int end = nums.length - 1;

        while(start < end) {
            if(nums[start] + nums[end] < k) {
                start++;
            } else if (nums[start] + nums[end] > k) {
                end--;
            } else {
                start++;
                end--;
                count++;
            }
        }

    return count;
    
    }
}