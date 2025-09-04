class Solution {
    public int maxProfit(int[] prices) {
       int buyPrice = prices[0];
       int max = 0;
       int n = prices.length;
       for(int i = 1; i < n; i++) {
            int profit = prices[i] - buyPrice;
            max = Math.max(max, profit);
            buyPrice = Math.min(buyPrice, prices[i]);
       }
       return max;
    }
}