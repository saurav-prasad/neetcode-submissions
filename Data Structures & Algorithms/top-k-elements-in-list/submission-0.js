class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
            let bucket = {}

    for (let i = 0; i < nums.length; i++) {
        const num = Number(nums[i])

        if (bucket[num] > 0) {
            bucket[num]++;
        } else {
            bucket[num] = 1;
        }

    }

    const sortedObj = Object.entries(bucket).sort((a, b) => b[1] - a[1])

    return sortedObj.slice(0, k).map(([num]) => Number(num))
    }

}
