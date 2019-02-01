const filter = require('../operators/filter.operator');
const map = require('../operators/map.operator');

module.exports = createObservable = (subscribe) => {
    return {
        subscribe: subscribe,
        map: map,
        filter: filter,
    };
}