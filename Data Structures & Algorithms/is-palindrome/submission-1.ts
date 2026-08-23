class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let str = s.replace(/\s+/g, "");
        str = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
        const isOdd = str.length % 2 != 0;

        let pointerRight = str.length - 1;

        let flag = true;

        for (let i = 0; i < str.length; i++) {
            if ((isOdd && i + 1 <= str.length / 2) || (!isOdd && i + 1 <= str.length / 2)) {
                if (str[i] != str[pointerRight]) {
                    flag = false;
                    break;
                }
            }
            pointerRight = pointerRight - 1;
        }

        return flag;
    }
}
