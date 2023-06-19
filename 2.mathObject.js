function calculateSquareRootOfSumOfSquares(numbers) {
    var sumOfSquares = 0;
  
    for (var i = 0; i < numbers.length; i++) {
      sumOfSquares += Math.pow(numbers[i], 2);
    }
  
    var squareRoot = Math.sqrt(sumOfSquares);
    return squareRoot;
  }

  


var numbers = [1, 2, 3, 4, 5];
var result = calculateSquareRootOfSumOfSquares(numbers);

console.log(result);
