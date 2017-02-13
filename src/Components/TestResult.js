const React = require('react');
const { connect } = require('react-redux');

const { isTesting, isExpected, notExpected } = require('../utils/messages');
const { FAILURE, SUCCESS, PENDING, TESTING } = require('../Store/results');
const runner = require('../Actions/runner');

const statusName = status => {
	switch (status) {
		case FAILURE: return 'failure';
		case SUCCESS: return 'success';
		case PENDING: return 'pending';
		case TESTING: return 'testing';
		default: return '';
	}
}

const testMessage = test => {

	if (test.error) return notExpected(test.fn.name, test.args, 'ERROR: ' + test.error, test.expected);

	switch (test.status) {
		case FAILURE: return notExpected(test.fn.name, test.args, test.actual, test.expected);
		case SUCCESS: return isExpected(test.fn.name, test.args, test.actual, test.expected);
		case PENDING: return isTesting(test.fn.name, test.args);
		case TESTING: return isTesting(test.fn.name, test.args);
		default: return '';
	}
}

const TestResult = (props) => {
	const test = props.test;
	const rerun = props.rerun;
	let message = testMessage(test);

	return (
		<div className={"testResult " + statusName(test.status)}
			onClick={() => rerun(props.index)}>
			<p> { props.index + 1}. { test.status }: <span>{ message }</span></p>
		</div>
	)
}

module.exports = connect(
	state => ({}),
	dispatch => ({
		rerun: (i) => dispatch(runner(i, true))
	})
)(TestResult);