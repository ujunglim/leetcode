/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const splitted = path.split('/').filter(e => e !== "");
    const stack = [];
    
    for (const s of splitted) {
        if (s === '.') {
            continue;
        } 
        if (s === '..') {
            stack.pop();
        } else {
            stack.push(s);
        }
    }
    return "/" + stack.join('/');
};