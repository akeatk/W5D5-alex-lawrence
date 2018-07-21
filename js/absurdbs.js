const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function absurdBubbleSort(arr, sortCompletionCallback) {
  const outerBubbleSortLoop = function (a) {
    if (a) { 
      innerBubbleSortLoop(arr,0,false,outerBubbleSortLoop);
    }else {
      sortCompletionCallback(arr);
    }
  };
  innerBubbleSortLoop(arr,0,false, outerBubbleSortLoop);
}

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  if (i < arr.length-1) {
    askIfGreaterThan(arr[i],arr[i+1],(bool) => {
      if (bool) {
        arr[i] = arr[i]^arr[i+1];
        arr[i+1] = arr[i]^arr[i+1];
        arr[i] = arr[i]^arr[i+1];
        madeAnySwaps = true;
      }
      innerBubbleSortLoop(arr, ++i, madeAnySwaps,outerBubbleSortLoop);
    });
    
  }
  else if (i===(arr.length-1)) {
    outerBubbleSortLoop(madeAnySwaps);
  }
}

function askIfGreaterThan(el1, el2, callback) {
  reader.question(`is ${el1} > ${el2}?: `, (res) => {
    if(res === 'yes')
      callback(true);
    else
      callback(false);
  });
}

absurdBubbleSort([3, 2, 1], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});



// askIfGreaterThan(1,2,(a)=>{console.log(a)});