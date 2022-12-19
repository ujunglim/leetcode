/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const arr = s.split("");

  const map = new Map();
  map.set("I", 1);
  map.set("V", 5);
  map.set("X", 10);
  map.set("L", 50);
  map.set("C", 100);
  map.set("D", 500);
  map.set("M", 1000);

  for (let i = 0; i < arr.length; i++) {
    arr[i] = map.get(s[i]);
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i + 1]) {
      arr[i] = arr[i + 1] - arr[i];
      arr[i + 1] = null;
      i++;
    }
  }

  return arr.filter((a) => a !== null).reduce((arr, prev) => arr + prev);
};