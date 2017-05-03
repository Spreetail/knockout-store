import { getState } from './store';

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
        if (typeof ViewModel !== 'function') {
            throw new TypeError('ViewModel must be function.');
        }
        return function (ownParams) {
            const state = getState();
            const stateParams = mapStateToParamsFunc(state(), ownParams);
            const mergedParams = mergeParamsFunc(stateParams, ownParams);
            return new ViewModel(mergedParams);
        };
    };
}

export default connect;
