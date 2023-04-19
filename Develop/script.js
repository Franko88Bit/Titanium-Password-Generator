// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// This is the algo to generate the password according to the user
function generatePassword() { 
  var password_to_return = "";
  // first requirement is to ask user how many characters
  var num_of_characters = Number(prompt("How many characters do you want the password to be?"));
  console.log(num_of_characters);
  // bad case, want user to retry
  if ((num_of_characters <= 7) || (num_of_characters >= 129)) {
    alert("please key in a number of at least 8 characters and no more than 128 characters and try again");
    generatePassword();
  }

  // second requirement is to check if user wants to include special characters in password
  var if_include_special_character = confirm("Do you want to include special characters?");
  if (if_include_special_character == false) {
    if_include_special_character = false;
    //console.log(if_include_special_character);
    //console.log("false special char");
  }
  if_include_special_character = true;
  
  // third requirement is to check if user wants to include numerics aka numbers in password
  var if_include_number = confirm("Do you want to include numbers?");
  if (if_include_number == false) {
    if_include_number = false;
  } 
  if_include_number = true;

  return password_to_return;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);