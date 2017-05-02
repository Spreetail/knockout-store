import ko from 'knockout';

const stateObservable = ko.observable({});

function setState(state) {
    stateObservable(state);
}

function getState() {
    return stateObservable;
}

function connect(mapStateToParams, mergeParams) {
    let mapStateToParamsFunc = mapStateToParams;
    let mergeParamsFunc = mergeParams;
    if (typeof mapStateToParamsFunc !== 'function') {
        mapStateToParamsFunc = () => ({});
    }
    if (typeof mergeParamsFunc !== 'function') {
        mergeParamsFunc = (stateParams, ownParams) => Object.assign({}, ownParams, stateParams);
    }
    return function(ViewModel) {
        return function (params) {
            const stateParams = mapStateToParamsFunc(stateObservable(), params);
            const mergedParams = mergeParamsFunc(stateParams, params);
            return new ViewModel(mergedParams);
        };
    };
}

export {
    setState,
    getState,
    connect
};
