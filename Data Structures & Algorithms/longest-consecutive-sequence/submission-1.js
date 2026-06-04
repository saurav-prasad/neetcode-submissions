class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numSet = new Set(nums);
        let longest = 0;

        for (const value of nums) {
            if (!numSet.has(value - 1)) {
                let length = 1;

                while (numSet.has(value + length)) {
                    length++;
                }

                longest = Math.max(longest, length);

                if (longest >= numSet.size) {
                    break;
                }
            }
        }

        return longest;
    }
}
