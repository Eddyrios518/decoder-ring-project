// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
  if (!shift || shift > 25 || shift < -25) {
    return false;
  }
  if (!encode) {shift *= -1};
  return input.toLowerCase().split('').map((letters) => {
    if (letters.charCodeAt(0) < 97) {
      return letters
    };
let numbers = letters.charCodeAt(0) + parseInt(shift)
if (numbers > 122) {
  numbers = 96 + (numbers - 122)
}
else if (numbers < 97) {
  numbers += 26
}
return String.fromCharCode(numbers)
  }).join('');
  }  
  

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
