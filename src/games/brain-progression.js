
import readlineSync from 'readline-sync';
import getRandomArbitrary from '../../bin/random.number.js';

export default function getProgression(name) {
  let i = 0;
  while (i < 3) {
    const array = [];
    const progressionLengthRandom = getRandomArbitrary(5, 10);
    const positionRandom = getRandomArbitrary(5, progressionLengthRandom);
    const arifmeticRandom = getRandomArbitrary(1, 5);
    const numberRandom = getRandomArbitrary(1, 50);
    for (let h = numberRandom; h < numberRandom + arifmeticRandom * progressionLengthRandom; h += arifmeticRandom) {
      array.push(h);
    }
    let array1 = []
    array1 = Array.from(array)
    array1.splice(positionRandom - 1, 1, '...')
    console.log('Question: ', array1);
    const answ = readlineSync.question('Your answer: ');
    if (+answ === array[positionRandom - 1]) {
      i += 1;
      console.log('Correct!');
    } else {
      console.log(answ, "is wrong answer ;(. Let's try again,", name);
      break;
    }
  }
}
