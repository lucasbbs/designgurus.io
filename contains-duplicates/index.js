class Solution {
containsDuplicate(nums) {
    const dict = {}
    for (let i = 0; i < nums.length; i++) {
      if (dict[nums[i]]) {
        return true
      } else {
        dict[nums[i]] = 1
      }
    }
    return false
  }
}
