// Array of special characters to be included in password
var specialCharacters = ["@", "%", "+", "\\", "/", "'", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", "."];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Array of uppercase characters to be included in password
var upperCasedCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Function to generate password with user input
function generatePassword() {
	// MIN & MAX CHRACTER LENGTH
	const minLength = 8;
	const maxLength = 128;
	// CHRACTER LENGTH PROMPT
	let length = prompt(`Please choose how many chracters you'd like your password to contain (between ${minLength} and ${maxLength}).`);

	length = parseInt(length);
	if (isNaN(length) || length < minLength || length > maxLength) {
		alert(`Please enter a valid password between ${minLength} and ${maxLength}.`);
		return;
	}

	// INITIALISE CHARACTERSET
	let characterSet = lowerCasedCharacters.slice(); //CREATES A COPY OF THE LOWERCASECHARACTERS ARRAY
	// PROMPT USER TO SEE IF THEY'D LIKE TO USE UPPERCASE CHARACTERS IN THEIR PASSWORD
	const useUppercase = confirm("Would you like to include uppercase chracters within your password?");
	// PROMPT USER TO SEE IF THEY'D LIKE TO USE LOWERCASE CHARACTERS IN THEIR PASSWORD
	const useNumbers = confirm("Would you like to include numbers within your password?");
	// PROMPT USER TO SEE IF THEY'D LIKE TO USE SPECIAL CHARACTERS IN THEIR PASSWORD
	const useSpecial = confirm("Would you like to include special characters within your password?");

	// CHECKS IF THE USER HAS CONFIRMED TO INCLUDE UPPERCASE CHARACTERS
	if (useUppercase) {
		characterSet = characterSet.concat(upperCasedCharacters);
	}
	// CHECKS IF THE USER HAS CONFIRMED TO INCLUDE NUMERIC VALUES
	if (useNumbers) {
		characterSet = characterSet.concat(numericCharacters);
	}
	// CHECKS IF THE USER HAS CONFIRMED TO INCLUDE SPEICAL CHARACTERS
	if (useSpecial) {
		characterSet = characterSet.concat(specialCharacters);
	}
	// INITIALISE EMPTY PASSWORD VARIABLE
	let password = "";
	// FOR LOOP
	for (i = 0; i < length; i++) {
		const randomIndex = Math.floor(Math.random() * characterSet.length);
		password += characterSet[randomIndex];
	}

	document.getElementById("password").textContent = password;
}
