const removeDuplicates = require(`./remove-duplicates`);
const SLL = require(`./SinglyLinkedList`);

const sll1 = new SLL();
sll1.push(1);
sll1.push(2);
sll1.push(1);
sll1.push(1);
sll1.push(2);
sll1.push(3);

const sll1Output = new SLL();
sll1Output.push(1);
sll1Output.push(2);
sll1Output.push(3);

const sll2 = new SLL();
sll2.push(5);
sll2.push(10);
sll2.push(4);
sll2.push(3);

const sll3 = new SLL();
sll3.push(1);

const sll4 = new SLL();
sll4.push(1);
sll4.push(1);
sll4.push(1);

sll5 = new SLL();

test(`works in basic cases`, () => {
  expect(removeDuplicates(sll1)).toStrictEqual(sll1Output);
});

test(`removes no nodes when there are no duplicates`, () => {
  expect(removeDuplicates(sll2)).toStrictEqual(sll2);
});

test(`removes no nodes from a singleton SLL`, () => {
  expect(removeDuplicates(sll3)).toStrictEqual(sll3);
});

test(`works on empty SLLs`, () => {
  expect(removeDuplicates(sll5)).toStrictEqual(sll5);
});

test(`removes all duplicates when all nodes are identical`, () => {
  expect(removeDuplicates(sll4)).toStrictEqual(sll3);
});
