const React = require('react');

const { connect } = require('react-redux');

const TestStats = require('./TestStats');
const TestResult = require('./TestResult');

const TestRunner = (props) =>
  <div>
    <TestStats results={props.results}/> 
    <div className="testsContainer">
        { (props.results || [])
            .map((t, i) => 
                <TestResult key={i} test={t} index={i} />)
        } 
    </div>
  </div>

  module.exports = connect(state => state)(TestRunner);