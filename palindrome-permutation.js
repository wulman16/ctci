/**
 * Palindrome Permutation
 *
 * Check whether a given string is a permutation of a palindrome
 *
 * Time complexity:O(n)
 * Space complexity:O(n)
 *
 * @param {string} str
 * @return {boolean}
 */
const isPermutedPalindrome = str => {
  const charCounts = {};
  for (let char of str) {
    charCounts[char] = charCounts[char]++ || 1;
  }
  let mismatch = false;
  for (let key in charCounts) {
    if (charCounts[key] % 2 !== 0) {
      if (mismatch === true) return false;
      else mismatch = true;
    }
  }
  return true;
};
