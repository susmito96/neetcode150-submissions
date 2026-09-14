class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let str = "";

        for (let x of strs) {
            str += (x.length + "#" + x);
        }

        return str;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if (!str) {
            return [];
        }

        let lenOfWord = "", jump = 0;
        const finalArr = [];

        for (let i = 0; i < str.length; i = i + jump) {
            jump = 1;
            if (isNaN(str[i])) {
                let wrd = "";

                for (let j = i + 1; j < (i + 1 + Number(lenOfWord)); j++) {
                    wrd += str[j];
                }

                finalArr.push(wrd);
                jump = 1 + Number(lenOfWord);
                lenOfWord = "";
            } else {
                lenOfWord += str[i]
            }
        }

        return finalArr;
    }
}
