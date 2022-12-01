import readlineSync from 'readline-sync';
import getRandomArbitrary from '../../bin/random.number.js';

export default function getGcd(name) {
  const divider = Array.from({ length: 100 }, (_, g) => g + 1);
  let i = 0;
  while (i < 3) {
    let max = 0;
    const numberRandom = getRandomArbitrary(1, 100);
    const numberRandom1 = getRandomArbitrary(1, 100);
    console.log('Find the greatest common divisor of given numbers.');
    console.log('Question: ', numberRandom, numberRandom1);
    const answ = readlineSync.question('Your answer: ');
    for (const times of divider) {
      if (numberRandom % times === 0 && numberRandom1 % times === 0) {
        max = times;
      }
    }
    if (+answ === max) {
      i += 1;
      console.log('Correct!');
    } else {
      console.log(answ, "is wrong answer ;(. Let's try again,", name);
      break;
    }
  }
  if (i === 3) {
    console.log('Congratulations, ', name);
}
}
