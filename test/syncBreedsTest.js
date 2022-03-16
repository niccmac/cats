const assert = require('chai').assert;
const breedDetails = require('../syncBreeds');

describe('#breedDetails', () => {
  it('returns breed details for the Bombay breed', () => {
    const bombay = breedDetails('Bombay');
    const expectedOutput = "The golden eyes and the shiny black coat of the Bombay is absolutely striking. Likely to bond most with one family member, the Bombay will follow you from room to room and will almost always have something to say about what you are doing, loving attention and to be carried around, often on his caregiver's shoulder.";
    assert.equal(expectedOutput, bombay);
  });
  it('returns undefined if breed not listed', () => {
    const scottishFold = breedDetails('Scottish Fold');
    const expectedOutput = undefined;
    assert.equal(expectedOutput, scottishFold);
  });
});