class Solution {
    public int[] intersection(int[] nums1, int[] nums2) {
        Set<Integer> result = new HashSet<>();

        for (int i : nums1) {
            for (int j : nums2) {
                if (i == j) {
                    result.add(i);
                    break;
                }
            }
        }

        int[] res = new int[result.size()];
        int idx = 0;
        for(int val : result) {
            res[idx++] = val;
        }

        return res;
    }
}