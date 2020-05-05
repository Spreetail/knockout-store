# knockout-store
State management for [Knockout](http://knockoutjs.com/) apps.
Inspired by [Redux](http://redux.js.org/)
and [react-redux](https://github.com/reactjs/react-redux).

Managing app state is hard. While tools like Redux exist to solve this problem,
mixing Redux and Knockout might be overkill for your app.
Knockout already has [observables](http://knockoutjs.com/documentation/observables.html)
which offer some of the functionality provided by a [Redux store](http://redux.js.org/docs/api/Store.html),
namely subscriptions.

**knockout-store** is a tiny library offering an API for app state management in Knockout apps.
Define your app state once using `setState`,
and then connect your view models with the `connect` method.
This enables developers to decouple view models from one another,
by giving each view model access to the app state instead.

For a deeper understanding of the library and the motivation behind it,
see [the wiki](https://github.com/Spreetail/knockout-store/wiki).

## Installation
The best way to use **knockout-store** is to add it as an npm dependency.
```
npm install --save knockout-store
```

Once installed, **knockout-store** supports several types of imports.

### ES6
```javascript
import { connect, getState, setState } from 'knockout-store';
```

### UMD Require
```javascript
const knockoutStore = require('knockout-store');
```

### UMD Script Tag
Referencing a script in the `dist` directory on a page will add the [API](#api) methods to `ko.store`.
```html
<script src="node_modules/knockout-store/dist/knockout-store.js"></script>
<!-- Or... -->
<script src="node_modules/knockout-store/dist/knockout-store.min.js"></script>
```

Then, in JavaScript:
```javascript
ko.store.setState(someStateObject);
```

## Usage
Here's a small example, skip to the [API](#api) section for details on the methods.

### Setting the App State
```javascript
import ko from 'knockout';
import { setState } from 'knockout-store';

const state = {
    cats: ko.observableArray(['Mr. Whiskers', 'Charles', 'Missy']),
    selectedCat: ko.observable()
};

setState(state);
```

### Connecting a View Model
This might look familiar if you've used react-redux.
```javascript
import { connect } from 'knockout-store';

function CatSelectorViewModel(params) {
    const self = this;
    self.cats = params.cats;    // from the state object, see mapStateToParams below
    self.selectCat = function(cat) {
        params.selectedCat(cat);    // also from the state object
    }
}

function mapStateToParams({ cats, selectedCat }) {  // the state object
    return { cats, selectedCat };   // properties on state to add to view model's params
}

export default connect(mapStateToParams)(CatSelectorViewModel);
```

### Connecting Another View Model
```javascript
import { connect } from 'knockout-store';

function SelectedCatDisplayViewModel(params) {
    const self = this;
    // Since params.selectedCat is an observable,
    // this computed will update appropriately
    // after selectedCat is updated in the other view model.
    self.selectedCatText = ko.computed(() => `You've selected ${params.selectedCat()}!`));
}

function mapStateToParams({ selectedCat }) {
    return { selectedCat };
}

export default connect(mapStateToParams)(SelectedCatDisplayViewModel);
```
> Confused? Have a look at [the wiki](https://github.com/Spreetail/knockout-store/wiki)
for a more in-depth example.

### Using the Connected View Models
`connect` returns a wrapped view model and can be used like any other view model.
```javascript
import CatSelectorViewModel from './cat-selector-view-model';
import SelectedCatDisplayViewModel from './selected-cat-display-view-model';

ko.applyBindings(CatSelectorViewModel, document.getElementById('cat-selector'));
ko.applyBindings(SelectedCatDisplayViewModel, document.getElementById('selected-cat-display'));
```

> Note: Use with [Knockout Components](http://knockoutjs.com/documentation/component-overview.html)
for a more modern development experience.
See [knockout-store-todo](https://github.com/Spreetail/knockout-store-todo).

## API
### `setState(state)`
Sets the app state to have value of `state`.
`state` is stored in an observable, which you can access through the `getState()` method (see below).
For most cases, `state` will be an object made up of other observable properties.
In this situation, calling `setState` again will overwrite the object and all subscriptions will be lost.
For this reason, it's unlikely this should be called more than once.

#### Arguments
- [`state`] (_Object_): The object to store in the app state observable.

### `getState()`
Returns the app state observable.
If you need to subscribe directly to the app state, you can do so with this method.
```javascript
const stateObservable = getState();
stateObservable.subscribe((newState) => {
    // do something with the new state
});
```

It's usually preferable to connect your view models to the state through the `connect()` method instead (see below).

### `connect([mapStateToParams], [mergeParams])`
Connects a view model to the app state.
Pass the view model to be connected to the result of this function.

#### Arguments
 - [`mapStateToParams(state, [ownParams]): stateParams`] (_Function_):
 If specified, this argument is a function to map from the app state (`state`) to the `stateParams` object passed to `mergeParams` (see below). `state` will be the value of the observable returned by `getState()` (see above).
 If this argument is `null` or not specified, a function returning an empty object is used instead.
 - [`mergeParams(stateParams, ownParams): params`] (_Function_):
 If specified, this argument is a function responsible for merging `stateParams` (the result of `mapStateToParams`, see above) and `ownParams` (the `params` object the connected view model was called with).
 If this argument is `null` or not specified, `Object.assign({}, ownParams, stateParams)` is used instead.

## Testing
Run `npm run test` to start the [Karma](https://karma-runner.github.io/1.0/index.html)
test runner with [PhantomJS](http://phantomjs.org/).
You can also run `npm run test-with-chrome` to test with Google Chrome instead of PhantomJS if that's more your thing.
If you just want to run the tests once, you can use `npm run test-once`.

## License
Licensed under the [MIT License](https://opensource.org/licenses/MIT).
