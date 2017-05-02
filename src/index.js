const stateObservable = ko.observable({});

function setState(state) {
    stateObservable(state);
}

function getState() {
    return stateObservable;
}

function connect(mapStateToParams, mergeParams) {
    if (typeof mapStateToParams !== 'function') {
        mapStateToParams = (state) => {};
    }
    if (typeof mergeParams !== 'function') {
        mergeParams = Object.assign.bind(null, {});
    }
    return function(ViewModel) {
        return function (params) {
            const stateParams = mapStateToParams(stateObservable(), params);
            const mergedParams = mergeParams(params, stateParams);
            return new ViewModel(mergedParams);
        };
    };
}

export {
    setState,
    getState,
    connect
};
