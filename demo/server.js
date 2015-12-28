var ucode = require('../index.js'),
    
    sandBox = ucode.createSandBox(['console']),
    fn = sandBox.createFunction([], 'console.log(5*5);'),
    
    
    sandBox2 = ucode.createSandBox(),
    fn2 = sandBox.createFunction(['n'], 'return n+1;'),


    sandBox3 = ucode.createSandBox(),
    fn3 = sandBox3.createFunction([], 'console.log(5*5);');

// This one will work since we allowed console in the SandBox
fn();

// This one will work and print 2
console.log(fn2(1));

// This one will fail since we didn't allow console in the SandBox
fn3();