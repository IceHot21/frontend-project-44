#!/usr/bin/env node

import getHello from "../src/cli.js";
import getGcd from "../src/games/brain-gcd.js";

const name = getHello();
getGcd(name);