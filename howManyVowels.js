function howManyVowels(phrase) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let counter = 0;
  if(!phrase || typeof phrase !== 'string'){
    return 'input is invalid';
  }
  for(let i = 0; i < phrase.length; i++){
    for(let j = 0; j < vowels.length; j++){
      if(phrase[i].includes(vowels[j])){
        counter++;
      }
    }
  }
  return counter;
}

module.exports = {
  howManyVowels
};
