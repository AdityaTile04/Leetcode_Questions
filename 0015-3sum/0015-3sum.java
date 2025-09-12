class Solution {
    public List<List<Integer>> threeSum(int[] arr) {
        int n = arr.length;

        if(arr == null || n < 3) return new ArrayList<>();

        Arrays.sort(arr);
        Set<List<Integer>> res = new HashSet<>();

        for(int i = 0; i < n; i++) {
            int left = i + 1;
            int right = n - 1;

            while(left < right) {
                int sum = arr[i] + arr[left] + arr[right];

                if(sum == 0) {
                    res.add(Arrays.asList(arr[i], arr[left], arr[right]));
                    left++;
                    right--;
                } else if(sum < 0) {
                    left++;
                } else {
                    right--;
                }
            }
        }
        return new ArrayList<>(res);
    }
}