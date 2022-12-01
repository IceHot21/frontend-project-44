#!/usr/bin/env node

import readlineSync from 'readline-sync';
import getRandomArbitrary from '../../bin/random.number.js';

export default function getEven(name) {
 console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let i = 0;
  while (i < 3) {
    const numberRandom = getRandomArbitrary(1, 50);
    console.log('Question: ', numberRandom);
    const answ = readlineSync.question('Your answer: ');
    if (numberRandom % 2 === 0 && answ === 'yes') {
      i += 1;
      console.log('Correct!');
    } else if (numberRandom % 2 !== 0 && answ === 'no') {
      i += 1;
      console.log('Correct!');
    } else {
      console.log("It is wrong answer ;(. Let's try again, ", name);
      break;
    }
  }
  if (i === 3) {
    console.log('Congratulations, ', name);
}
}
