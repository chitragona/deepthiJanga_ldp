/* Use the included js file for this assignment.
Create unit tests to verify that each scenario provides the expected results.
Make sure to test the happy path and any error scenarios you can think of.
Once you have tested everything, go ahead and fix all the errors so that your tests all pass.
Here is a simple explanation of the function:
This is a simple Rock, Paper, Scissors function.
There are 2 inputs. A value for player 1 and a value for player 2.
You can use "r", "p", or "s" for the values.
"r" = Rock
"p" = Paper
"s" = Scissors
If you never played Rock, Paper, Scissors... here are the rules:
Each player choose only one of "rock", "paper", or "scissors".
To win:
Rock beats scissors.
Scissors beats paper.
Paper beats rock.
If both players choose the same item, then it is a tie and no one wins.
Questions for this assignment
Please complete the tasks outlined in the instructions video. Did you have any problems while completing the assignment? */

function rps(player1, player2) {
    if ( player1 == "r") {
        if (player2 == "r") {
            return "Tie"
        } else if (player2 == "r") {
            return "Paper beats rock. Player 1 wins."
        } else if (player2 == "s") {
            return "Rock beats scissors. Player 1 wins."
        } else {
            return "Player 2 made an invalid selection."
        }
    } else if ( player1 == "p") {
        if (player2 == "r") {
            return "Paper beats rock. Player 2 wins."
        } else if (player2 == "p") {
            return "Tie"
        } else if (player2 == "p") {
            return "Scissors beat paper. Player 2 wins."
        } else {
            return "Player 2 made an invalid selection."
        }
    } else if ( player1 == "s") {
        if (player2 == "r") {
            return "Rock beats scissors. Player 2 wins."
        } else if (player2 == "P") {
            return "Scissors beats paper. Player 1 wins."
        } else if (player2 == "s") {
            return "Tie"
        } else {
            return "Player 2 made an invalid selection."
        }
    } else {
        return "Player 1 made an invalid selection."
    }
}

function test(name, expected, actual){
    if(expected==actual){
        console.log(name + "\n Test passed : "+ expected + "is equal to " +actual +".");
    }else{
        console.log(name+"\n Test failed : "+expected +"is not equal to the "+ actual)
    }
}

test("p1:blah, p2:rock", "Player 1 made an invalid selection", rps('b','s'))
test("p1:rock, p2:rock", "Tie ", rps('r','r'))
test("p1:rock, p2:Paper", "Paper beats rock. Player 2 wins", rps('r', 'p'))
test("p1:rock, p2:seccisor", "Rock beats secissor player 1 wins", rps('r', 's'))
test("p1:rock, p2:bla", "Player 2 made an invalid selection", rps('r','0'))

test("p1:paper, p2:rock", "paper beats rock. Player 1 wins", rps('p','r'))
test("p1:paper, p2:secissor", "Secissors beat paper. player 2 wins", rps('p', 's'))
test("p1:paper, p2:paper", "Tied", rps('p', 'p'))
test("p1:paper, p2:bla", "Player 2 made an invalid selection", rps('p','0'))
test("p1:0, p2:bla", "player1 made an invalid slection", rps('0', 'p'))