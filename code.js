function compare(myArr) {
    for (var i = 0; i < myArr.length; i++) {
      for (var j = i + 1; j < myArr.length; j++) {
        if (myArr[i] === myArr[j]) {
          console.log("Same");
        } else {
          console.log("Different");
        }
        console.log("value 1 = " + myArr[i] + " : value 2 = " + myArr[j]);
      }
    }
  }
   
const arr = [1, 2, 3, 5, 8];
compare(arr);