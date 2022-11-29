var characterLenght=8;
var choiceArr =[];
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  console.log("You clicked the button!");

//Generate password based on these criteria
var lowerCaseArr =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCaseArr =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numberArr =["0","1","2","3","4","5","6","7","8","9"]; 
var specialCharArr =["!","?","ª","@", "#","$","%","/","^", "&", "*", "+","-","(", ")",",","<",">"];

//Validate input
return "Your password will go here!";
}

//Event listener to create button
generateBtn.addEventListener("click",writePassword);


function writePassword() {
  var correctPrompts=getPrompts();
  var passwordText=document.querySelector("#password");

  if (correctPrompts){
    var newPassword=generatePassword();
    passwordText.value=newPassword;

  }else{
    passwordTest.value="";
  }
}

//generatePassword considering prompts
function generatePassword(){
var password="";
for (var i=0; i<characterLenght; i++){
  var randomIndex=Math.floor(Math.random() *choiceArr.lenght);
  password=password + choiceArr[randomIndex];
}
return password;
}

function getPrompts(){
  choiceArr=[];
  characterLenght=parselnt(prompt("How many characters do you want your password to have? (Choose between 8-128 characters"));
  
}

  console.log("You clicked the button!");



  passwordText.value = password;



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
