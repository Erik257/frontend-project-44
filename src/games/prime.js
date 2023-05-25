import readlineSync from 'readline-sync';
import logika from '../index.js';
import getRandomNumber from '../randomnumber.js';
import isatPrime from '../primebra.js';

const brainPrime = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no"');
  for (let i = 0; i <= 2; i += 1) {
    const random = getRandomNumber();
    const TrueOrFalse = isatPrime(random);
    let TrueOtvet;
    console.log(`Question: ${random}`);
    const otvet = readlineSync.question('Your answer: ');
    if (TrueOrFalse === true) {
      TrueOtvet = 'yes';
    } else (TrueOtvet = 'no');
    const attempt = logika(TrueOtvet, otvet, i);
    if (attempt) {
      break;
    }
  }
};

export default brainPrime;
