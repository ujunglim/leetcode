/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  stack.push(s[0]);
  let map = new Map();
  map.set("(", ")");
  map.set("[", "]");
  map.set("{", "}");

  for (let i = 1; i < s.length; i++) {
    const prev = stack[stack.length - 1];
    const curr = s[i];

    if (Array.from(map.keys()).includes(curr)) {
      stack.push(curr);
    } else if (map.get(prev) === curr) {
      stack.pop();
    } else if (map.get(prev) !== curr) {
      return false;
    }
  }
  return stack.length ? false : true;
};