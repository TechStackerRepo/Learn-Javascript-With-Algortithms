// @CHALLENGE 1.6 (algorithm and programming for non-maths Book)
// More difficult, but it's an absolute classic that you absolutely have to master: write a
// algorithm for exchanging the values of two variables A and B, regardless of
// either their prior content

let firstDigit = 7;
let secondDigit = 2;
console.log(`firstDigit value before: ${firstDigit} And secondDigit value before: ${secondDigit}`)
let temporaryDigit = firstDigit;
console.log(`TemporaryDigit value is: ${temporaryDigit}`);
// -> temporaryDigit = 7

firstDigit = secondDigit;
console.log(`firstDigit value is now: ${firstDigit}`);
// -> firstDigit = 2

secondDigit = temporaryDigit;
console.log(`secondDigit value is now: ${secondDigit}`);
// -> secondDigit = 7;
