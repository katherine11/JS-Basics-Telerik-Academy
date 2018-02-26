let string1 = '1234';
let string2 = '1238abc';
let string3 = '0.15';
let string4 = '3.14ivan';
let string5 = 'Infinity';
let string6 = '99999999999999999999';

console.log("parseInt | ", "parseFloat | ", "number | ", "plus | ", "bitwise 'or' | ")

console.log("String 1: ");
console.log(parseInt(string1), parseFloat(string1), Number(string1), +string1, string1 | 0);

console.log("String 2: ");
console.log(parseInt(string2), parseFloat(string2), Number(string2), +string2, string2 | 0);

console.log("String 3: ");
console.log(parseInt(string3), parseFloat(string3), Number(string3), +string3, string3 | 0);

console.log("String 4: ");
console.log(parseInt(string4), parseFloat(string4), Number(string4), +string4, string4 | 0);

console.log("String 5: ");
console.log(parseInt(string5), parseFloat(string5), "????" , Number(string5), "????", +string5, "????", string5 | 0);

console.log("String 6: ");
console.log(parseInt(string6), parseFloat(string6), Number(string6), +string6, string6 | 0);
