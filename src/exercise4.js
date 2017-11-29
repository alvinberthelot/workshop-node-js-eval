exports.run = function(input) {
  console.log("Exercise #4");

  // YOUR CODE IS WELCOME HERE
  var myFunction = (numbersValues, stringsValues) => {
    var result = ""
    var separator = ""
    for (let i = 0; i < numbersValues.length; i++) {
      result += `${separator}The value of ${stringsValues[i]} is ${numbersValues[i]}`;
      separator = ", ";
    }
    return result;
  }

  /** STRICTLY FORBIDDEN TO CHANGE THIS CODE */
  return input(myFunction, [1, 2, 3], ["One", "Two", "Three"]);
  /** */
};
