function Sudoku() {

  this.arr = [[1, 2, 3, 4, 5, 6, 7, 8, 9],
              [2, 3, 4, 5, 6, 7, 8, 9, 1],
              [3, 4, 5, 6, 7, 8, 9, 1, 2],
              [4, 5, 6, 7, 8, 9, 1, 2, 3],
              [5, 6, 7, 8, 9, 1, 2, 3, 4],
              [6, 7, 8, 9, 1, 2, 3, 4, 5],
              [7, 8, 9, 1, 2, 3, 4, 5, 6],
              [8, 9, 1, 2, 3, 4, 5, 6, 7],
              [9, 1, 2, 3, 4, 5, 6, 7, 8]];


}

Sudoku.prototype.addArr = function(array) {
  var total = array.reduce(function(accumulator, currentValue) {
    return (accumulator + currentValue);
  });
  return total;
}

Sudoku.prototype.checkRows = function(array) {
  var newInstance = new Sudoku()
  var truther;
  array.forEach(function(row) {
    if (newInstance.addArr(row) === 45) {
      truther = false;
    } else {
      truther = true;
    }
  });
  return truther;
}

//front end logic
