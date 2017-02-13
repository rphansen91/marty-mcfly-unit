const React = require('react');
const ReactDOM = require('react-dom');
const { Provider } = require('react-redux');

const { startAll, finishAll } = require('./Store/results');
const store = require('./Store/store');
const runner = require('./Actions/runner');

const TestRunner = require('./Components/TestRunner');

function mcFlyRunner (testCases, functionUnderTest) {
    renderRunner();
    store.dispatch(startAll(testCases, functionUnderTest));
    
    (function asyncLoop(i) {
        var t = testCases[i];
        if (!t) return store.dispatch(finishAll());

        store.dispatch(runner(i))
        .then(() => asyncLoop(++i));
    })(0)
}

function renderRunner(results) {
  ReactDOM.render( 
    <Provider store={store}>
        <TestRunner results = {results || []}/>
    </Provider>,
    document.getElementById('container')
  );
}

window.mcFlyRunner = mcFlyRunner;
module.exports = mcFlyRunner;