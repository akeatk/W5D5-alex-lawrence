const Board = require('./board.js');
const readline = require('readline');

class Game {
  constructor(cb,reader) {
    this.players = ['X', 'O'];
    this.current_player = 0;
    this.board = new Board();
    this.reader = reader;
    this.cb=cb;
  }
  

  
  run() {
    this.takeTurn();
  }
  
  takeTurn(){
    this.board.display();
    this.reader.question(`Player ${this.current_player+1} Enter a position`,(res)=>{
      let x = parseInt(res.slice(0,res.indexOf(',')));
      let y = parseInt(res.slice(res.indexOf(',')+1));
      
      if(!this.board.placeMark([x,y], this.players[this.current_player]))  {
        console.log('invalid move');
        this.takeTurn();
        
      }
      if(this.board.won()) {
        this.cb();
        return this.current_player;
      }else {
        if(this.current_player == 1) {
          this.current_player = 0;
        } else {
          this.current_player = 1;
        }
        this.takeTurn();
      }
    });
  
  }
}

module.exports = Game;