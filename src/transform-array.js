const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  const discardNext = '--discard-next';
  const discardPrev = '--discard-prev';
  const doubleNext = '--double-next';
  const doublePrev = '--double-prev';

  let shouldDiscardNext = false;
  let shouldDoubleNext = false;

  let resultArr = [];
  arr.forEach((el, i) => {

    if (el === discardNext) {
      shouldDiscardNext = true;
    }
    else if (el === discardPrev) {
      if (resultArr.length > 0 && resultArr[resultArr.length - 1] == arr[i - 1]) {
        resultArr.pop();
      }
    }
    else if (el === doubleNext) {
      shouldDoubleNext = true;
    }
    else if (el === doublePrev) {
      if (resultArr.length > 0 && resultArr[resultArr.length - 1] == arr[i - 1]) {
        let prev = resultArr[resultArr.length - 1];
        resultArr.push(prev);
      }
    }
    else {
      if (shouldDiscardNext) {
        shouldDiscardNext = false;
        return;
      }
      else if (shouldDoubleNext) {
        resultArr.push(el);
        resultArr.push(el);
        shouldDoubleNext = false;
      }
      else {
        resultArr.push(el);
      }
    }
  });

  return resultArr;
}

module.exports = {
  transform
};
