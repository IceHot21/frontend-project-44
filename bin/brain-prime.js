import readlineSync from 'readline-sync';
import getRandomArbitrary from './random.number.js';

export default function getPrime(name) {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let i = 0;
  let flag = true;
  while (i < 3) {
    const numberRandom = getRandomArbitrary(2, 1000);
    console.log('Question: ', numberRandom);
    const answ = readlineSync.question('Your answer: ');
    for (let g = 2; g < numberRandom; g += 1) {
      if (numberRandom % g === 0) {
        flag = false
        break;
      }
    }
    if (flag && answ === 'yes' || !flag && answ === 'no') {
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
