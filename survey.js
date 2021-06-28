const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let output = ``;

rl.question(`What's your name? `, (answer) => { 
  output += `${answer} loves eating `
  rl.question(`What's your favorite fooed? `, (answer) => { 
    output += `${answer} while coding, blasting `
    rl.question(`What kind of music do you like? `, (answer) => {
      output += `${answer} at the highest volume, prefers `
      rl.question(`What kind of sports do you like? `, (answer) => {
        output += `${answer} over any other sport and is amazing at `
        rl.question(`What's your superpower? `, (answer) => {
          output += `${answer}.`
          console.log(output);
          rl.close();
        });
      });
    });    
  });    
});