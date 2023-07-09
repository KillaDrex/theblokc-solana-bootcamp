// recover.js
const bs58 = require('bs58');
const fs = require('fs');
b = bs58.decode('42XH84bxyjbpZ17CuXmqwAeKHK7T94MJ1QLfe7yvSeMH8getQ1skW6DwKu6y43USeehs8o1aamAZf5sk5rP4Gwm2');
j = new Uint8Array(b.buffer, b.byteOffset, b.byteLength / Uint8Array.BYTES_PER_ELEMENT);
fs.writeFileSync('key.json', `[${j}]`);