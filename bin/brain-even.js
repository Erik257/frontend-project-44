#!/usr/bin/env node
import readlineSync from 'readline-sync';
import welcome from '../src/cli.js';


 
const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

const name = welcome()

const game = () => {
    console.log ('Answer "yes" if the number is even, otherwise answer "no".')
    for (let i = 0; i < 3; i += 1) {
    const num = getRandomNumber(1, 101);
    const isEven = num % 2 === 0 ? 'yes' : 'no'
    const qustion = num
    console.log (`Question: ${num}`);
    const answer = readlineSync.question('Your answer: ')
    if (isEven === answer) {
        console.log ('Correct!')
    } else {
        console.log (`'${answer}' is wrong answer ;(. Correct answer was '${isEven}'.`)
        console.log(`Let's try again, ${name}!`)
        break
    }
    if (i === 2) {
        console.log(`Congratulations, ${name}!`)
    }
}
}

game();