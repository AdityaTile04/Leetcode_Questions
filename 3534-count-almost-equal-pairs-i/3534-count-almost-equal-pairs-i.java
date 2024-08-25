import java.util.ArrayList;
import java.util.List;

public class Solution {
    public int countPairs(int[] nums) {
        int n = nums.length;
        int ans = 0;
        
        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                if (isAlmostEqual(nums[i], nums[j])) {
                    ans++;
                }
            }
        }
        
        return ans;
    }

    private boolean isAlmostEqual(int x, int y) {
        String s1 = Integer.toString(x);
        String s2 = Integer.toString(y);
        
        // Adjust lengths by padding with leading zeros
        while (s1.length() < s2.length()) {
            s1 = "0" + s1;
        }
        while (s2.length() < s1.length()) {
            s2 = "0" + s2;
        }

        int diffCount = 0;
        List<Integer> diffIndex = new ArrayList<>();
        
        for (int i = 0; i < s1.length(); i++) {
            if (s1.charAt(i) != s2.charAt(i)) {
                diffCount++;
                diffIndex.add(i);
                if (diffCount > 2) {
                    return false;
                }
            }
        }
        
        if (diffCount == 0) {
            return true;
        }
        if (diffCount == 2) {
            // Ensure index access is within bounds
            char[] s1Array = s1.toCharArray();
            int idx1 = diffIndex.get(0);
            int idx2 = diffIndex.get(1);

            // Swap characters
            char temp = s1Array[idx1];
            s1Array[idx1] = s1Array[idx2];
            s1Array[idx2] = temp;

            return String.valueOf(s1Array).equals(s2);
        }
        
        return false;
    }
} 