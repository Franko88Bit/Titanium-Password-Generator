// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Steps to generate the password based on user's selections
function generatePassword() { 
  var password_to_return = "";
  // first requirement is to ask user how many characters, answer is returned in string so need to convert to number
  var num_of_characters = Number(prompt("How many characters do you want the password to be?"));
  console.log(num_of_characters);
  // bad case, want user to retry
  if ((num_of_characters <= 7) || (num_of_characters >= 129)) {
    alert("please key in a number of at least 8 characters and no more than 128 characters and try again");
    generatePassword();
  }
  // good case for number entered
  else {
    // second requirement is to check if user wants to include special characters in password
    var if_include_special_character = confirm("Do you want to include special characters?");
    if (if_include_special_character == false) {
      if_include_special_character = false;
    }
    else {
      if_include_special_character = true;
    }
    // third requirement is to check if user wants to include numerics in password
    var if_include_number = confirm("Do you want to include numbers?");
    if (if_include_number == false) {
      if_include_number = false;
    }
    else {
      if_include_number = true;
    }
    // forth requirement is to check if user wants to include upper case letters
    var if_include_upper_case = confirm("Do you want to include uppercase letters?");
    if (if_include_upper_case == false) {
      if_include_upper_case = false;
    }
    else {
      if_include_upper_case = true;
    }
    // fifth final requirement is to check if user wants to include lower case letters
    var if_include_lower_case = confirm("Do you want to include lowercase letters?");
    if (if_include_lower_case == false) {
      if_include_lower_case = false;
    }
    else {
      if_include_lower_case = true;
    }
  }
  //password_to_return = generatePasswordWithUserSelections();
  return password_to_return;
}

// specific, simple algorithm to generate password that satisfies user's selection, based on the 5 inputs: 1 number, 4 booleans
/*function generatePasswordWithUserSelections(num_of_characters, if_include_special_character, if_include_number, if_include_upper_case, if_include_lower_case) {
  // came up with a simple way that satisfies the acceptance criteria
  for (let i = 0; i < num_of_characters; ++i) {
    // first generate an arbitrary character for each index, using 'f'
    let f_char = "f";
    if () {

    }
    else if () {

    }
    else if () {

    }
    else if () {

    }
  }
}*/

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// password needs to be length 4
// _ _ _ _
// & F f 1