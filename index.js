function positiveSum(a, b) {
    return new Promise((res, rej) => {
        const val = a + b > 0;
        setTimeout(() => {
            res(val);
        }, 2000)
    })
}

const testCases = [{
  args: [0, 0],
  expected: false
}, {
  args: [1, 1],
  expected: true
}, {
  args: [-2, 0],
  expected: false
}];

mcFlyRunner(testCases, positiveSum);

