/* Using the included .html and .js files, do the following:
For 1 & 2, use the correct JavaScript Event.
HINT: Since we haven't learned much about CSS in this course you will need to know a few things.
1. The style attribute you want to use is "fontSize"
2. The font size can be set in different ways, but for this exercise just append "em" to your value. Example: 1em
Questions for this assignment
Please complete the tasks outlined in the instructions video. Did you have any problems while completing the assignment? */

/*1. When Button 1 is clicked:
    a. Paragraph 1 should be replaced with "Button 1 was clicked"
    b. An alert should appear with text "Button 1 was clicked"*/

    function btn1Clicked(){
        document.getElementById("p1").innerHTML = "Button 1 was clicked"
        alert("Button 1 was clicked")
    }
  /*2. When Text is typed into the first text field (and the cursor moved away):
      a. Paragraph 2 should display "Characters typed" + the number of characters.
      For 3 & 4, use Event Listeners.*/
    
    function txtTyped() {
      document.getElementById("p2").innerHTML =
        "Characters typed " + document.getElementById("i1").value.length;
    }
    
  /*3. When Button 2 is clicked:
      a. Paragraph 3 should be removed*/
    
    document.getElementById("b2").addEventListener("click", btn2Pressed);
    
    function btn2Pressed() {
      var paragraph = document.getElementById("p3");
      document.getElementById("main").removeChild(paragraph);
    }
    
  /*4. When Text is typed into the second text field:
      a. Paragraph 4 should change font size for each character entered*/
    
    document.getElementById("i2").addEventListener("change", valueEntered);
    
    function valueEntered() {
      var size = document.getElementById("i2").value.length
      document.getElementById("p4").style.fontSize = size + "em"
    }