const fs = require("fs");

import {
  getCountryCode,
  getCountryDataList,
  getCountryData,
  getEmojiFlag,
} from "../src";

const code = getCountryCode("Kenya");
console.log(code);
const emj = getEmojiFlag("AI");
console.log(emj);
