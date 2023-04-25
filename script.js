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
  password_to_return = generatePasswordWithUserSelections(num_of_characters, if_include_special_character, if_include_number, if_include_upper_case, if_include_lower_case);
  console.log("password to return is");
  console.log(password_to_return);
  return password_to_return;
}

// specific, simple algorithm to generate password that satisfies user's selection, based on the 5 inputs: 1 number, 4 booleans
function generatePasswordWithUserSelections(num_of_characters, if_include_special_character, if_include_number, if_include_upper_case, if_include_lower_case) {
  var special_character_included = false;
  var number_included = false;
  var upper_case_included = false;
  var lower_case_included = false;
  var password_in_construction = "";
  // came up with a simple way that satisfies the acceptance criteria
  for (let i = 0; i < num_of_characters; ++i) {
    // first generate an arbitrary character for each index for each iteration to construct the password, using 'f'
    let f_char = "f";
    if (if_include_special_character == true && special_character_included == false) {
      f_char = "&";
      password_in_construction = password_in_construction + f_char;
      special_character_included = true;
      continue;
    }
    else if (if_include_number == true && number_included == false) {
      f_char = "3";
      password_in_construction = password_in_construction + f_char;
      number_included = true;
      continue;
    }
    else if (if_include_upper_case == true && upper_case_included == false) {
      f_char = 'F';
      password_in_construction = password_in_construction + f_char;
      upper_case_included = true;
      continue;
    }
    else if (if_include_lower_case == true && lower_case_included == false) {
      // will stick to using 'f'
      lower_case_included = true;
      password_in_construction = password_in_construction + f_char;
      continue;
    }
    // case in which user does not want any upper and lower cases
    else if (if_include_lower_case == false && if_include_upper_case == false) {
      password_in_construction = password_in_construction + "@";
      continue;
    }
    // case in which user wants only upper case but does not want lower case
    else if (if_include_lower_case == false && if_include_upper_case == true) {
      f_char = "F";
      password_in_construction = password_in_construction + f_char;
      continue;
    }
    else {
      password_in_construction = password_in_construction + f_char;
    }
  }
  return password_in_construction;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);