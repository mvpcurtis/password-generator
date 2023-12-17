// SPECIAL CHARACTERS ARRAY
var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];

// NUMERIC CHARACTERS ARRAY
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// LOWERCASE CHARACTERS ARRAY
var lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// UPPERCASE CHARACTERS ARRAY
var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// Function to generate password with user input
function generatePassword() {
  // MIN & MAX CHRACTER LENGTH
  const minLength = 8;
  const maxLength = 128;
  // CHRACTER LENGTH PROMPT
  let length = prompt(`Please choose how many chracters you'd like your password to contain (between ${minLength} and ${maxLength}).`);

  // CHANGES USER INPUT FROM PROMPT TO AN INTERGER
  length = parseInt(length);
  // CHECKS IF THE USER HAS MET THE REQUIREMENTS
  // IF LENGTH IS NOT A NUMBER
  // *OR* IF LENGTH IS LESS THAN MIN LENGTH
  // *OR* IF LENGTH IS MORE THAN MAX LENGTH
  // THE CODE BELOW WON'T RUN
  if (isNaN(length) || length < minLength || length > maxLength) {
    alert(`Please enter a valid password between ${minLength} and ${maxLength}.`);
    console.warn('Invalid password, try again!');
    return;
  }

  // INITIALISE CHARACTERSET
  let characterSet = lowerCasedCharacters.slice(); //CREATES A COPY OF THE LOWERCASECHARACTERS ARRAY
  // PROMPT USER TO SEE IF THEY'D LIKE TO USE UPPERCASE CHARACTERS IN THEIR PASSWORD
  const useUppercase = confirm('Would you like to include uppercase chracters (ABCD) within your password?');
  // PROMPT USER TO SEE IF THEY'D LIKE TO USE NUMERIC CHARACTERS IN THEIR PASSWORD
  const useNumbers = confirm('Would you like to include numbers (1234) within your password?');
  // PROMPT USER TO SEE IF THEY'D LIKE TO USE SPECIAL CHARACTERS IN THEIR PASSWORD
  const useSpecial = confirm('Would you like to include special characters (!£$%) within your password?');

  // CLEARS THE CONSOLE FROM PREVIOUS OUTPUT
  console.clear();
  // CHECKS IF THE USER HAS CONFIRMED TO INCLUDE UPPERCASE CHARACTERS
  if (useUppercase) {
    characterSet = characterSet.concat(upperCasedCharacters);
    console.log('Uppercase chracters included.');
  } else {
    console.log('Uppercase characters not included.');
  }
  // CHECKS IF THE USER HAS CONFIRMED TO INCLUDE NUMERIC CHARACTERS
  if (useNumbers) {
    characterSet = characterSet.concat(numericCharacters);
    console.log('Numeric characters included.');
  } else {
    console.log('Numeric characters not included.');
  }
  // CHECKS IF THE USER HAS CONFIRMED TO INCLUDE SPEICAL CHARACTERS
  if (useSpecial) {
    characterSet = characterSet.concat(specialCharacters);
    console.log('Special characters included.');
  } else {
    console.log('Special characters not included.');
  }
  // INITIALISE EMPTY PASSWORD VARIABLE
  let password = '';
  // FOR LOOP
  // LOOP
  for (i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characterSet.length);
    password += characterSet[randomIndex];
  }
  // TARGETS THE PARAGRAPH HTML ELEMENT WITH THE ID OF PASSWORD
  // AND REPLACES THE CONTENTS OF THAT ELEMENT WITH THE GENERATED TEXT
  document.getElementById('password').textContent = password;
}
