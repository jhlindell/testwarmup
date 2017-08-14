const chai = require('chai');
const assert = chai.assert;
const howManyVowels = require('../howManyVowels').howManyVowels;

describe('howManyVowels', function(){
  it('should return the proper number of vowels in a string', function() {
    assert.equal(howManyVowels('what\'s up doc?'), 3);
  });

  it('should return a message if the input is non-string', function(){
    assert.equal(howManyVowels(234), 'input is invalid');
  });

  it('should return a message if the input string is empty', function(){
    assert.equal(howManyVowels(''), 'input is invalid');
  });
});
