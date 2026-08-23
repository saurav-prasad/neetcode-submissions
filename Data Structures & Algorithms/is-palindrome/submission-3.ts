class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(str: string): boolean {
        str = str
            .replace(/\s+/g, "")
            .replace(/[^a-zA-Z0-9]/g, "")
            .toLowerCase();
        const isOdd = str.length % 2 != 0;
        let pointerRight = str.length - 1;
        const runTill = isOdd ? (str.length + 1) / 2 : str.length / 2;
        let flag = true;

        for (let i = 0; i < runTill; i++) {
            if (str[i] != str[pointerRight]) {
                flag = false;
                break;
            }

            pointerRight = pointerRight - 1;
        }

        return flag;
    }
}
