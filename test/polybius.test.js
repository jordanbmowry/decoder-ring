// Write your tests here!
const { expect } = require('chai');
const { polybius } = require('../src/polybius');

describe('polybius', () => {
  it('should return false if the input is an odd number of characters in the string, excluding spaces', () => {
    const expected = false;
    const actual = polybius('44324233 521254134', false);
    expect(actual).to.equal(expected);
  });
});

describe('polybius', () => {
  it('translates the letters i and j to 42 when encoding', () => {
    //   to do
    const expected = '42';
    const actual1 = polybius('i');
    expect(actual1).to.equal(expected);
    const actual2 = polybius('j');
    expect(actual2).to.equal(expected);
  });
});

describe('polybius', () => {
  it('should maintain spaces throughout', () => {
    const expected = '3251131343 2543241341';
    const actual = polybius('Hello world');
    expect(actual).to.equal(expected);
  });
});

describe('polybius', () => {
  it('should return the string "4432423352125413" if function is called polybius("thinkful")', () => {
    const expected = '4432423352125413';
    const actual = polybius('thinkful');
    expect(actual).to.equal(expected);
  });
});

describe('polybius', () => {
  it('should return the string "th(i/j)nkful" if function is called polybius("4432423352125413", false)', () => {
    const expected = 'th(i/j)nkful';
    const actual = polybius('4432423352125413', false);
    expect(actual).to.equal(expected);
  });
});

describe('polybius', () => {
  it('should return the string "23513434112251" if function is called polybius(“message”)', () => {
    const expected = '23513434112251';
    const actual = polybius('message');
    expect(actual).to.equal(expected);
  });
});
