// Here is a bunch of Lorem Ipsum. You will need it. I recomend using word wrap to view this! View > Toggle Word Wrap
const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum lorem vel elit laoreet, vitae maximus ligula consectetur. Etiam magna quam, varius at risus eu, rutrum commodo lacus. Maecenas felis sem, consequat non congue non, vestibulum vitae orci. Etiam laoreet ultricies enim, sit amet gravida massa sodales vel. Vivamus tempus neque sed mi elementum ornare eget non lorem. Donec dapibus ex tortor, ut vehicula metus scelerisque eget. Aenean dictum iaculis nulla, vel dapibus justo dignissim quis. Curabitur vitae efficitur neque. Ut vitae orci semper, efficitur dolor eget, porta dui. Cras eu sapien aliquam mauris facilisis ullamcorper. Nullam facilisis sem diam, quis tempor felis interdum ut. Praesent eu nibh arcu. Proin a quam augue. Integer malesuada finibus sem eget consectetur. Aenean non hendrerit purus, quis auctor elit. Duis ullamcorper, ex vitae rutrum ullamcorper, diam justo maximus quam, eget pellentesque metus nunc sit amet arcu. Nunc id eros leo. Praesent ultricies, nunc sit amet finibus posuere, quam magna viverra lectus, non tincidunt tellus mauris sit amet turpis. Nam eleifend quam vel justo pulvinar euismod. Duis ac elit id risus ultricies sollicitudin vitae ac quam. Donec et cursus leo, non dignissim enim. Vestibulum in felis imperdiet, venenatis tortor iaculis, congue augue. Nullam egestas dui nec quam sagittis sollicitudin ac blandit turpis. Nunc in fermentum odio. Morbi sodales mi nibh, ac cursus felis ultricies sed. Quisque at porttitor risus. Aenean a massa in libero venenatis tempus sed in mi. Nullam luctus sapien eget sagittis egestas. Pellentesque eros sem, semper eu molestie in, commodo a lacus. Phasellus pellentesque erat magna, eu facilisis nibh porttitor eget. Ut id mi lobortis, consequat orci ac, vulputate metus. Sed vulputate turpis nec lectus malesuada lacinia. Quisque non mattis eros. Aliquam pellentesque urna vulputate, auctor nibh in, fermentum odio. Suspendisse aliquam neque et aliquam facilisis. Donec sapien felis, molestie vel vestibulum non, sagittis sed felis. Aenean sodales iaculis dolor eget malesuada. Fusce ac libero hendrerit, viverra nunc iaculis, maximus nisi. Nulla volutpat nisi purus, non interdum erat hendrerit vitae. Integer viverra dignissim cursus. Phasellus eu libero sed ex faucibus convallis. In et egestas ipsum. Cras a metus mollis, laoreet risus eget, ultrices purus. Duis at ligula venenatis, imperdiet nulla et, bibendum augue. Pellentesque eleifend libero maximus, pretium lectus et, condimentum metus. Nulla vel est diam. In fermentum ut nulla eget finibus. Aliquam at turpis sagittis, feugiat diam ac, pulvinar quam. Phasellus pretium porta aliquet. Nunc sit amet nisl viverra justo porttitor egestas vel vitae eros. Fusce sit amet fringilla sapien. Nunc placerat, est sit amet laoreet pretium, augue turpis lacinia ipsum, non luctus magna ipsum vel sapien. Fusce luctus odio eget nunc rutrum ullamcorper. Integer vel ligula id elit viverra aliquam. Praesent id ultricies neque. Quisque molestie tellus ac ex vulputate rhoncus. Donec nec massa eget augue tincidunt ultrices vitae at diam. Ut risus purus, egestas eu eros sed, egestas auctor erat. Integer vulputate erat nisi, in aliquet turpis faucibus vel. Praesent neque augue, congue at nunc ut, congue ultricies erat. Ut sed erat in dui ornare malesuada. Nam id elementum ex. Vestibulum condimentum erat quis erat molestie hendrerit. Etiam laoreet volutpat quam, eget ornare ex molestie mollis. Phasellus eros mi, ultrices vel dui ac, facilisis consectetur nunc. Aliquam erat volutpat. Donec rutrum laoreet iaculis."

