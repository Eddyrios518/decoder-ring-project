// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
      if (!input || !alphabet || alphabet.length !== 26) {
        return false
      };
      if (Array.from(new Set(alphabet)).length !== 26) {
        return false
      };

      let aToZ = 'abcdefghijklmnopqrstuvwxyz';
      alphabet = alphabet.split('');
      input = input.toLowerCase();
      let resultOne = {};
      let decode = {};
      let resultTwo = '';

      aToZ.split('').forEach((letter, index) => {
          resultOne[letter] = alphabet[index];
          decode[alphabet[index]] = letter;
      })
      if (!encode) resultOne = decode;
      input.split('').forEach(input => {
          resultTwo += input === ' ' ? ' ' : resultOne[input]
      })
      return resultTwo;
  }
    
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
