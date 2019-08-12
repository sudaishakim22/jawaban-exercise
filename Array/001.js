// 1. WordToArrayReverse

function wordToArrayReverse(str) {
    // your code here 
    var x = str.split(' ');
    var reverse = [];
    var y = x.length;
    for(var i = 1; i <= y; i++){
        reverse.push(x[y-i]);
      
    }
      
  console.log(reverse);
}

wordToArrayReverse("Hello my name is Dimas")
//["Dimas","is","name","my","Hello"]

// wordToArrayReverse("Lorem ipsum sit dolor amet")
// //["amet","dolor","sit","ipsum","Lorem"]