// Write your tests here!
const { expect } = require('chai');
const { caesar } = require('../src/caesar');

// It returns false if the shift value is equal to 0, less than -25, greater than 25, or not present.
describe('caesar', () => {
  it('should return false if the shift value is not present, equal to 0, less than -25, or greater than 25', () => {
    const actual1 = caesar('hello');
    const expected = false;
    expect(actual1).to.equal(expected);
    const actual2 = caesar('hello', 0);
    expect(actual2).to.equal(expected);
    const actual3 = caesar('hello', -26);
    expect(actual3).to.equal(expected);
    const actual4 = caesar('hello', 26);
    expect(actual4).to.equal(expected);
  });
});

describe('caesar', () => {
  it('should return "wklqnixo" with the function being called caesar("thinkful", 3)', () => {
    const actual = caesar('thinkful', 3);
    const expected = 'wklqnixo';
    expect(actual).to.equal(expected);
  });
});
// It ignores capital letters. (For example, the results of A Message and a message should be the same.)
describe('caesar', () => {
  it('should ignore capital letters', () => {
    const actual = caesar('ThInkFul', 3);
    const expected = 'wklqnixo';
    expect(actual).to.equal(expected);
  });
});
// When encoding, it handles shifts that go past the end of the alphabet. (For example, shifting z to the right by 3 should cause the z to wrap around to the front of the alphabet, so that z becomes c.)
describe('caesar', () => {
  it('when encoding, it handles shifts that go past the end of the alphabet', () => {
    const actual = caesar('zebra', 3);
    const expected = 'cheud';
    expect(actual).to.equal(expected);
  });
});
// It maintains spaces and other nonalphabetic symbols in the message, before and after encoding or decoding.
describe('caesar', () => {
  it('maintains spaces and other nonalphabetic symbols in the message', () => {
    const actual = caesar('hello world!', 3);
    const expected = 'khoor zruog!';
    expect(actual).to.equal(expected);
  });
});

describe('caesar', () => {
  it('should output "this is a secret message!"', () => {
    const actual = caesar('BPQA qa I amkzmb umaaiom!', 8, false);
    const expected = 'this is a secret message!';
    expect(actual).to.equal(expected);
  });
});

describe('caesar', () => {
  it('returns the string "zebra magazine" when the function is called caesar("cheud pdjdclqh", 3, false)', () => {
    const actual = caesar('cheud pdjdclqh', 3, false);
    const expected = 'zebra magazine';
    expect(actual).to.equal(expected);
  });
});
