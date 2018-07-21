class Game {
  constructor(cb,reader) {
    this.cb=cb;
    this.reader=reader;
    this.t = [[1,2,3],[],[]];
  }
  
  promptMove(cb) {
    this.print();
    this.reader.question('Select a tower (0,1,2): ', (res1) => {
      let take = parseInt(res1);
      this.reader.question('Select a tower to drop: ', (res2) => {
        let place = parseInt(res2);
        cb(take, place);
      });
    });
  }
  
  isValidMove(start, end){
    if(this.t[start].length < 1) {
      return false;
    }else if (this.t[end][0] < this.t[start][0]) {
      return false;
    }
    return true;
  }
  
  move(start, end){
    if(this.isValidMove(start, end)){
      this.t[end].unshift(this.t[start].shift());
      return true;
    }
    return false;
  }
  
  print(){
    console.log(JSON.stringify(this.t));
  }
  
  isWon(){
    if(this.t[1].length === 3 || this.t[2].length === 3){
      return true;
    }
    return false;
  }
  
  run(){
    this.promptMove((start, end)=>{
      if (!this.move(start, end)) {
        console.log('invalid move');
      }
      if (!this.isWon()) {
        this.run();
      }else {
        this.cb();
      }
    });
    
  }
}
module.exports = Game;
