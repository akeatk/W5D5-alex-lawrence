const readline = require('readline');

function addNumbers(sum, numsLeft, completionCallback) {
  if(numsLeft > 0){
    const reader = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    reader.question('Enter a number: ', (res) => {
      sum += parseInt(res);
      console.log(sum);
      reader.close();
      addNumbers(sum, --numsLeft, completionCallback);
    });
    
  } else {
    return completionCallback(sum);
  }
}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));