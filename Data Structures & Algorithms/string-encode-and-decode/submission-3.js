class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        return strs.length > 0 ? strs.join("#DELIM#") : String(strs);
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        return str ? str.split("#DELIM#") : str.split("");
    }
}
