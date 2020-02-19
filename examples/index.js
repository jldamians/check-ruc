const CheckRuc = require('../lib');

const { isOk } = CheckRuc;

console.log(`Checking undefined: ${CheckRuc.isOk()}`);
console.log(`Checking 2029200548: ${CheckRuc.isOk('2029200548')}`);
console.log(`Checking 11292005483: ${CheckRuc.isOk('11292005483')}`);

console.log(`Checking 12292005483: ${isOk('12292005483')}`);
console.log(`Checking 18292005483: ${isOk('18292005483')}`);
console.log(`Checking 21292005483: ${isOk('21292005483')}`);
console.log(`Checking 10460033280: ${isOk('10460033280')}`);

console.log(`Checking 10460033271: ${CheckRuc('10460033271')}`);
console.log(`Checking 20504561292: ${CheckRuc('20504561292')}`);
console.log(`Checking 20600543050: ${CheckRuc('20600543050')}`);