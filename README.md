Marty McFly Unit - Time Travel Test Runner
=====================================

[Github](https://github.com/rphansen91/marty-mcfly-unit)
[Demo](https://rphansen91.github.io/marty-mcfly-unit/)

Description
------------

Run your tests in any browser and see more detail when tests fail by stepping back in time with [redux-devtools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd/related).

Rerunning failed tests allows you to hop straight into the chrome debugger and step through the test execution.

Installation
------------

```
npm install heap-grid
```

Usage
-----

```js
import mcFlyRunner from 'marty-mcfly-unit'

function positiveSum(a, b) {
    return new Promise((res, rej) => {
        const val = a + b > 0;
        setTimeout(() => {
            res(val);
        }, 2000)
    })
}

const testCases [
    {
        args: [0, 0],
        expected: false
    }, {
        args: [1, 1],
        expected: true
    }, {
        args: [-2, 0],
        expected: false
    }
]

mcFlyRunner(testCases, positiveSum);
```
