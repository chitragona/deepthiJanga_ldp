/* Create a function that takes an array as a parameter and compares the values of the array.
Print out the number of matches.
Here is an example:
[1, 1, 2, 3]
1 and 1 are the same.
1 and 2 are different.
Print out would have a count of 1 match.
Write some tests for your function.
Questions for this assignment
Please complete the tasks outlined in the instructions video. Did you have any problems while completing the assignment? */

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
