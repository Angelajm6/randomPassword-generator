var characterLenght=8;
var choiceArr =[];
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  console.log("You clicked the button!");

var specialCharArr =["!","?","ª","@", "#","$","%","/","^", "&", "*", "+","-","(", ")",",","<",">"];
// Prompt the user for the password criteria
//  1. Password lenght <128
//  2. lowercase, uppercase, numbers, special characters
// Validate the input
// Generate password based on the criteria



return "Your password will go here!";
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);