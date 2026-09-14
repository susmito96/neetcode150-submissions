class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        return strs.join("#DELIM#");
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        return str.split("#DELIM#")
    }
}
