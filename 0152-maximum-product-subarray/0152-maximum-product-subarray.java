class Solution {
    public int maxProduct(int[] nums) {
        int maxProd = Integer.MIN_VALUE;
        for(int i= 0; i < nums.length; i++) {
            int currProd = 1;
            for(int j = i; j < nums.length; j++) {
                currProd *= nums[j];
                if(currProd > maxProd) {
                    maxProd = currProd;
                }
            }
        }
        return maxProd;
    }
}