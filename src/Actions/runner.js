const { isTesting, isExpected, notExpected } = require('../utils/messages');
const { FAILURE, SUCCESS, TESTING, PENDING, startNew, finishNew } = require('../Store/results');

const buildResult = (status, fn, test) => (actual, error) => Object.assign({}, test, {
    fn: fn,
    status: status,
    actual: actual,
    error: error
});

module.exports = (i, debug) => {
    return (dispatch, getState) => {
        const test = getState().results[i];
        const buildPending = buildResult(PENDING, test.fn, test);
        const buildTesting = buildResult(TESTING, test.fn, test);
        const buildFailure = buildResult(FAILURE, test.fn, test);
        const buildSuccess = buildResult(SUCCESS, test.fn, test);
        const expected = test.expected;

        const testing = buildTesting();
        const start = () => dispatch(startNew(testing, i));
        const finish = t => dispatch(finishNew(t, i));
        
        return Promise.resolve(start())
        .then(() => {
            if (debug) debugger;
            return test.fn.apply(null, test.args);
        })
        .then(actual => {
            if (actual === expected) {
                finish(buildSuccess(actual));
            } else {
                finish(buildFailure(actual));
            }
        })
        .catch(err => {
            finish(buildFailure(null, err.message));
        });
    }
}