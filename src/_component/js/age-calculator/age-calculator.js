//                 How old will you be in 2050?

//  1. Prompt the user to provide they first name and store it in a variable firstname .

var firstName = prompt('Your first name:');

//  2. Prompt the user to provide they last name and store it in a variable lastname .

var lastName = prompt('Your last name:');

//  3. Prompt the user to provide theyr year of birth and store it in a variable year as a number .

var year = prompt('Please insert your year of birth:');

year = parseInt(year);

//  4. Create a variable sentence 1 staring: Hello firstname lastname.

var sentence1 = "Hello " + firstName + " " + lastName + ".";

//  5. Calculate the user age in 2050 and store in a variable: futureAge;

var futureAge = 2050 - year;

//  6. Create a variable sentence 2 staring: Your age in 2050 will be: futureAge;

var sentence2 = "Your age in 2050 will be: " + futureAge;

// 7. Store the two sentences above in a variable result. Separated them using a line break.;

var result = sentence1 + '\n' + sentence2;

// 8. Using the += operator, add the following sentence to the result variable starting with a line break: I wish you a long life full of success!;

result += "\nI wish you a long life full of success!";

console.log(result);