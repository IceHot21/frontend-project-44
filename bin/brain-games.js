#!/usr/bin/env node

import readlineSync from 'readline-sync';
import getEven from './brain-even.js';
import getCalc from './brain-calc.js';
import getGcd from './brain-gcd.js';
import getProgression from './brain-progression.js';
import getPrime from './brain-prime.js';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name?');
console.log('Hello,', name, '!');
getEven(name);
getCalc(name);
getGcd(name);
getProgression(name);
getPrime(name)
