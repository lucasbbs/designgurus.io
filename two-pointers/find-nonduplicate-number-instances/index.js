class Solution {
  moveElements(arr) {
    const output = [];
    const s = new Set();
    for (let i = 0; i < arr.length; i++) {
      if (!s.has(arr[i])) {
        s.add(arr[i])
        output.push(arr[i])
      }
    }
  return output.length
  }
}
