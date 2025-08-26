class Solution {
  // Function to check if given sentence is pangram
  checkIfPangram(sentence) {
    sentence = sentence.toLowerCase()
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    for (let i = 0; i < sentence.length; i++) {
      alphabet = alphabet.replace(sentence[i], '');
    }
    return !alphabet.length
  }
}
