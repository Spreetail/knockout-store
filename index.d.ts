import '@types/knockout';

export function setState(state: any): void;

export function getState<T>(): KnockoutObservable<T>;

export function connect(
  mapStateToParams: (state?: any, ownParams?: object) => object,
  mergeParams?: (stateParams: object, ownParams: object) => object
): (
  viewModel: KnockoutComponentTypes.ViewModelFunction
) => KnockoutComponentTypes.ViewModelFunction;
