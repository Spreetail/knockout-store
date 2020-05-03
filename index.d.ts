import { Observable, components } from 'knockout';

export function setState<T>(state: T): void;

export function getState<T>(): Observable<T>;

interface ViewModelFactoryFunction {
  (params?: components.ViewModelParams): components.ViewModel;
}

interface ViewModelInstantiator
  extends components.ViewModelConstructor,
    ViewModelFactoryFunction {}

interface MapStateToParamsFn {
  <T>(
    state?: T,
    ownParams?: components.ViewModelParams
  ): components.ViewModelParams;
}

interface MergeParamsFn {
  (
    stateParams: components.ViewModelParams,
    ownParams: components.ViewModelParams
  ): components.ViewModelParams;
}

export function connect(
  mapStateToParams?: MapStateToParamsFn | null,
  mergeParams?: MergeParamsFn | null
): (
  viewModel: components.ViewModelConstructor | ViewModelFactoryFunction
) => ViewModelInstantiator;
