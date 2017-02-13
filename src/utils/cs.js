module.exports = (name, args) => {
    const call = JSON.stringify(args)
    .replace('[', '(');
    const last = call.lastIndexOf(']');
    return name + call.substring(0,last)+')'+call.substring(last+1);
}