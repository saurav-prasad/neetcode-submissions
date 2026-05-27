class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const sortedArr = nums.sort((a,b)=>a-b)

        for(let i = 0;i<sortedArr.length;i++){
            for(let j = i+1; j < sortedArr.length;j++){
                if(sortedArr[i]===sortedArr[j]){
                    return true
                }
            }
        }
        return false;
    }
}
