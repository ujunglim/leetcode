/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  const sObj = {};
  const tObj = {};

  for (let i = 0; i < s.length; i++) {
    if (!sObj[s[i]]) {
      sObj[s[i]] = 1;
    } else {
      sObj[s[i]]++;
    }
  }
  for (let i = 0; i < t.length; i++) {
    if (!tObj[t[i]]) {
      tObj[t[i]] = 1;
    } else {
      tObj[t[i]]++;
    }
  }

  // compare
  for (const [key, value] of Object.entries(sObj)) {
    if (value !== tObj[key]) {
      return false;
    }
  }
  return true;
};