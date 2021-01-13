/*
I am trying to find the perfect gift for my wife. I don't know what to get her so I want you to make up some code that allows me to enter a gift idea and you will respond with 
how well you feel that gift will go. Use a PROMPT to get the input.
Here is the list of gift ideas that you need to include responses for:
- roses
- jewelry
- card
- money
- candy
- electronics
- books
- puppy
I will allow you to use your creativity to choose whatever the response you want for each item. But I want the response to be a CONCATENATION of the gift and some text
Finally, make sure you have a message that appears if the gift doesn't match one of the choices. Once again using CONCATENATION.
Questions for this assignment
Please complete the tasks outlined in the instructions video. Did you have any problems while completing the assignment?
*/

var answer = prompt("What is the perfect gift?")

if (answer == "roses") {

    console.log("Does she like " + answer + " or flowers")

} else if (answer == "jewelry") {

    console.log("Every women loves " + answer + " and bangles")

} else if (answer == "card") {

    console.log("A " + answer + " with a gift, OK!")

} else if (answer == "Money") {

    console.log(answer + " is always a good gift, but not thoughtful.")

} else if (answer == "Candy") {

    console.log(answer + " and roses, OK!")

} else if (answer == "electronics") {

    console.log("Only if the " + answer + " is the latest phone!")

} else if (answer == "books") {

    console.log("Does she love to read" + answer)

} else if (answer == "puppy") {

    console.log("Is she a dog lover? And will she want to raise a " + answer)

} else {

    console.log("A " + answer + " Hey, it's the thought that counts, right?")

}