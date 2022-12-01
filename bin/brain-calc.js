#!/usr/bin/env node

import getHello from "../src/cli.js";
import getCalc from "../src/games/brain-calc.js";

const name = getHello();
getCalc(name);