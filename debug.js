/* Use the included .js and .html files and try to figure out why they don't work correctly.

The web page is just an altered version of our previous assignment.



With the help of the debugger, I want you to run through the features of the page and fix any errors.





Here is a recap of how the web page should work...



Using the included .html and .js files, do the following:



For 1 & 2, use the correct JavaScript Event.

1. When Button 1 is clicked:
    a. Paragraph 1 should be replaced with "Button 1 was clicked"
    b. An alert should appear with text "Button 1 was clicked"
2. When Text is typed into the first text field (and the cursor moved away):
    a. Paragraph 2 should display "Characters typed" + the number of characters.
For 3 & 4, use Event Listeners.
3. When Button 2 is clicked:
    a. Paragraph 3 should be removed
4. When Text is typed into the second text field:
    a. Paragraph 4 should change font size for each character entered
HINT: Since we haven't learned much about CSS in this course you will need to know a few things.
1. The style attribute you want to use is "fontSize"
2. The font size can be set in different ways, but for this exercise just append "em" to your value. Example: 1em
Questions for this assignment
Please complete the tasks outlined in the instructions video. Did you have any problems while completing the assignment? */

function btn1Clicked() {
    document.getElementById("p1").innerHTML = "Button 1 was clicked"
    alert("Button 1 was clicked")
}

function charsTyped() {
    var chars = document.getElementById("i1").value

    createString(chars)
}

function createString(someString) {
    document.getElementById("p2").innerText = "Characters typed: " + someString.length
}

document.getElementById("b2").addEventListener("click", btn2Clicked)

function btn2Clicked() {
    var main = document.getElementById("main")
    var child = document.getElementById("p3")

    main.removeChild(child)
}

document.getElementById("i2").addEventListener("change", valueEntered)

function valueEntered() {
    var size = document.getElementById("i2").value.length

    document.getElementById("p4").style.fontSize = (size*2) + "em"
}