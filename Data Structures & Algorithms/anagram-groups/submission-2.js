class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const strMap = {};

        for (let str of strs) {
            let sortedStr = str.split("").sort().join("");
            if (strMap.hasOwnProperty(sortedStr)) {
                strMap[sortedStr].push(str);
            } else {
                strMap[sortedStr] = [str];
            }
        }

        return Object.values(strMap);
    }
}
