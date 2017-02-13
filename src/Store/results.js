const START_ALL_TESTS = "START_ALL_TESTS";
const FINISH_ALL_TESTS = "FINISH_ALL_TESTS";
const START_NEW_TEST = "START_NEW_TEST";
const FINISH_NEW_TEST = "FINISH_NEW_TEST";

// STATUSES
const SUCCESS = "SUCCESS";
const FAILURE = "FAILURE";
const TESTING = "TESTING";
const PENDING = "PENDING";

const startAll = (payload, fn) => ({
    type: START_ALL_TESTS,
    payload: (payload || []).map(p => {
        p.fn = fn;
        p.status = PENDING;
        return p;
    })
});

const finishAll = () => ({
    type: FINISH_ALL_TESTS
});

const startNew = (payload, index) => ({
    type: START_NEW_TEST,
    index: index,
    payload: payload
});

const finishNew = (payload, index) => ({
    type: FINISH_NEW_TEST,
    index: index,
    payload: payload
});

const immutableSwap = (arr, obj, index) => (arr || [])
.map((o, i) => {
    if (index === i) return obj;
    return o;
})

const results = (state=[], action) => {
    switch (action.type) {
        case START_ALL_TESTS:
            return action.payload;
        case START_NEW_TEST: 
            return immutableSwap(state, action.payload, action.index);
        case FINISH_NEW_TEST: 
            return immutableSwap(state, action.payload, action.index);
        default: return state;
    }
}

module.exports = {
    startAll,
    finishAll,
    startNew,
    finishNew,
    results,
    SUCCESS,
    FAILURE,
    TESTING,
    PENDING
}
