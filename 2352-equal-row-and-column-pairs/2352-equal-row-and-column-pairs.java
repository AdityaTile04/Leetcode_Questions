class Solution {
    public int equalPairs(int[][] grid) {
        int n = grid.length;
        int count = 0;
      for(int i = 0; i < n; i++) {
        for(int j = 0; j < n; j++) {
            boolean match = true;
            for(int idx = 0; idx < n; idx++) {
                if(grid[idx][i] != grid[j][idx]) {
                    match = false;
                }
            }
            count += match ? 1 : 0;
        }
      }
      return count;
    }
}