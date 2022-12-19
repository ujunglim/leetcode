/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        if(n === 1) return 1;

        let i = 1;
        let j = n;

        while (i < j) {
          const mid = Math.floor((i + j) / 2);

          if (isBadVersion(mid)) {
            j = mid;
          } else {
            i = mid+1; //
          }
        }
        return i; // i 가 j와 겹친다.
    };
};