---
title: Wes Bos React Notes
date: July 14, 2019
---

"Everything in React is a component"
* components: reusable pieces

Syntax for putting a method inside a component
```javascript
  render() {
  }
```
* every Class must have at least one method

Cherry pick a single method from a package:
`import { render } from 'react-dom';`

Import the entire package (note 'react' will throw errors if you do 'React' instead):
`import React from 'react';`

render();
takes 2 things
1) JSX(html)
2) mounting point - DOM element to use to mount to page
like
`render(<p>HEllow</p>, document.querySelector('#main'));`
OR
`render(<StorePicker/>, document.querySelector('#main'));`
^This is rendering the component StorePicker using a self-closing tag

* React INSPECTOR/DEV TOOLS will show REACT custom components in PURPLE and other DOM elements in grey
* React will need to be imported into each component individually

## Writing HTML with JSX 4 / 29
* to add a class in JSX you need to use `className` instead of `class`. Using `class` will throw this error: `index.js:1437 Warning: Invalid DOM property `class`. Did you mean `className`?`

```javascript
  render() {
  return 
  <form className="something">
  <h2>Stupid StorePicker</h2>  
  </form>}
```
will break because ASI (automatic semi-colon insertition), a part of JavaScript, will think you forgot a semi-colon after `return` and insert one which will return nothing

*  
`return` a pair of () and put HTMl inside that instead like this:
```javascript
  render() {
  (
      return 
      <form className="something">
          <h2>Stupid StorePicker</h2>  
      </form>
  )}
```
which will run the code in the parentheses first then return the parentheses and a form tag

* JSX cannot return sibling elements UNLESS you wrap them (for instance in flexbox you need sibling elements) in `<React.Fragment> stuff </React.Fragment>` (new in React 16.2) but will be removed in the DOM (as opposed to the previous method of wrapping things in an empty <div> which results in many unneccessary divs). 
* if `import React, { Fragment } from 'react';` is added to the top then `<Fragment> stuff </Fragment>` can be used instead of `<React.Fragment> stuff </React.Fragment>`
* In the future we should be able to put blank tags <>on either side instead</>
* Commenting in JSX: use `{ /* comment */ }` must use JavaScript block comment not HTML comments
  * in JSX {} mean we're jumping back into JavaScript
  * Comments need to be nested within component or they will throw errors- cannot be siblings above component 


## Loading CSS into our React Application 5 / 29
```html
  <div id="main">
    <!-- This is where our React app will go -->
  </div>
```

## Creating our application layout with components 6 / 29

## Passing Dynamic data with props 7 / 29
* Tags need to be provided attributes. For example, an `img` tag needs `src` and `alt` attributes
* Props are the way we get data into a component in React
* State is where the data lives and props are how the data gets where it needs to be
  * If state is the home and props is the car that it uses to get there
* There are no set props for components - you make what you need making sure not to overwrite existing HTML attributes
* We go to the component instance (where the component is called) and create the props
* If you want to pass in anything besides a string then you use curly brackets
```html
  <div className='menu'>
    <Header tagline='More react tutorials' age={35} cool={false}/>
  </div>
```
* When you want to use a variable within JSX use `{ }` - tells it we are going to back to JavaScript for what is in brackets to use JavScript variable
* in `{ this.props.tagline }`
  * `this` is the component instance
  * `.props` is an object inside of the component
  * `tagline` is contained within the `.props` object
* Wes talks about `$0` and `$r`. Essentially, `$r` will work in the console like `$0` but for React elements. `$r` allows us to inspect the specific React component to see its props. I found this article https://developers.google.com/web/tools/chrome-devtools/console/utilities that explains it better:
"The `$0`, `$1`, `$2`, `$3` and `$4` commands work as a historical reference to the last five DOM elements inspected within the Elements panel or the last five JavaScript heap objects selected in the Profiles panel. `$0` returns the most recently selected element or JavaScript object, `$1` returns the second most recently selected one, and so on."
* Create-React-App uses ESLint so it will return warnings about unused things


