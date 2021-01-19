/* Create a function that does the following:
- The function must take 2 numbers. A start and an end.
- The function should check each number in the range given to see if it meets one of these criteria:
    - If the number is divisible by 3 print out "Fizz"
    - If the number is divisible by 5 print out "Buzz"
    - If the number is divisible by both 3 and 5, print out "FizzBuzz"
    - If none of the above is true then just print the number
Write some tests for your function.
Questions for this assignment
Please complete the tasks outlined in the instructions video. Did you have any problems while completing the assignment?*/function fizzBuzz(start,end) {

    if (end>start){
     
     for (var i=start; i <= end; i++) {
         if (i % 3 === 0 && i % 5 === 0) {
         console.log("FizzBuzz")
     } else if (i % 3 === 0 & i % 5 > 0) {
         console.log("Fizz")
     } else if (i % 5 === 0) {
         console.log("Buzz")
     } else {
         console.log(i)
     }
         
     }
 }
 else{
     console.log("Start value "+start+" is greater than End value "+end)
 }
 
 }
 
