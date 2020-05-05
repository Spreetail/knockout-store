import { getState } from './store';

const defaultMapStateToParams = () => ({});
const defaultMergeParams = (stateParams, ownParams) =>
  Object.assign({}, ownParams, stateParams);

const throwIfNotAFunction = (o, message) => {
  if (typeof o !== 'function') {
    throw new Error(message);
  }
};

const makeNullableFunctionArgInvalidTypeMessage = (arg, argName) =>
  `Invalid type '${typeof arg}' for connect parameter ${argName}. ${argName} must be a null or a function.`;

const throwIfNullableFuctionArgNotAFunction = (arg, argName) => {
  throwIfNotAFunction(
    arg,
    makeNullableFunctionArgInvalidTypeMessage(arg, argName)
  );
};

const connect = (
  mapStateToParams = defaultMapStateToParams,
  mergeParams = defaultMergeParams
) => {
  const mapStateToParamsFunc =
    mapStateToParams === null ? defaultMapStateToParams : mapStateToParams;
  const mergeParamsFunc =
    mergeParams === null ? defaultMergeParams : mergeParams;

  throwIfNullableFuctionArgNotAFunction(
    mapStateToParamsFunc,
    'mapStateToParams'
  );
  throwIfNullableFuctionArgNotAFunction(mergeParamsFunc, 'mergeParams');

  return (ViewModel) => {
    throwIfNotAFunction(
      ViewModel,
      `Invalid type '${typeof ViewModel}' for ViewModel passed to result of connect(). ViewModel must be a function.`
    );
    return (ownParams) => {
      const state = getState();
      const stateParams = mapStateToParamsFunc(state(), ownParams);
      const mergedParams = mergeParamsFunc(stateParams, ownParams);
      return new ViewModel(mergedParams);
    };
  };
};

export default connect;
