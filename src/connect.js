import { getState } from './store';

const defaultMapStateToParams = () => ({});
const defaultMergeParams = (stateParams, ownParams) =>
  Object.assign({}, ownParams, stateParams);

const connect = (mapStateToParams, mergeParams) => {
  let mapStateToParamsFunc = mapStateToParams;
  let mergeParamsFunc = mergeParams;
  if (typeof mapStateToParamsFunc !== 'function') {
    mapStateToParamsFunc = defaultMapStateToParams;
  }
  if (typeof mergeParamsFunc !== 'function') {
    mergeParamsFunc = defaultMergeParams;
  }
  return ViewModel => {
    if (typeof ViewModel !== 'function') {
      throw new Error('ViewModel must be function.');
    }
    return ownParams => {
      const state = getState();
      const stateParams = mapStateToParamsFunc(state(), ownParams);
      const mergedParams = mergeParamsFunc(stateParams, ownParams);
      return new ViewModel(mergedParams);
    };
  };
};

export default connect;
