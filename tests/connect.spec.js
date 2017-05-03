import { connect } from '../src/index';
import { setState } from '../src/store';

function viewModelMock(params) {
    return { params };
}

describe('connect', () => {
    const testState = {
        prop1: 1,
        prop2: 2
    };
    beforeEach(() => {
        setState(testState);
    });
    afterEach(() => {
        setState(undefined); // eslint-disable-line no-undefined
    });

    it('should return a function', () => {
        expect(connect()).to.be.a('function');
    });
    it('should return a function when return function is called', () => {
        expect(connect()(viewModelMock)).to.be.a('function');
    });
    it('should throw a TypeError if returned function is called without a viewmodel', () => {
        expect(() => connect()()).to.throw(TypeError);
        expect(() => connect()('not a viewmodel')).to.throw(TypeError);
    });

    describe('mapStateToParams', () => {
        it('should map state to params', () => {
            function mapStateToParams({ prop1, prop2 }) {
                return { prop1, prop2 };
            }
            const ConnectedViewModel = connect(mapStateToParams)(viewModelMock);
            const { params } = new ConnectedViewModel({});
            expect(params).to.have.property('prop1', 1);
            expect(params).to.have.property('prop2', 2);
        });
        it('should only map desired state properties', () => {
            function mapStateToParams({ prop1 }) {
                return { prop1 };
            }
            const ConnectedViewModel = connect(mapStateToParams)(viewModelMock);
            const { params } = new ConnectedViewModel({});
            expect(params).to.have.property('prop1', 1);
            expect(params).to.not.have.property('prop2');
        });
        it('should not interfere with a viewModel\'s ownParams', () => {
            const ConnectedViewModel = connect()(viewModelMock);
            const { params } = new ConnectedViewModel({ ownParam1: 1, ownParam2: 2 });
            expect(params).to.have.property('ownParam1', 1);
            expect(params).to.have.property('ownParam2', 2);
        });
        it('should execute mapping when instantiating the view model', () => {
            let mapStateToParamsCalled = false;
            function mapStateToParams() {
                mapStateToParamsCalled = true;
            }
            const ConnectedViewModel = connect(mapStateToParams)(viewModelMock);
            expect(mapStateToParamsCalled).to.be.false;
            new ConnectedViewModel(); // eslint-disable-line no-new
            expect(mapStateToParamsCalled).to.be.true;
        });
        it('should pass state followed by ownParams to mapStateToParams', () => {
            const params = {
                ownParam1: 1
            };
            function mapStateToParams(state, ownParams) {
                expect(state).to.equal(testState);
                expect(ownParams).to.equal(params);
            }
            const ConnectedViewModel = connect(mapStateToParams)(viewModelMock);
            new ConnectedViewModel(params); // eslint-disable-line no-new
        });
    });

    describe('mergeParams', () => {
        it('should resolve param collisions with stateParams by default', () => {
            function mapStateToParams({ prop1, prop2 }) {
                return { prop1, prop2 };
            }
            const ownParams = {
                prop1: 'overwritten',
                prop2: 'overwritten',
                prop3: 3
            };
            const ConnectedViewModel = connect(mapStateToParams)(viewModelMock);
            const { params } = new ConnectedViewModel(ownParams);
            expect(params).to.have.property('prop1', 1);
            expect(params).to.have.property('prop2', 2);
            expect(params).to.have.property('prop3', 3);
        });
        it('should pass stateParams followed by ownParams to mergeParams', () => {
            const params = {
                ownParam1: 1
            };
            function mapStateToParams(state) {
                return state;
            }
            let mergeParamsCalled = false;
            function mergeParams(stateParams, ownParams) {
                expect(stateParams).to.equal(testState);
                expect(ownParams).to.equal(params);
                mergeParamsCalled = true;
            }
            const ConnectedViewModel = connect(mapStateToParams, mergeParams)(viewModelMock);
            new ConnectedViewModel(params); // eslint-disable-line no-new
            expect(mergeParamsCalled).to.be.true;
        });
        it('should use mergeParams to resolve collisions', () => {
            const testParams = {
                ownParam1: 1
            };
            function mapStateToParams(state) {
                return state;
            }
            function mergeParams(stateParams, ownParams) {
                return ownParams;
            }
            const ConnectedViewModel = connect(mapStateToParams, mergeParams)(viewModelMock);
            const { params } = new ConnectedViewModel(testParams);
            expect(params).to.equal(testParams);
        });
    });
});
