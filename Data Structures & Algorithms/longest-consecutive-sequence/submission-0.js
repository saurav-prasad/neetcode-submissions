class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numSet = new Set(nums);
        let longest = 0;

        nums.forEach((value) => {
            if (!numSet.has(value - 1)) {
                let length = 1;
                while (numSet.has(value + length)) {
                    length = length + 1;
                }
                longest = Math.max(longest,length);
            }

        });

        return longest;
    }
}
