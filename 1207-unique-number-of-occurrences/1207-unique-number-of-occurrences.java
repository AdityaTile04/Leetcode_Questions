class Solution {
    public boolean uniqueOccurrences(int[] arr) {
        HashMap<Integer, Integer> map = new HashMap<>();

        for (int val : arr) {
            map.put(val, map.getOrDefault(val, 0) + 1);
        }

        HashSet<Integer> unique = new HashSet<>();

        for (int freq : map.values()) {
            if (unique.contains(freq)) {
                return false;
            } else {
                unique.add(freq);
            }
        }

        return true;

    }
}