#!/usr/bin/env node
import readlineSync from 'readline-sync';
import welcome from '../src/cli.js';

welcome()
 
const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

const isEven = (num) => num % 2 === 0 ? 'yes' : 'no'

const game = () => {
    console.log ('Answer "yes" if the number is even, otherwise answer "no".')
    for (let i = 0; i < 3; i += 1) {
    const num = getRandomNumber(1, 101);
    const qustion = isEven(num)
    console.log (`Question: ${num}`);
    const answer = readlineSync.question('Your answer: ')
      }
}

game();