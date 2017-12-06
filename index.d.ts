import '@types/knockout';

export function setState(state: any): void;

export function getState<T>(): KnockoutObservable<T>;

export function connect(
  mapStateToParams?: (state?: any, ownParams?: any) => any,
  mergeParams?: (stateParams: any, ownParams: any) => any
): (
  viewModel: KnockoutComponentTypes.ViewModelFunction
) => KnockoutComponentTypes.ViewModelFunction;
