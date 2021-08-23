// Write your tests here!
const { expect } = require('chai');
const { substitution } = require('../src/substitution');
// It returns false if the given alphabet isn't exactly 26 characters long.
describe('substitution', () => {
  it('should return false if the alphabet parameter is not exactly 26 characters', () => {
    const expected = false;
    const actual1 = substitution('Hi', 'abc');
    expect(actual1).to.equal(expected);
    const actual2 = substitution('Hi', 'abcdefghijklmnopqrstuvwxyz6');
    expect(actual2).to.equal(expected);
  });
});
// It returns false if there are any duplicate characters in the given alphabet.
describe('substitution', () => {
  it('should return false if there are any duplicate characters in the given alphabet', () => {
    const expected = false;
    const actual = substitution('Hello world', 'abcdefghijklmnopqrstuvwxyy');
    expect(actual).to.equal(expected);
  });
});

describe('substitution', () => {
  it('should return the string "jrufscpw" when function is called substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev")', () => {
    const expected = 'jrufscpw';
    const actual = substitution('thinkful', 'xoyqmcgrukswaflnthdjpzibev');
    expect(actual).to.equal(expected);
  });
});

describe('substitution', () => {
  it('should maintain spaces in the message, before and after encoding")', () => {
    const expected = 'elp xhm xf mbymwwmfj dne';
    const actual = substitution(
      'You are an excellent spy',
      'xoyqmcgrukswaflnthdjpzibev'
    );
    expect(actual).to.equal(expected);
  });
});

describe('substitution', () => {
  it('should maintain spaces in the message, before and after decoding")', () => {
    const expected = 'you are an excellent spy';
    const actual = substitution(
      'elp xhm xf mbymwwmfj dne',
      'xoyqmcgrukswaflnthdjpzibev',
      false
    );
    expect(actual).to.equal(expected);
  });
});

// It correctly translates the given phrase, based on the alphabet given to the function.
describe('substitution', () => {
  it('should return the string "thinkful" when function is called substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false)', () => {
    const expected = 'thinkful';
    const actual = substitution(
      'jrufscpw',
      'xoyqmcgrukswaflnthdjpzibev',
      false
    );
    expect(actual).to.equal(expected);
  });
});
