//const greet = require('./greet');

//console.log(greet('Xola'))

const chalk = require('chalk');
//import the greet module that is in the current folder
const greet = require('./greet');


const message = greet('Xola')
var figlet = require('figlet');
 
figlet(message, function(err, data) {
   if (err) {S
       console.log('Something went wrong...');
        console.dir(err);
        return;
   }
   const styledMessage = chalk.bgGreen.black(data);
   console.log(styledMessage)
});
