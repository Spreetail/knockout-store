const stateObservable = ko.observable({});

function setState(state) {
    stateObservable(state);
}

function getState() {
    return stateObservable;
}

export {
    setState,
    getState
};
