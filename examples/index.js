const CheckRuc = require('../lib');

console.log(`Checking undefined: ${CheckRuc()}`);
console.log(`Checking 2029200548: ${CheckRuc('2029200548')}`);
console.log(`Checking 11292005483: ${CheckRuc('11292005483')}`);
console.log(`Checking 12292005483: ${CheckRuc('12292005483')}`);
console.log(`Checking 18292005483: ${CheckRuc('18292005483')}`);
console.log(`Checking 21292005483: ${CheckRuc('21292005483')}`);
console.log(`Checking 10460033280: ${CheckRuc('10460033280')}`);
console.log(`Checking 10460033271: ${CheckRuc('10460033271')}`);
console.log(`Checking 20504561292: ${CheckRuc('20504561292')}`);
console.log(`Checking 20600543050: ${CheckRuc('20600543050')}`);