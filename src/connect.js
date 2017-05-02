import { getState } from './store';

function connect(mapStateToParams, mergeParams) {
    if (typeof mapStateToParams !== 'function') {
        mapStateToParams = (state) => {};
    }
    if (typeof mergeParams !== 'function') {
        mergeParams = Object.assign.bind(null, {});
    }
    return function(ViewModel) {
        return function (params) {
            const state = getState();
            const stateParams = mapStateToParams(state(), params);
            const mergedParams = mergeParams(params, stateParams);
            return new ViewModel(mergedParams);
        };
    };
}

export default connect;
