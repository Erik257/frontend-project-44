#!/usr/bin/env node
import readlineSync from 'readline-sync';

const welcome = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};
 
const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

const isEven = (num) => num % 2 === 0 ? 'yes' : 'no'

const game = () => {
    console.log (welcome());
    console.log ('Answer "yes" if the number is even, otherwise answer "no".')
    const num = getRandomNumber(1, 101);
    const qustion = isEven(num)
    console.log (`Question: ${num}`);
    const answer = readlineSync.question('Your answer: ')


}

game();