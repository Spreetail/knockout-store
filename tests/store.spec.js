import ko from 'knockout';
import { getState, setState } from '../src/store';

describe('store', () => {
  afterEach(() => {
    setState(undefined); // eslint-disable-line no-undefined
  });
  describe('getState', () => {
    it('should return an observable', () => {
      const state = getState();
      expect(ko.isObservable(state)).to.be.true;
    });
    it('should return an observable with an undefined value', () => {
      const state = getState();
      expect(state()).to.be.undefined;
    });
  });
  it('should update state', () => {
    const initialState = {
      prop1: 1,
      prop2: {
        prop3: 2,
      },
    };
    setState(initialState);
    const state = getState();
    // checks for '==='' equivalence
    expect(state()).to.equal(initialState);
  });
});
