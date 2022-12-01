#!/usr/bin/env node

import getHello from "../src/cli.js";
import getEven from "../src/games/brain-even.js";

const name = getHello();
getEven(name);
