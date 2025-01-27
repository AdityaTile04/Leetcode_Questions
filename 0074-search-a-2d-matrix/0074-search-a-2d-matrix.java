class Solution {
    public boolean searchMatrix(int[][] matrix, int target) {
        int n = matrix.length;
        int row = 0;
        int col = matrix[0].length - 1;
        while(row < n && col > -1) {
            int rowCol = matrix[row][col];
            if(rowCol == target) return true;
            if(target > rowCol) row++;
            else col--;
        }
        return false;
    }
}