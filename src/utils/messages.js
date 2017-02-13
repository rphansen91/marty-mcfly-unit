const callSignature = require('./cs');

const isTesting = (name, args) =>
    callSignature(name, args) + ' => ?';

const isExpected = (name, args, a, e) => 
    callSignature(name, args) + ' => ' + a;

const notExpected = (name, args, a, e) => 
    callSignature(name, args) + ' => ' + a + ' Expected ' + e;

module.exports = {
    isTesting,
    isExpected,
    notExpected
}