// Add a list of colors to this array
const colors = ["red","yellow","blue","green","orange","brown","purple","black","white","grey","cyan","magenta","pink"]


// Use this object for your random name generator. Enter in a bunch of objects with first and last names. When generating a new random name, try to grab a random first or last name from any object. Don't just take object as a whole.
const names =
[
    {
        firstName: "Rose",
        lastName: "Smith",
      },
      {
        firstName: "Joe",
        lastName: "Jones",
      },
      {
        firstName: "Sam",
        lastName: "Adams",
      },
      {
        firstName: "Peter",
        lastName: "Wilson",
      },
      {
        firstName: "Anna",
        lastName: "Foster",
      },
      {
        firstName: "Emily",
        lastName: "Brown",
      }
]

// for random 0 - 100
function btnRandom100Pressed() {
  document.getElementById("p1").innerHTML = Math.floor((101*Math.random()))
}
document.getElementById("btnRnd0100").addEventListener("click", btnRandom100Pressed)

// check if the string contains numbers or letters
function checkString(val) {
  let arr = val.split("")
  let hasLetters = false
  let hasNumbers = false
  var result
  for (let i = 0; i < arr.length; i++) {
      if (Number(arr[i]) != Number(arr[i])) {
          hasLetters = true
      } else if (Number(arr[i]) == Number(arr[i])) {
          hasNumbers = true
      }
  }
  if (hasLetters == true && hasNumbers == false) {
      result = "onlyLetters" //also if contains special characters
  } else if (hasLetters == false && hasNumbers == true) {
      result = "onlyNumbers" //also if contains spaces
  } else if (hasLetters == true && hasNumbers == true) {
      result = "bothNumbersAndLetters"
  } else {
      console.log("Error in checkString()")
  }
  return result
} 


// for random between
function btnRndBetweenPressed() {
  start = Number(document.getElementById("rndBetweenStart").value);
  end = Number(document.getElementById("rndBetweenEnd").value);
  if (start < end) { // check in case user types min>max or string
      let variants = [start]
      for (let i = start; i < end; i++) {
          variants.push(i+1)
          let index = (Math.floor((variants.length*Math.random())))
          document.getElementById("p2").innerHTML = variants[index]
      }
  } else {
      document.getElementById("p2").innerHTML = "Values are invalid!"
  }
}
document.getElementById("btnRndBetween").addEventListener("click", btnRndBetweenPressed)

// to return long Lorem ipsum
function longLoremIpsumBtnPressed() {
  document.getElementById("longLoremIpsumField").innerHTML = lorem
}
document.getElementById("longLoremIpsumBtn").addEventListener("click", longLoremIpsumBtnPressed)

// to return specified number of Lorem ipsum sentences
function specLoremIpsumBtnPressed() {
  if (isNaN(Number(document.getElementById("specLoremIpsumInput").value))) { // to check if user has not entered some string (NaN)
      document.getElementById("specLoremIpsumField").innerHTML = "Invalid values are entered!"
  } else if (Number(document.getElementById("specLoremIpsumInput").value == 0)) {
      document.getElementById("specLoremIpsumField").innerHTML = "No sentences shown."
  } else {
      let loremArray = lorem.split(". ");
      for (let i = loremArray.length; i>(Number(document.getElementById("specLoremIpsumInput").value)); i--) {
          loremArray.pop()
      }
      document.getElementById("specLoremIpsumField").innerHTML = loremArray.join(". ")+"."
  }
}
document.getElementById("specLoremIpsumBtn").addEventListener("click", specLoremIpsumBtnPressed)

// to return specified number of Lorem ipsum characters
function specLoremIpsumCharsBtnPressed() {
  if (isNaN(Number(document.getElementById("specLoremIpsumCharsInput").value))) { // to check if user has not entered some string (NaN)
      alert("invalid values are entered!")
  } else {
      let loremArray = lorem.split("");
      for (let i = loremArray.length; i>(Number(document.getElementById("specLoremIpsumCharsInput").value)); i--) {
          loremArray.pop()
      }
      document.getElementById("specLoremIpsumCharsField").innerHTML = loremArray.join("")
  }
}
document.getElementById("specLoremIpsumCharsBtn").addEventListener("click", specLoremIpsumCharsBtnPressed)

