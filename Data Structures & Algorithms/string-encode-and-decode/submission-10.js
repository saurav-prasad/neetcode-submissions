class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if (strs.length === 0) return "";

        let str = strs.length.toString();

        for (let i = 0; i < strs.length; i++) {
            const itemLength = `_${strs[i].length}_`;

            str = `${str}${itemLength}${strs[i]}`

        }

        return str
    }
decode(str) {
    if (str === "") return [];

    const arr = [];

    let firstUnderscore = str.indexOf("_");
    let arrLen = Number(str.slice(0, firstUnderscore));
    let pointer = firstUnderscore + 1;

    while (arr.length < arrLen) {

        let lenEnd = str.indexOf("_", pointer);
        let sliceLen = Number(str.slice(pointer, lenEnd));

        let sliceStart = lenEnd + 1;
        let sliceEnd = sliceStart + sliceLen;

        const sliceStr = str.slice(sliceStart, sliceEnd);

        arr.push(sliceStr);

        pointer = sliceEnd + 1;
    }

    return arr;
}
    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode1(str) {
        console.log("str", str,str.length)

        if (str === "") return [];

        if (str.length <= 1) return [str];

        let pointer = 2;
        const arr = [];
        let arrLen = Number(str[0])

        if (!str.startsWith(`${arrLen}_`)) return [str]

        console.log("arrLen", arrLen)


        console.log("   ")

        while (arr.length < arrLen) {
            let sliceLen = Number(str[pointer])

            while(str[pointer + 1 ] !=="_"){
                pointer = pointer + 1;
                sliceLen = Number(`${sliceLen}${str[pointer]}`)
            }

            let sliceTill = sliceLen + pointer + 2
            
            const sliceStr = str.slice(pointer + 2, sliceTill);

            console.log("pointer", pointer)
            console.log("sliceStr", sliceStr)
            console.log("sliceLen", sliceLen)
            console.log("sliceTill",sliceTill)

            console.log("   ")


            arr.push(sliceStr)
            pointer = sliceTill + 1
            
        }
        console.log("arr",arr)
        return arr
    }
}























