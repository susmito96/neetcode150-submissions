class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const uniqCount = {};

        for (let i = 0; i < nums.length; i++) {
            if (uniqCount.hasOwnProperty(nums[i])) {
                return true
            }
            uniqCount[nums[i]] = 1;
        }

        return false
    }
}
