class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        if (strs.length <= 1) return [[strs]]

        let addedArr = []
        let result = []

        for (let i = 0; i < strs.length; i++) {
            if (!addedArr.includes(strs[i])) {
                let tmp = []
                for (let j = i + 1; j < strs.length; j++) {

                    if (strs[i].length === strs[j].length) {
                        let count = {}
                        for (let i1 = 0; i1 < strs[j].length; i1++) {
                            count[strs[i][i1]] = (count[strs[i][i1]] || 0) + 1;
                            count[strs[j][i1]] = (count[strs[j][i1]] || 0) - 1;
                        }
                        let flag = true
                        for (let item in count) {
                            if (count[item] != 0) {
                                flag = false
                            };
                        }
                        if(flag){

                        addedArr = [...addedArr, strs[j]]
                        tmp = [...tmp, strs[j]]
                        }
                    }
                }
                result = [...result, [strs[i], ...tmp]]
                tmp = [...tmp, strs[i]]
            }

        }
        return result;

    }

}
