/**
 * Rotate Matrix
 *
 * Rotate an NxN matrix by 90 degrees
 *
 * Time complexity: O(n^2)
 * Space complexity: O(n^2)
 *
 * @param {Array<Array<number>>} matrix
 * @return {Array<Array<number>>}
 */
const rotateMatrix = matrix => {
  const n = matrix[0].length;
  let output = Array.from({ length: Math.max(n, 1) }, () => []);
  for (let i = 0; i < n; i++) {
    for (let arr of matrix) {
      output[i].unshift(arr[i]);
    }
  }
  return output;
};

module.exports = rotateMatrix;
