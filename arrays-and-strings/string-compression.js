/**
 * String Compression
 *
 * Compress a given string using the counts of repeated characters
 *
 * Time complexity: O(n)
 * Space complexity: O(n)
 *
 * @param {string} str
 * @return {boolean}
 */
const compressString = str => {
  let output = ``;
  let currentRun = 1;
  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[i - 1]) currentRun++;
    else {
      output += str[i - 1] + currentRun.toString();
      currentRun = 1;
    }
  }
  output += str[str.length - 1] + currentRun.toString();
  return str.length <= output.length ? str : output;
};

module.exports = compressString;
