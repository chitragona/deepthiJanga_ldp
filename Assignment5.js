/* For this project I want you to create a Triangle using the * symbol. This is going to be very similar to the square activity that we did.
*
**
***
****
*****

If you get stuck or confused, go back to the square activity for reference.

Questions for this assignment
Please complete the tasks outlined in the instructions video. Did you have any problems while completing the assignment? */

var triangle=""
for(var i=0; i<5; i++){
    for(var j=0; j<=i; j++){
        triangle=triangle+"*"
    }
    triangle=triangle+"\n"
}
console.log(triangle)