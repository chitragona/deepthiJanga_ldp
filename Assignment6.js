/*Take the following if statement and turn it into a switch statement. Make sure to test each condition.

var favColor = "red"

if (favColor == "blue") {

    console.log("Violets are blue")

} else if (favColor == "red") {

    console.log("Roses are red")

} else {

    console.log("Sugar is sweet")

}
Questions for this assignment
Please complete the tasks outlined in the instructions video. Did you have any problems while completing the assignment?*/

var favColor = "blue"

switch(favColor){
    case "red":
        console.log("Roses are red");
        break;
    case "blue":
        console.log("Violets are blue");
        break;
    default:
        console.log("Sugar is sweet");
}        

favColor = "red"

switch(favColor){
    case "red":
        console.log("Roses are red");
        break;
    case "blue":
        console.log("Violets are blue");
        break;
    default:
        console.log("Sugar is sweet");
}        

favColor = ""

switch(favColor){
    case "red":
        console.log("Roses are red");
        break;
    case "blue":
        console.log("Violets are blue");
        break;
    default:
        console.log("Sugar is sweet");
}