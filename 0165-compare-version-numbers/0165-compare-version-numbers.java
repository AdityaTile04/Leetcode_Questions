class Solution {
    public int compareVersion(String version1, String version2) {
        String ver1[] = version1.split("\\.");
        String ver2[] = version2.split("\\.");

        int i = 0, j = 0;

        while (i < ver1.length && j < ver2.length) {
            int v1 = Integer.parseInt(ver1[i]);
            int v2 = Integer.parseInt(ver2[j]);

            if (v1 > v2) {
                return 1;
            } else if (v2 > v1) {
                return -1;
            }
            i++;
            j++;
        }
        while (i < ver1.length) {
            if (Integer.parseInt(ver1[i]) > 0) {
                return 1;
            }
            i++;
        }
        while (j < ver2.length) {
            if (Integer.parseInt(ver2[j]) > 0) {
                return -1;
            }
            j++;
        }
        return 0;
    }
}