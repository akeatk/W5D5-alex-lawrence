const Game = require('./towers.js');
const readline = require('readline');
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


let win = () => {
  console.log('You won');
  reader.question('Play again?', (res) => {
    if (res=='yes') {
      (new Game(win,reader)).run();
    }else {
      reader.close();
    }
  });
};
(new Game(win,reader)).run();