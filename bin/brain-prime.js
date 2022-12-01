#!/usr/bin/env node

import getHello from "../src/cli.js";
import getPrime from "../src/games/brain-prime.js";

const name = getHello();
getPrime(name);