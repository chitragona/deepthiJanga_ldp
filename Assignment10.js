/* I have provided you with a .js file with a story in it.
I want you to do the following to the story.
Find all instances of the word "cheeseburgers", and replace it with the word "hamburgers". Be sure to note the casing of the word.
Find all instances of the word "bun", and capitalize all the letters.
Then I want you to provide the following information using string methods.
How many characters are in the story?
How many words are in the story?
If you are curious where the story came from, check our http://cheeseburgeripsum.com.
Questions for this assignment
Please complete the tasks outlined in the instructions video. Did you have any problems while completing the assignment?  */

var story = "Cheeseburgers come in all kinds of manifestations, but we want them in and around our mouth no matter what. Slide those smashed patties with the gently caramelized meat fat between a toasted brioche bun and pass it over. You fall in love with the cheeseburger itself but the journey ain’t half bad either. They’re the childhood friend that knows your highest highs and lowest lows. They’ve been with you through thick and thin and they’re the best at keeping secrets. Whether it’s dressed up or informal, cheeseburgers have your back. Sometimes we lose sight of what really matters in life. There’s something to be said for a gourmet brie and truffle burger paired with parmesan frites, but don’t let that make you forget about the ol’ faithful with American cheddar and a squishy bun. Lettuce remind you that cheeseburgers come in all forms - bun intended. Pop quiz: what’s the greatest thing to happen to your mind, body, and soul in recent history? A cheeseburger, obviously. Cheeseburgers know that what you want can also be what you need."

var replaceCheeseburgers = story.replace(/cheeseburgers/g, "hamburgers")

var replacecheeseburgers = story.replace(/Cheeseburgers/g,"Hamburgers")

var replaceBun = story.replace(/bun/g,"BUN")

var storyLenght =   story.length 

var wordLength = story.split(" ").length

console.log(replaceCheeseburgers)

console.log(replacecheeseburgers)

console.log(replaceBun)

console.log(storyLenght)

console.log(wordLength)