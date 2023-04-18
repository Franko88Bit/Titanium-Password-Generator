// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
console.log(generateBtn);
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// This is the algo to generate the password according to the user
function generatePassword() { 
  var password_to_return = "example output password";
  return password_to_return;
}

// Add event listener to generate button
console.log("hi there");
generateBtn.addEventListener("click", writePassword);