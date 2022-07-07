## How to reproduce

```
yarn && yarn cypress:run 
```

Check the console logs and notice how the second attempt on the retries spec has `undefined` invocationDetails.

```
Retried (attempt #1): {
  function: 'Suite.eval',
  fileUrl: 'http://localhost:61442/__cypress/tests?p=cypress/e2e/spec.cy.js',
  originalFile: 'webpack:///./cypress/e2e/spec.cy.js',
  relativeFile: 'cypress/e2e/spec.cy.js',
  absoluteFile: '/cypress-invocation-details/cypress/e2e/spec.cy.js',
  line: 6,
  column: 3,
  whitespace: '    ',
  stack: 'Error\n' +
    '    at Suite.eval (http://localhost:61442/__cypress/tests?p=cypress/e2e/spec.cy.js:104:3)\n' +
    '    at Object../cypress/e2e/spec.cy.js (http://localhost:61442/__cypress/tests?p=cypress/e2e/spec.cy.js:99:1)\n' +
    '    at __webpack_require__ (http://localhost:61442/__cypress/tests?p=cypress/e2e/spec.cy.js:20:30)\n' +
    '    at Object.0 (http://localhost:61442/__cypress/tests?p=cypress/e2e/spec.cy.js:118:18)\n' +
    '    at __webpack_require__ (http://localhost:61442/__cypress/tests?p=cypress/e2e/spec.cy.js:20:30)\n' +
    '    at eval (http://localhost:61442/__cypress/tests?p=cypress/e2e/spec.cy.js:84:18)\n' +
    '    at eval (http://localhost:61442/__cypress/tests?p=cypress/e2e/spec.cy.js:87:10)\n' +
    '    at eval (<anonymous>)'
}

Retried (attempt #2): undefined
```