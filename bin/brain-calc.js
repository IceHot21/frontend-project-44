import readlineSync from 'readline-sync';
import getRandomArbitrary from './random.number.js';

export default function getCalc(name) {
  const equal = ['+', '-', '*'];
  let i = 0;
  while (i < 3) {
    const equalRandom = getRandomArbitrary(0, 2);
    const numberRandom = getRandomArbitrary(1, 10);
    const numberRandom1 = getRandomArbitrary(1, 10);
    console.log('What is the result of the expression?');
    console.log('Question: ', numberRandom, ` ${equal[equalRandom]} `, numberRandom1);
    const answ = readlineSync.question('Your answer: ');
    if (equal[equalRandom] === '+') {
      if (answ == numberRandom + numberRandom1) {
        i += 1;
        console.log('Correct!');
      } else {
        console.log(answ, "is wrong answer ;(. Let's try again,", name);
        break;
      }
    } else if (equal[equalRandom] === '-') {
      if (answ == numberRandom - numberRandom1) {
        i += 1;
        console.log('Correct!');
      } else {
        console.log(answ, "is wrong answer ;(. Let's try again,", name);
        break;
      }
    } else if (equal[equalRandom] === '*') {
      if (answ == numberRandom * numberRandom1) {
        i += 1;
        console.log('Correct!');
      } else {
        console.log(answ, "is wrong answer ;(. Let's try again,", name);
        break;
      }
    }
  }
  if (i === 3) {
    console.log('Congratulations! ', name);
  }
}