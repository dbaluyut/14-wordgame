import { commonWords } from "./constants.js"

let lives = 8

console.dir(commonWords)

const filtered = commonWords.filter((word) => word.length > 2)
console.dir(filtered)

//RANDOM INDEX FUNCTION
let randomIndex = Math.floor(Math.random() * 77) + 1 - 1

// randomWord IS AN ARRAY
let randomWord = filtered[randomIndex]

//REPLACE randomWord WITH '_'
let hiddenWord = ""

// for (let i = 0; i < randomWord.length; i++) {
//   hiddenWord += `<div class="guessBox"></div> `
// }

for (let i = 0; i < randomWord.length; i++) {
  // hiddenWord += `<div class="guessBox" id="letter${[i]}"></div>`
  hiddenWord += `-`
}

// let hiddenWord = randomWord.map(function () {
//   newArr += "_ "
// })

console.dir(hiddenWord)

//PLAYER TO GUESS 'randomWord'
document.getElementById("display").innerHTML = hiddenWord

console.log(randomWord)

//ADDEVENT LISTENER KEYPRESS TEST

let pressedKey = ""

document.addEventListener("keypress", function (e) {
  // console.log(e.key)
  // pressedKey = e.key
  // console.log(randomWord.includes(e.key))
  if (randomWord.includes(e.key)) {
    document.getElementById("display").innerHTML = "newword"
  } else {
    lives = lives - 1
  }
  console.log(lives)
})

let newWord = ""

console.log(pressedKey)

// console.log(hiddenWord.includes(e.key))

console.log(document.getElementById("display").innerText)

// if (lives == 0) {
//   alert("you ded")
// }
