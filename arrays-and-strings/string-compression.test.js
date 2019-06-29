const compressString = require(`./string-compression`);

test(`works in basic cases`, () => {
  expect(compressString(`aabcccccaaa`)).toBe(`a2b1c5a3`);
  expect(compressString(`ababaaaaaabbbbb`)).toBe(`a1b1a1b1a6b5`);
});

test(`returns original string when compressed version is not shorter`, () => {
  expect(compressString(`aabbcc`)).toBe(`aabbcc`);
  expect(compressString(`abababaaabbb`)).toBe(`abababaaabbb`);
});

test(`works on empty strings`, () => {
  expect(compressString(``)).toBe(``);
});

test(`is case-sensitive`, () => {
  expect(compressString(`AAAaaa`)).toBe(`A3a3`);
});
