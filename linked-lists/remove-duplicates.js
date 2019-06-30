/**
 * Remove Duplicates
 *
 * Remove all duplicates from an unsorted linked list
 *
 * Time complexity:
 * Space complexity:
 *
 * @param {SinglyLinkedList} sll
 * @return {SinglyLinkedList}
 */
const removeDuplicates = sll => {
  if (sll.length <= 1) return sll;
  const seenValues = {};
  let currentNode = sll.head;
  let i = 0;
  let length = sll.length;
  while (i < length) {
    if (seenValues[currentNode.val]) {
      sll.remove(i);
      length--;
    } else {
      seenValues[currentNode.val] = true;
      i++;
    }
    currentNode = currentNode.next;
  }
  return sll;
};

module.exports = removeDuplicates;
