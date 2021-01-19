/* A Palindrome is a word or phrase that is the same forwards of backwards.
Example: "Anna" backwards is "Anna"
Write a function that checks if a word or phrase is a palindrome.
Write some tests for your function.
Questions for this assignment
Please complete the tasks outlined in the instructions video. Did you have any problems while completing the assignment?*/

function Pal(word){

    let splitword = word.split("")

    splitword = splitword.reverse()

    splitword = splitword.join("")

    if(word.toLowerCase().replace(/\s/g, "") === splitword.toLowerCase().replace(/\s/g, "")){
        return word+" is Palindrome"
    }
    else{
        return word+" is not Palindrome"
    }

}

Pal("amma")
