/**
 * One Away
 *
 * Check whether two strings are one "edit" away from each other
 * (insertion, removal, or replacement of a character)
 *
 * Time complexity:O(n)
 * Space complexity:O(1)
 *
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 */
const oneEditAway = (str1, str2) => {
  if (str1.length === str2.length) {
    return oneReplacementAway(str1, str2);
  } else {
    if (oneRemovalAway(str1, str2)) return true;
    else return oneRemovalAway(str2, str1);
  }
};

const oneReplacementAway = (str1, str2) => {
  let edit = false;
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      if (edit) return false;
      else edit = true;
    }
  }
  return true;
};

const oneRemovalAway = (str1, str2) => {
  if (str1.length < str2.length) return false;
  let removal = false;
  let i = 0;
  let j = 0;
  while (i < str1.length) {
    if (str1[i] !== str2[j]) {
      if (removal) return false;
      else {
        removal = true;
        i++;
      }
    } else {
      i++;
      j++;
    }
  }
  return true;
};

module.exports = oneEditAway;
