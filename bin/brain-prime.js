import readlineSync from 'readline-sync';
import getRandomArbitrary from './random.number.js';

export default function getPrime(name) {
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let i = 0;
  while (i < 3) {
    const numberRandom = getRandomArbitrary(2, 50);
    console.log('Question: ', numberRandom);
    const answ = readlineSync.question('Your answer: ');
    if (numberRandom <= 5 && numberRandom !== 4 && answ === 'yes') {
      i += 1;
      console.log('Correct!');
    } else if (numberRandom % 2 !== 0 && numberRandom % 3 !== 0 && numberRandom % 5 !== 0 && answ === 'yes') {
      i += 1;
      console.log('Correct!');
    } else if (answ === 'no') {
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
