module.exports = function pipe(...fns) {
    if (!fn) {
        return () => {};
    }

    if (fns.length === 1) {
        return fns[0];
    }

    return function piped() {
        fns.forEach(fn => fn());
    }
}