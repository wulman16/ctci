const zeroMatrix = require(`./rotate-matrix`);

test(`works in basic cases`, () => {
  expect(zeroMatrix([[1, 2, 3], [4, 0, 6], [7, 8, 9]])).toStrictEqual([
    [1, 0, 3],
    [0, 0, 0],
    [7, 0, 9]
  ]);
  expect(zeroMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 0]])).toStrictEqual([
    [1, 2, 0],
    [4, 5, 0],
    [0, 0, 0]
  ]);
  expect(zeroMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]])).toStrictEqual([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]);
});

test(`works on N=1 matrices`, () => {
  expect(zeroMatrix([[1]])).toStrictEqual([[1]]);
  expect(zeroMatrix([[0]])).toStrictEqual([[0]]);
});

test(`works on empty matrices`, () => {
  expect(zeroMatrix([[]])).toStrictEqual([[]]);
});
