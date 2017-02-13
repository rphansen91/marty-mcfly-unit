const React = require('react');

const testStats = require('../utils/stats');

module.exports = (props) => {
  var stats = testStats(props.results || []);
  if (!stats.total) return <div className="statsContainer">Beginning Test Suite</div>
  return (
      <div className="statsContainer">
        Passed { stats.passed } out of { stats.total }: {
    (stats.passed / stats.total * 100).toFixed(2) }%
    </div>
  )
}