const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
                 "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z§",]
const numbers =  ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",]
const symbols =  ["~","`","!","@","#","$","%","^","&","*","(",")","_§","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]

let characters = [];
  
/*
letras - Lower Case / Upper caser
number - 0-9
simbolos
*/


// input - ouput
let outputOneEL = document.querySelector("#output-one-el")
let outputTwoEL = document.querySelector("#output-two-el")
// Button
let generateBtn = document.querySelector("#generate-btn")
// pass Length
let setLengthEl = document.querySelector("#set-length-el")
let lengthValue = document.querySelector("#length-value")
lengthValue.innerHTML = `<p id="length-value" >Length: <span ">${setLengthEl.value}</span> characters</p>`

// checkbox
let letterCheck = document.querySelector("#letter-char")
let numberCheck = document.querySelector("#number-char")
let symbolsCheck = document.querySelector("#symbols-char")

let notchecked = document.querySelector("ul")


// Pass generator function on click
generateBtn.addEventListener("click", function() {
  let passOne = generatePass()
  let passTwo = generatePass()
  outputOneEL.value = passOne
  outputTwoEL.value = passTwo
})
// Pass generator function
function generatePass() {
  isChecked()
  console.log(characters)
  let newPass = ""
  console.log(newPass)

  for (let i = 0; i < setLengthEl.value; i++) {
    let randomNumberForType = Math.floor(Math.random() * characters.length)
    let randomNumberForChar = Math.floor(Math.random() * characters[randomNumberForType].length)
    newPass += characters[randomNumberForType][randomNumberForChar]
  }
    return newPass
}


// Copy on click clipbard F
function copyOnClick(copyText) {
  copyText.select()
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
}

outputOneEL.addEventListener("click", function(){ copyOnClick(outputOneEL)})
outputTwoEL.addEventListener("click", function(){ copyOnClick(outputTwoEL)})



// See the length of the pass
setLengthEl.addEventListener("mouseup", function() {
  lengthValue.innerHTML = `<p id="length-value" >Length: <span ">${setLengthEl.value}</span> characters</p>`
})



// Chech the checkbox
function isChecked(){
  notchecked.classList.remove("please-check")
  characters = []
  if(letterCheck.checked && numberCheck.checked && symbolsCheck.checked) {
    characters = [letters, numbers, symbols]
  }
  else if (letterCheck.checked && numberCheck.checked && !symbolsCheck.checked){
    characters = [letters, numbers]
  }
  else if (letterCheck.checked && !numberCheck.checked && symbolsCheck.checked){
    characters = [letters, symbols]
  } 
  else if (letterCheck.checked && !numberCheck.checked && !symbolsCheck.checked){
    characters = [letters]
  }
  else if (!letterCheck.checked && numberCheck.checked && symbolsCheck.checked){
    characters = [numbers, symbols]
  }
  else if (!letterCheck.checked && numberCheck.checked && !symbolsCheck.checked){
    characters = [numbers]
  }
  else if (!letterCheck.checked && !numberCheck.checked && symbolsCheck.checked){
    characters = [symbols]
  }
  else{
    notchecked.classList.add("please-check")
    alert("Check at least 1 of the 3 options")
  }
}