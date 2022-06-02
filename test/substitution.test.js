// Write your tests here!
const {substitution} = require("../src/substitution.js")
const expect = require('chai').expect;

describe('Substitution tests', () => {
    
    it('Encodes properly without spaces and handles capital letters', () => {
        const actual = substitution("ThinkfuL", "xoyqmcgrukswaflnthdjpzibev");
        const expected = "jrufscpw";
        expect(actual).to.equal(expected);
    })
    
    it('Encodes but returns false for duplicate letters in alphabet', () => {
        const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzippp");
        const expected = false;
        expect(actual).to.equal(expected);
    })
    
    it('returns false if alphabet is less than 26', () => {
        const actual = substitution("thinkful", "xoyqmcgrukswaflnv");
        const expected = false;
        expect(actual).to.equal(expected);
    })
    
    it('Encodes properly with spaces', () => {
      const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
      const expected = 'elp xhm xf mbymwwmfj dne';
        expect(actual).to.equal(expected);
    })
    
    it('Decodes without spaces', () => {
        const actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false);
        const expected = "thinkful";
        expect(actual).to.equal(expected);
    })
    
})