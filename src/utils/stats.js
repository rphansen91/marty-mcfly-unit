const { FAILURE, SUCCESS, TESTING, PENDING } = require('../Store/results');

module.exports = results => {
    const complete = results.filter(t => t.status !== TESTING && t.status !== PENDING);
    return complete.reduce(function(stats, r) {
        if (r.status === SUCCESS) stats.passed++;
        return stats;
    }, {
        passed: 0,
        total: complete.length
    });
}