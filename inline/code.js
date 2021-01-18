/* Using the included .html and .js files, do the following:
1. Change the text of "Heading 1" to "Welcome to my site!".
2. Change the text of "Paragraph 1" to "My name is " and add your name.
3. Remove the second H1 element
4. Change the font color of "Paragraph 2" to blue
5. Change the text of "Paragraph 2" to "I love JavaScript"
Questions for this assignment
Please complete the tasks outlined in the instructions video. Did you have any problems while completing the assignment? */

//changing the text of heading 1
document.getElementById("h1").innerHTML="Welcome to my site!"

//changing the text of paragraph
document.getElementById("p1").innerHTML="My name is Deepthi"

//remove the second h1 element
var heading2=document.getElementById("h2")
document.getElementById("main").removeChild(heading2);

//change font color of p2
document.getElementById("p2").style.color="blue"

//change the text of p2
document.getElementById("p2").innerHTML="I love java script"