import { commonWords } from "./constants.js"
let lives2 = 8

let lives = ""
// document.getElementById("health").innerHTML = lives

console.dir(commonWords)

const filtered = commonWords.filter((word) => word.length > 2)
console.dir(filtered)

//RANDOM INDEX FUNCTION
let randomIndex = Math.floor(Math.random() * 77) + 1 - 1

// randomWord IS AN ARRAY
let randomWord = filtered[randomIndex]

//REPLACE randomWord WITH '-'
let hiddenWord = []
for (let i = 0; i < randomWord.length; i++) {
  hiddenWord.push(`<div class="guessBox"></div>`)
  // hiddenWord += `<div class="guessBox"></div>`

  console.log(hiddenWord)
}

// let hiddenWord = randomWord.map(function () {
//   newArr += "_ "
// })

console.dir(hiddenWord)

//PLAYER TO GUESS 'randomWord'
document.getElementById("display").innerHTML = hiddenWord.join("")

console.log(randomWord)
let pressedKey = ""
//ADDEVENT LISTENER KEYPRESS TEST

document.addEventListener("keypress", function (e) {
  // console.log(e.key)

  // console.log(randomWord.includes(e.key))
  if (randomWord.includes(e.key)) {
    for (let i = 0; i < randomWord.length; i++) {
      if (randomWord[i] === e.key) {
        // newWord += randomWord[i]
        hiddenWord.splice(i, 1, `<div class="guessBox">${randomWord[i]}</div>`)
      }
      document.getElementById("display").innerHTML = hiddenWord.join("")
    }
  } else {
    pressedKey += e.key
    lives2 = lives2 - 1
    document.getElementById("health").innerHTML = lives

    //REMOVE HEART FROM HTML
    document.querySelector(".heart").remove()

    document.getElementById("key-hist").innerHTML = pressedKey
    if (lives2 === 0) {
      if (alert("you dieded, try agen")) {
      } else window.location.reload()
    }
  }

  if (!hiddenWord.includes(`<div class="guessBox"></div>`)) {
    alert("you wonded")
  }
})
// document.querySelector(".heart").remove()
