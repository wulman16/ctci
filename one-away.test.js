const oneEditAway = require(`./one-away`);

test(`works in basic cases`, () => {
  expect(oneEditAway(`pale`, `ple`)).toBe(true);
  expect(oneEditAway(`pale`, `pales`)).toBe(true);
  expect(oneEditAway(`pale`, `bale`)).toBe(true);
  expect(oneEditAway(`pale`, `bake`)).toBe(false);
});

test(`accounts for spaces`, () => {
  expect(oneEditAway(`pa le`, `paler`)).toBe(false);
});

test(`works on empty strings`, () => {
  expect(oneEditAway(``, `p`)).toBe(true);
  expect(oneEditAway(`p`, ``)).toBe(true);
});

test(`is case-sensitive`, () => {
  expect(oneEditAway(`pale`, `Pales`)).toBe(false);
});
