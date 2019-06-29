const rotateMatrix = require(`./rotate-matrix`);

test(`works in basic cases`, () => {
  expect(rotateMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]])).toStrictEqual([
    [7, 4, 1],
    [8, 5, 2],
    [9, 6, 3]
  ]);
  expect(rotateMatrix([[1, 2], [4, 5]])).toStrictEqual([[4, 1], [5, 2]]);
});

test(`works on N=1 matrices`, () => {
  expect(rotateMatrix([[1]])).toStrictEqual([[1]]);
});

test(`works on empty matrices`, () => {
  expect(rotateMatrix([[]])).toStrictEqual([[]]);
});
