class Solution {
  search(arr, targetSum) {
    let left = 0, right = arr.length - 1;
    while (left < right) {
      const currentSum = arr[left] + arr[right]
      if (currentSum === targetSum) {
        return [left, right]
      }
      if (targetSum > currentSum) {
        left++
      } else {
        right--
      }
    }
    return [-1,-1]
  }
}
