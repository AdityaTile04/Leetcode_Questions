class Solution {
    public List<List<Integer>> subsets(int[] nums) {
        List<List<Integer>> ans = new ArrayList<>();
        backtrack(0, nums, new ArrayList<>(), ans);
        return ans;
    }
    public void backtrack(int idx, int[] nums, List<Integer> list, List<List<Integer>> ans) {
        if(idx == nums.length) {
            ans.add(new ArrayList<>(list));
            return;
        }
        backtrack(idx + 1, nums, list, ans);
        list.add(nums[idx]);
        backtrack(idx + 1, nums, list, ans);
        list.removeLast();
    }
}