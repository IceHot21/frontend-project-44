#!/usr/bin/env node

import getHello from "../src/cli.js";
import getProgression from "../src/games/brain-progression.js";

const name = getHello();
getProgression(name);