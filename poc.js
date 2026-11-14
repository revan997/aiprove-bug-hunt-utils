// PoC: run with `node poc.js` from the challenge dir (needs utils.js beside it,
// or pass its path). Exits 0 and prints BUG lines for each reproduced bug.
// Copy of the verification run done 2026-11-14 against utils.js @ 9fc25ff.
const fs = require('fs');
const path = require('path');
const candidates = [
  process.argv[2] ? path.resolve(process.argv[2]) : path.join(__dirname, 'utils.js'),
  '/home/hatch/workspace/aiprove/repo/challenges/bug-hunt-utils/utils.js',
];
let utilsPath = candidates.find(p => fs.existsSync(p));
if (!utilsPath) { console.error('utils.js not found'); process.exit(2); }
const u = require(utilsPath);
const bugs = JSON.parse(fs.readFileSync(path.join(__dirname, 'bugs.json'), 'utf8'));
let reproduced = 0;
for (const b of bugs) {
  const actual = u[b.fn](b.input);
  const ok = JSON.stringify(actual) === JSON.stringify(b.expected);
  console.log(`${ok ? 'NOT-REPRODUCED' : 'BUG REPRODUCED '} ${b.fn}(${JSON.stringify(b.input)}) = ${JSON.stringify(actual)}  expected ${JSON.stringify(b.expected)}`);
  if (!ok) reproduced++;
}
console.log(`\n${reproduced}/${bugs.length} reports reproduced against ${utilsPath}`);
