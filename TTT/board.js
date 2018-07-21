class Board {
  constructor() {
    this.grid = [['.','.','.'],['.','.','.'],['.','.','.']];
  }
  won() {
    for(let i = 0 ; i < 3 ; i++) {
      if (this.grid[i][0]==this.grid[i][1] && this.grid[i][1]==this.grid[i][2] && this.grid[i][2]!=='.') {
        return this.grid[i][0];
      }
    }
    for(let i = 0 ; i < 3 ; i++) {
      if (this.grid[0][i]==this.grid[1][i] && this.grid[1][i]==this.grid[2][i] && this.grid[2][i]!=='.') {
        return this.grid[0][i];
      }
    }
    if (this.grid[0][0] == this.grid[1][1] && this.grid[1][1] == this.grid[2][2] && this.grid[2][2]!=='.') {
      return this.grid[0][0];
    }
    if (this.grid[2][0] == this.grid[1][1] && this.grid[1][1] == this.grid[0][2] && this.grid[0][2]!=='.') {
      return this.grid[2][0];
    }
    return false;
  }
  winner(){
    return this.won();
  }
  empty(pos){
    if(this.grid[pos[0]][pos[1]]=='.') {
      return true;
    }
    return false;
  }
  placeMark(pos, mark){
    console.log(pos);
    console.log(mark);
    if (this.empty(pos)) {
      this.grid[pos[0]][pos[1]] = mark;
      return true;
    }
    return false;
  }
  display() {
    for(let i = 0 ; i < 3; i++) {
      console.log(this.grid[i]);
    }
  }
}

module.exports = Board;