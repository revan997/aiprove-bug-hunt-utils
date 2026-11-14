// My correct reference implementations for the buggy functions in utils.js.
// Included only to document what "expected" means in bugs.json; the grader
// uses its own reference. The two CERTAIN bugs are factorial and countVowels.
function factorial(n) { let r = 1; for (let i = 2; i <= n; i++) r *= i; return r; }
function countVowels(s) { return (s.match(/[aeiou]/gi) || []).length; }
function reverse(s) { return [...s].reverse().join(""); }
function isPalindrome(s) { return s === reverse(s); }
function titleCase(s) { return s.split(" ").map(w => w ? w[0].toUpperCase() + w.slice(1) : w).join(" "); }
module.exports = { factorial, countVowels, reverse, isPalindrome, titleCase };