// to return current date formated
function dateBtnPressed() {
  let newDate = new Date()
  document.getElementById("dateField").innerHTML = newDate.getDate() + "-" + (newDate.getMonth()+1) + "-" + newDate.getFullYear()
}
document.getElementById("dateBtn").addEventListener("click", dateBtnPressed)

// to return current time formated
function timeBtnPressed() {
  let newDate = new Date()
  document.getElementById("timeField").innerHTML = newDate.getHours() + ":" + newDate.getMinutes() + ":" + newDate.getSeconds()
}
document.getElementById("timeBtn").addEventListener("click", timeBtnPressed)

// inches to feet converter
function inchesToFeet() {
  document.getElementById("inch2feetField").innerHTML = document.getElementById("inch2feetInput").value/12 
}
document.getElementById("inch2feetBtn").addEventListener("click", inchesToFeet)

// feet to inches converter
function feetToInches() {
  document.getElementById("feet2inchField").innerHTML = document.getElementById("feet2inchInput").value*12 
}
document.getElementById("feet2inchBtn").addEventListener("click", feetToInches)

// to compare two words length
function twoWordsBtnPressed() {
  if (checkString(document.getElementById("word1Input").value) != "onlyLetters" || checkString(document.getElementById("word2Input").value) != "onlyLetters") {
      document.getElementById("twoWordsField").innerHTML = "Incorrect input"   
  } else if (document.getElementById("word1Input").value.length == document.getElementById("word2Input").value.length) {
      document.getElementById("twoWordsField").innerHTML = "Words are equal"
  } else {
      document.getElementById("twoWordsField").innerHTML = "Words are not equal"
  }
}
document.getElementById("twoWordsBtn").addEventListener("click", twoWordsBtnPressed)

// to return a random password
function rndPassBtnPressed() {
  let lettersArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "v", "u", "w", "x", "y", "z" ]
  let numbersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
  let charsArr = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", "="]
  let passArr = []
  for (let i = 0; i < 8; i++) {
      passArr.push(lettersArr[(Math.floor(((lettersArr.length*Math.random()))))])
      passArr.push(numbersArr[(Math.floor(((numbersArr.length*Math.random()))))])
      passArr.push(charsArr[(Math.floor(((charsArr.length*Math.random()))))])
  }
  document.getElementById("rndPassField").innerHTML = passArr.join("")
}
document.getElementById("rndPassBtn").addEventListener("click", rndPassBtnPressed)

// to tell if number is even or not
function evenOddNumberBtnPressed() {
  if (document.getElementById("evenOddNumberInput").value == 0) {
      document.getElementById("evenOddNumberField").innerHTML = "0 is an incorrect input"
  } else if (document.getElementById("evenOddNumberInput").value % 2 == 0) {
      document.getElementById("evenOddNumberField").innerHTML = "Number is even"
  } else if (document.getElementById("evenOddNumberInput").value % 2 > 0 || document.getElementById("evenOddNumberInput").value % 2 < 0) {
      document.getElementById("evenOddNumberField").innerHTML = "Number is odd"
  } else document.getElementById("evenOddNumberField").innerHTML = "Incorrect input"
}
document.getElementById("evenOddNumberBtn").addEventListener("click", evenOddNumberBtnPressed)

// to return random color
function rndColorBtnPressed() {
  document.getElementById("rndColorField").innerHTML = colors[(Math.floor(((colors.length*Math.random()))))]
}
document.getElementById("rndColorBtn").addEventListener("click", rndColorBtnPressed)

// to return randon first and last name
function rndNamesBtnPressed() {
  document.getElementById("rndNamesField").innerHTML = (names[(Math.floor(((names.length*Math.random()))))].firstName) + " " + (names[(Math.floor(((names.length*Math.random()))))].lastName) //kinda long, but hey, it's a single line
}
document.getElementById("rndNamesBtn").addEventListener("click", rndNamesBtnPressed)