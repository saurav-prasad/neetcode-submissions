class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {

        // let rPointer = numbers.length - 1;
        // let lPointer = 0;
        // let arr = []
        // while(lPointer < rPointer){
        //     const sum = numbers[lPointer] + numbers[rPointer];
        //     console.log(sum,lPointer,rPointer)
            
        //     if(sum > target){
        //         rPointer = rPointer -1
        //     }
        //     else if(sum < target){
        //         lPointer = lPointer + 1
        //     }
        //     else{
        //         arr = [lPointer+1, rPointer+1]
        //         break
        //     }
            
        // }
        // return arr

         let j = numbers.length - 1;
        let i = 0;
        const ans: number[] = [0, 0];

        while (i < j) {
            const sum = numbers[i] + numbers[j];

            if (sum < target) {
                i++;
            } else if (sum > target) {
                j--;
            } else {
                ans[0] = i + 1;
                ans[1] = j + 1;
                break;
            }
        }

        return ans;

    }
}
