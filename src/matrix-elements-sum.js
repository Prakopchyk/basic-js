const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {

  function transpose(m) {
    return m[0].map((col, i) => m.map(row => row[i]));
  }

  let transposedMatrix = transpose(matrix);
  let sum = 0;
  internalLoop: for (let i = 0; i < transposedMatrix.length; i++) {
    let arr = transposedMatrix[i];
    for (let j = 0; j < arr.length; j++) {
      let num = arr[j];
      if (num === 0) {
        continue internalLoop;
      }
      sum += num;
    }

  }

  return sum;
}

module.exports = {
  getMatrixElementsSum
};