## Stateless Functional Components 8 / 29
* if your component only has a `render` method and prop types then it can be converted to a Stateless Functional Component
```javascript
function Header (props) {
  return (
    <header className='top'>
    <h1>
      Catch 
      <span className="ofThe">
        <span className="of">Of</span>
        <span className="The">The</span>
      </span>
      Day
    </h1>
    <h3 className="tagline">
      <span>{ props.tagline }</span>
    </h3>
  </header>
  )
}
```
`=`
```javascript
  class Header extends React.Component {
  render() {
    return (
      <header className='top'>
        <h1>
          Catch 
          <span className="ofThe">
            <span className="of">Of</span>
            <span className="The">The</span>
          </span>
          Day
        </h1>
        <h3 className="tagline">
          <span>{ this.props.tagline }</span>
        </h3>
      </header>
    );
  }
}
```
* when you have a `function` there is NO `this` so the function gets one argument: `function Header (props)`, so we remove the `this.` from `this.props.tagline`
* ES6 arrow systax:
```javascript
const Header = (props) => {
  return (
    <header className='top'>
    <h1>
      Catch 
      <span className="ofThe">
        <span className="of">Of</span>
        <span className="The">The</span>
      </span>
      Day
    </h1>
    <h3 className="tagline">
      <span>{ props.tagline }</span>
    </h3>
  </header>
  );
}
```
* ES6 arrow systax + implicit return (meaning keyword return is not used), note that if you only have 1 argument then the () are not need but if you have 2 or more arguments then like (props, i) then () are required:
```javascript
const Header = props => (
    <header className='top'>
    <h1>
      Catch 
      <span className="ofThe">
        <span className="of">Of</span>
        <span className="The">The</span>
      </span>
      Day
    </h1>
    <h3 className="tagline">
      <span>{ props.tagline }</span>
    </h3>
  </header>
);
```
* Props can also be destructured into variables, in which case we remove the `props.` from `{ props.tagline }`
```javascript
const Header = ({tagline, age}) => (
    <header className='top'>
    <h1>
      Catch 
      <span className="ofThe">
        <span className="of">Of</span>
        <span className="The">The</span>
      </span>
      Day
    </h1>
    <h3 className="tagline">
      <span>{ tagline }</span>
    </h3>
  </header>
);
```
* if it's just something that gets passed in data via props and returns some JSX then a stateless funtional component will save code and according to Wes increase performance


## Routing with React Router 9/29
* routing is not baked into React
* routing is deferred to an external component like 'React Router' or 'Next.js'
* this course is using React Router
* `import { BrowserRouter } from 'react-router-dom';` is specifically used for the push state in the broswer; React can also be used for Native
* the way `<Switch>` tag works, it's going to try the first route, if that doesn't work then it will go to the next route, and if it can't find the route it will fall back to the 'not found' route
```html
    <Switch>
      <Route></Route>
    </Switch>
```
* `<Route exact path='/' component={ StorePicker }/>`: when the route is **exactly** `/` display the `StorePicker` component
* `<Route path='/store/:storeId' component={ App }/>`: when the route contains `/store/anystoreId` the `App` component will be displayed
* `<Route component={ NotFound }/>` will catch all 404s


## Helper and Utility Functions 10/29
* Helper: export function helper.js   (not export default): "A helper function is a function that performs part of the computation of another function. Helper functions are used to make your programs easier to read by giving descriptive names to computations. They also let you reuse computations, just as with functions in general." https://web.cs.wpi.edu/~cs1101/a05/Docs/creating-helpers.html
* this is a **named export**: `import { render } from 'react-dom';`
* Utility: put in utility.js :
* `value` vs `default value`: 
  * In React if you put a `value` on an input you will get the error `Warning: Failed prop type: You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.`. 
  * **This is because `values` of inputs always need to be directly attached to state** when the data changes in once place it will change everywhere else on the page
  * `default value`: if you just want default text on the input then use `default value`. To use a function/JavaScript `<input type='text' required placeholder='Store Name' defaultValue={ getFunName() }></input>` when the component mounts to the page it will run the function `getFunName`


## Events, Refs and this Binding 11/29
* https://reactjs.org/docs/events.html
* React events are similiar to those in Vanilla JavaScript except that: 
  1. they are wrapped in a **SyntheticEvent** which makes sure it works across browsers and devices 
  2. and are done using **inline event handlers** like so `<button onClick={ this.handleClick }>Click Me</button>`
    * we put () where we define the function not in `{ this.handleClick }`. Putting () in `{ this.handleClick() }` would cause the function to run when it is mounted to the page (on page load) instead of when it was clicked
