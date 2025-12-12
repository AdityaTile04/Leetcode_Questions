class Solution {
    public int equalPairs(int[][] grid) {
        int n = grid.length;
        int ans = 0;

        HashMap<String, Integer> map = new HashMap<>();

        for(int[] row : grid) {
            String rowString = Arrays.toString(row);
            map.put(rowString, map.getOrDefault(rowString, 0) + 1);
        }

        for(int i = 0; i < n; i++) {
            int[] colArr = new int[n];
            for(int j = 0; j < n; j++) {
                colArr[j] = grid[j][i];
            }
            ans += map.getOrDefault(Arrays.toString(colArr), 0);
        }
      
      return ans;
    }
}