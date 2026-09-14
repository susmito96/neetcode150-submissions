class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    getUniqHashKey(word) {
        const arr = new Array(26).fill(0);

        for (let i = 0; i < word.length; i++) {
            arr[word[i].charCodeAt(0) - 97]++;
        }

        return arr.join("#");
    }

    groupAnagrams(strs) {
        const strMap = {};

        for (let i = 0; i < strs.length; i++) {
            let strKey = this.getUniqHashKey(strs[i]);

            if (strMap.hasOwnProperty(strKey)) {
                strMap[strKey].push(strs[i]);
            } else {
                strMap[strKey] = [strs[i]];
            }
        }

        return Object.values(strMap);
    }
}
