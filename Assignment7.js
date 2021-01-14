/* Using what you have learned from the Functions section, I want you to do the following.
Your assignment is to build a simple app that calculates the amount of change or money back due to the user after purchasing an item.

Here are the things that should be included:

Prompt asking for the amount the user is paying.  Also tell the user how much they owe.

A function that takes the amount the user paying

The function should subtract the amount payed from the original cost

The function should return the difference from the calculation

You then need a statement that will give 1 of 3 different responses. You can just use the console.log() statement.

You gave the exact amount.

You gave too much. Your change due is $x.xx.

You gave too little. You still owe $x.xx.

Questions for this assignment
Please complete the tasks outlined in the instructions video. Did you have any problems while completing the assignment? */


let sum = prompt("What amount do you pay?")
let cost = prompt("How much does it cost?")
function calculation() {
    return sum-cost 
}
let change = calculation()
if (change==0) {
    console.log("You gave the exact amount.")
} else if (change>0) {
    console.log("You gave too much. Your change due is $"+change)
} else if (change<0) {
    console.log("You gave too little. You still owe $"+(change)*(-1))
} else {
    console.log("Something went really wrong")
}