* For Forms, we want to listen to the `onSubmit` event of the FORM not the `onClick` event of the button
* *in Console settings there is "Preserve log" option to 'not clear log on page reload/naviagation*
* He says the Golden Rule in React is *"Don't touch the DOM"* we want to focus on what's happening in our React app (although that is what happens with Refs) but generally we want to sync our data through state
* in React, a **ref** allows us to access an actual DOM element on the page
* older versions of React included a `ref="myInput"` that could be applied as a attribute but that is NOW DEPRECATED
* **function ref** `ref={(myInput) => this.myInput = myInput}` was the way for the longest time, and is still valid, but the current convention is to create an empty ref at the top of the class `myInput = React.createRef();` then go to the input to add a `ref={ this.myInput }` attribute
* we bind our methods to the component so they are accessible (there's more around 11min in) so we use `super();` first in our constructor
```javascript
constructor() {
  super();
  this.goToStore = this.goToStore.bind(this);
}
```
* *if we don't bind it then `this` is undefined but when we do `this` refers to the instance of that component*
* if we try to run a constructor without `super();` the error `assertThisInitialized.js:3 Uncaught ReferenceError: this hasn't been initialised - super() hasn't been called` will occur
* adding `super();` run (create) component we are extending first
* The constuctor method can get unslightly when binding multiple methods. The alternative to declaing a method on the component is to declare a property on which is going to be set to an arrow function; the property will be bound to the instance rather than nothing then we will be able to access `this` inside of it
```javascript
class StorePicker extends React.Component {
  myInput = React.createRef();
  // `goToStore` is a property called "goToStore" just like `myInput` is a property on the component that we set to an arrow function which will allow us to bind the value of this to the store component
  goToStore = (event) => {
    // 1. Stop the form from submitting
    event.preventDefault();
    // 2. Get the text from that input
    console.log(this);
    // 3. Change the page to /store/whatever-they-entered
  }
```
* if you need to access `this` within a custom method you must use the syntax `goToStore = (event) => {` or go the constructor route


## Handling Events 12/29
```javascript
class StorePicker extends React.Component {
  myInput = React.createRef();

  // `goToStore` is a property called "goToStore" just like `myInput` is a property on the component that we set to an arrow function which will allow us to bind the value of this to the store component
  goToStore = (event) => {
    // 1. Stop the form from submitting
    event.preventDefault();
    // 2. Get the text from that input
    const storeName = this.myInput.current.value;
    // 3. Change the page to /store/whatever-they-entered (using push state to change the URL without refreshing the page or losing anything in memory)
    this.props.history.push(`/store/${storeName}`);
  }
```

## Understanding State 13/29
* **State** is essentially an object that lives inside of a component that stores all of the data that component, and maybe some of its children, need
* In React, data stays in `state`. React *reacts* to the change in state and will update all instances of that variable across the page
*  `console.log('Making a fish 🐟')`
* *There is no way to share between components upon a page unless they share a parent component* 
* In this setup, all components live inside the parent component `App`
* You can't pass data up - only down
* We begin by setting the **initial state**: what the component will look like when it initially mounts on the page befor any changes have been made to state
* Either the:
  1. Constuctor method can be used 
  ```javascript
  constructor() {
    super();
    this.state = {
      fishes: {},
      order: {}
    }
  };
  ```
  2. OR the Property (Wes's preferred way)
    ```javascript
    state = {
      fishes: {},
      order: {}
    };
  ```
* **"The methods that update state and the actual state always need to live in the exact same component"**
* To call a method from a child component, pass the method down in the parent to the child as a prop like `<Inventory addFish={ this.addFish } />` inside `App`
* To pass a method from a child component to the child's child **`<AddFishForm addFish={ this.props.addFish }/>`** *must be used because the method doesn't live in the child, it's just being passed in via props* (NOT `<AddFishForm addFish={ this.addFish }/>`)
* In order to update state, their existing set state API must be used
  * 1. Take a copy of the existing state object
    ```java
    const fishes = { ...this.state.fishes };
    ```
      * you never want to reach directly into state and change it. that's called a **mutation** in JavaScript (when you reach directly into an object - it can cause performance issues with things updating out of order)
    * in which `...` is an **object spread** which will take a copy of everything in the object
    * it's not necessary to do a deep clone
  * 2. Add our new fish to fishes variable
    ```javascript
    fishes[`fish${Date.now()}`] = fish;
    ```
  * 3. Set the new fishes object to state
    this.setState({
      fishes: fishes
    });
so
```javascript
  addFish = fish => {
    // 1. Take a copy of the existing state
    const fishes = { ...this.state.fishes };
    // 2. Add our new fish to fishes variable
    fishes[`fish${Date.now()}`] = fish;
    // 3. Set the new fishes object to state
    this.setState({
      fishes: fishes
    });
  }
```
* in ES6 when the key and value are the same like `fishes: fishes` you can use the shorthand `fishes` instead
* `this.setState({ fishes });` pass in whatever parts of state, in this case `fishes`, that need to be updated - it could also be `this.setState({ fishes, order });`
  

## Loading data into state onClick 14/29
* Images go in `public` folder
```javascript
  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  };
```
^ set state of `fishes` to `sampleFishes`
* not caplitalized because it's not a Class: `import sampleFishes from '../sample-fishes';`

## Displaying State with JSX 15/29
* JSX has NO logic built into it (no conditionals, looping, etc)
* any logic done inside JSX uses JavaScript
* map is for an array - can't map ove an object
* but our `fish` are objects 
* go to `App` component, load sample fishes
  * `$r` will bring up `App` component
  * `$r.state` will bring up `App`'s state
  * `$r.state.fishes` will bring up all the fish in `App`'s state
* to loop over `$r.state.fishes` we wrap it in `Object.keys`
  * `Object.keys( $r.state.fishes )` which will give us the keys for each fish: `(9) ["fish1", "fish2", "fish3", "fish4", "fish5", "fish6", "fish7", "fish8", "fish9"]` which will allow us to loop over each fish we have
* `{ Object.keys( this.state.fishes )}`
* each key must be unique for React to be fast by quickly getting to 

















## BLOOM:
state is an object with keys that change
Functional component: do not have state - 
function App() {
  return (); <- must have JSX (react syntax that looks like html) inside the unnamed function
}

{}    means execute this javascript

saysMeow();   < run function
saysMeow   < referencing a function

destructuring pets.map(({name})  < this pulls name out of the object