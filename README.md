# ucode

A simple way to sandbox user written code.

## Usage

```
// Include ucode
var ucode = require('ucode');

// Create a custom SandBox
var sandBox = ucode.createSandBox();

// Create the function with the parameters and user code
var fn = sandBox.createFunction([], 'console.log(5*5);');

// Since the sandBox returns the function you can just call it.
fn();
```

## Installation

```
npm install ucode
```
Remember adding ```--save``` or ```--save-dev``` if you need it.

## API Documentation

####ucode.createSandBox([allowedNames])
*@param allowedNames:* [Optional] allowed names array, such us ```['require', 'process', 'console']```

*@returns:* a SandBox object.

By default, ucode bans all the global objects, functions and variables. If you want to allow the users to use some of them you can provide them as an array.

Example:

```
// Allow the user to use 'require'
ucode.createSandBox(['require'])
```

#### SandBox.createFunction(parametersArray, userCode)

*@param parametersArray:* In case you need to call the generated function with parameters, you can especify the parameter names as an array.

*@param userCode:* The user written code in string format. Notice this will be the returned function body.

Example:

```
var userCode = 'return number + 1;';
var fn = sandBox.createFunction(['number'], userCode);
console.log(fn(1)); // Prints 2
```