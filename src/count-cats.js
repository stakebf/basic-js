const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  // return matrix.flat().filter(item => item === '^^').length;
  const cats = [];
  // let counterCats = 0;
  matrix.forEach(arrItems => arrItems.forEach(item => {
    item === '^^' ? cats.push(item) : item;
  }));
  // for (let i = 0; i < matrix.length; i++) {
  // for (let j = 0; j < matrix[i].length; j++) {
  // matrix[i][j] === '^^' ? cats.push(matrix[i][j]) : matrix[i][j];
  // if (matrix[i][j] === '^^') {
  // counterCats++;
  // }
  // }
  // }
  return cats.length;
  // return counterCats;
};
