/*I want you to create a series of prompts just like we did in the Activity "All the things".

I want you to store the value of each answer into the array for six questions. The questions should ask about favorite books. You may use the book list we created before if you can't think of anything.

Answers 1 - 5 will need to go into the end of the array.

Answer 6 will need to go into the beginning of the array.

Then I want you to remove the last item in the array.

Finally "console.log" your array.

Questions for this assignment
Please complete the tasks outlined in the instructions video. Did you have any problems while completing the assignment? */

var answer

var books = []

answer = prompt("What is your favorite adventure book?")

books.push(answer)

answer = prompt("What is your favorite photography book?")

books.push(answer)

answer = prompt("What is your favorite drama book?")

books.push(answer)

answer = prompt("What is your favorite comic book?")

books.push(answer)

answer = prompt("What is your favorite zoology book?")

books.push(answer)

answer = prompt("What is your favorite philosophy book?")

books.unshift(answer)

books.pop()

console.log("My favorites book list is " +books)