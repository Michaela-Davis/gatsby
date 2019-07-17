---
title: Accelebrate React Notes
date: July 15, 2019
---

// HelloWorld is capatilized because it's a React component. All components must be captialized for JSX to understand them
```javascript
const HelloWorld = () => {
  // return React.createElement('h1', null, 'Hello World');
  return <h1>Hello World</h1>; // gets convertered to ^
};
```
if you want your fragment tags to line up, rather than have unaligned fragment tags you can do this:
```javascript
  return (
    <>
      <h1>Hello World</h1>
      <span>test</span>
    </>
  );
```
* you can alias things when you do named imports `import { HelloWorld as Hello WorldB } from '.components/React`
* when hooks became offical, class-based components became no longer necessary
* the argument comes from the parent context, is evaluated, while the parameter is is used in the child
* paramenters are never an expression
* arguments are always an expression
`<ColorTool parameter={ argument }/>`
* https://reactjs.org/docs/typechecking-with-proptypes.html
* NEVER MUTATE PROPS BEING PASSED IN
* look up "Property Descriptors" re `console.log(Object.isFrozen(props));`
  * we can have protection on `props` but not the object itself so that's why things like  `props.colors.push('orange');` work though we shouldn't use them
  * anything we access via props should not be modified
* we're going to use `state hooks` instead of `this.setState`
```
  const [ 
    color, // state data
    setColor // state update function
  ] = useState(''); // intial data only used on first render
```
