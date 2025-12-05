class Solution {
    public void moveZeroes(int[] nums) {
        List<Integer> temp = new ArrayList<>();

        for(int num : nums) {
            if(num != 0) {
                temp.add(num);
            }
        }

        for(int i = 0; i < temp.size(); i++) {
            nums[i] = temp.get(i);
        }

        for(int i = temp.size(); i < nums.length; i++) {
            nums[i] = 0;
        }
    }
}