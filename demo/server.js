var ucode = require('../index.js'),
    
    sandBox = ucode.createSandBox(['console']),
    fn = sandBox.createFunction([], 'console.log(5*5);'),
    
    sandBox2 = ucode.createSandBox([]),
    fn2 = sandBox2.createFunction([], 'console.log(5*5);');

// This one will work since we allowed console in the SandBox
fn.call();

// This one will fail since we didn't allow console in the SandBox
fn2.call();