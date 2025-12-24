class Solution {
    public int[] intersection(int[] nums1, int[] nums2) {
        int n = nums1.length;
        int m = nums2.length;

        Arrays.sort(nums1);
        Arrays.sort(nums2);

        Set<Integer> set = new HashSet<>();

        int i = 0;
        int j = 0;
        while(i < n && j < m) {
            if(nums1[i] < nums2[j]) {
                i++;
            } else if (nums1[i] > nums2[j]) {
                j++;
            } else {
                set.add(nums1[i]);
                i++;
                j++;
            }
        }

        int[] res = new int[set.size()];
        int idx = 0;
        for(int val : set) {
            res[idx++] = val;
        }

        return res;
    }
}