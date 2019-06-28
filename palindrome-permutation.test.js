const isPermutedPalindrome = require(`./palindrome-permutation`);

test(`works in basic cases`, () => {
  expect(isPermutedPalindrome(`tacocat`)).toBe(true);
  expect(isPermutedPalindrome(`tacoca`)).toBe(false);
  expect(isPermutedPalindrome(`taco cat`)).toBe(true);
});

test(`ignores spaces`, () => {
  expect(isPermutedPalindrome(`taco cat`)).toBe(true);
});

test(`works on empty strings`, () => {
  expect(isPermutedPalindrome(``)).toBe(true);
});

test(`is case-insensitive`, () => {
  expect(isPermutedPalindrome(`Tacocat`)).toBe(true);
});
