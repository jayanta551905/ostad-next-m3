// function isPrime(number) {
//     if (number <= 1) {
//       return false;
//     }
  
//     for (var i = 2; i <= Math.sqrt(number); i++) {
//       if (number % i === 0) {
//         return false;
//       }
//     }
  
//     return true;
//   }



function isPrime(number) {
    if (number <= 1) {
      return false;
    }
  
    else if(number % 2 === 0){
        return true;
    }
    else{
        return false;
    }
  }

  var number = 16; // Example number to check
  var result = isPrime(number);
  
  console.log(result);
  