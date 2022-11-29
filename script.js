var characterLenght=8; // lenght of 8 characters by default
var choiceArr = [];
var generateBtn = document.querySelector("#generate");

//Generate password based on these criteria
var lowerCaseArr =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCaseArr =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numberArr =["0","1","2","3","4","5","6","7","8","9"]; 
var specialCharArr =["!","?","ª","@", "#","$","%","/","^", "&", "*", "+","-","(", ")",",","<",">",];


function generatePassword(){
  console.log("You clicked the button!");
return "Your password will go here!"; //Validate input
}

//Event listener to create button
generateBtn.addEventListener("click",writePassword);


function writePassword() {
  var correctPrompts = getPrompts(); //This returns true or false
  var passwordText = document.querySelector("#password");

  if (correctPrompts){
    var newPassword = generatePassword();
    passwordText.value = newPassword;

  }else{
    passwordText.value = "";
  }
}

//generatePassword considering prompts
function generatePassword(){
var password = "";
for (var i=0; i<characterLenght; i++){
    var randomIndex = Math.floor(Math.random() * choiceArr.length);
    password = password + choiceArr[randomIndex];
}
return password;
}


function getPrompts(){
  choiceArr= [];

  characterLenght=parseInt(prompt("How many characters do you want your password to have? (8-128 characters")); //NaN
   
    if (isNaN(characterLenght) || characterLenght < 8 || characterLenght > 128){ //Hopefully this will all be false
    alert("You can only choose between 8-128 digits");
    return false;
   }

   if (confirm("Do you want lowercase letters in your password?")) {
    choiceArr = choiceArr.concat(lowerCaseArr);
   }

   if (confirm("Do you want uppercase letters in your password?")) {
    choiceArr = choiceArr.concat(upperCaseArr);
    }

    if (confirm("Do you want any numbers in your password?")) {
      choiceArr = choiceArr.concat(numberArr);
    }

    if (confirm("Do you want any special characters in your password?")) {
      choiceArr = choiceArr.concat(specialCharArr);
    }
    return true;
  }
