class Solution {
    public int search(int[] nums, int target) {
         int si = 0, ei = nums.length - 1;

        while(si <= ei) {
            int mid = si + (ei - si) / 2;

            if(nums[mid] == target) {
                return mid;
            }
            if(nums[mid] >= nums[si]) {
                if(target >= nums[si] && target < nums[mid]) {
                    ei = mid - 1;
                } else {
                    si = mid + 1;
                }
            } else {
                if(target > nums[mid] && target <= nums[ei]) {
                    si = mid + 1;
                } else {
                    ei = mid - 1;
                }
            }

        }
        return -1;
    }
}