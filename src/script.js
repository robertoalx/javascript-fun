/*                    first attempt
var b = 0; //global scope
function message(a) {
  b++;
  var output = a + ' ' + b; //local scope
  document.querySelector('h1').innerHTML = output;
  console.log(a)
}

var second = 0;
function message1(hero) {
  second++;
  var output1 = hero + ' ' + second; //local scope
  document.querySelector('h1').innerHTML = output1;
  console.log(hero);
}

var third = 0;
function message2(theLastOne) {
  third++;
  var output2 = theLastOne + ' ' + third; //local scope
  document.querySelector('h1').innerHTML = output2;
  console.log(theLastOne)
}*/

//                 second attempt where only the numbers will apear when we click the button.

/*var var1, var2, var3; //global scope
var1 = var2 = var3 = 0;

function message1() {
  var1++;
  message()
}

function message2() {
  var2++;
  message()
}

function message3() {
  var3++;
  message();
}

function message() {
  document.querySelector('h1').innerHTML = var1 + '' + var2 + '' +var3;
} */

/*var allot = plus(7123,214235)
var allot1 = plus(53462654562314, 3543456547523134);
var allot2 = allot + allot1;
function plus(a,b) {
  return a + b;
} */

//                     Objects

/*var computer = {
  motherboard: 'Gigabyte',
  procesor: 'Intel core I7 8600',
  memory: '16gb 2300mhz',
  graphic: 'Nvidia Gigabyte 1080',
  ssd: '512GB Western digital',
  hdd: '2tb Western digital',
  keybord: 'Razer',
  mouse: 'Razer Deathadder'
}
document.querySelector('h1').innerHTML = computer.motherboard + ' is having an amazing ' + computer.procesor + ' on top of that the graphic card ' + computer.graphic + ' is doing the job amazingly';*/


//                    Arrays
/*var myArray = ['Robert', 'Alexandru', 29, true];
var arr1 = myArray.push('This string is pushed by me at the end of an array!')
var arr2 = myArray.pop();//pop() removes the last index.
var arr3 = myArray.shift();//shift() will delete the firxt index, that's mean the 0 index
var arr4 = myArray.unshift("Gabriel"); //shift() adding one ore more elements to the beginning of an array and return a new length of the array 
console.log(myArray);*/

//                    Condition statement

/*var num = 15;

if (num !== 14 && num > 20) {
  console.log('You know that your true')
} else if (num === 15 || num <20) {
  console.log('It is equal') 
} else {
  console.log('Go to sleep')
}*/

//         Conditional statement combined with function

/*var num1 = 10;
function checkIt(num) {
  message(num);
  if(num > num1){
    message(num + ' I think was more then ' + num1);
  } else if(num === num1){
    message(num + ' is strictly equal to ' + num);
  } else {
    message(num + ' definetly was less then ' + num1)
  }
}*/

//                    switch statement
/*function checkIt(val) {
  console.log(val);
  switch(val) {
    case 1:
    case 2:
    case 3:
      message('Is a number');
      break;
    case true:
    case false:
      message('This is a bolean');
      break;
    case 'Hello':
    case 'Second Hello':
    case 'Third Hello':
      message('This is a String');
      break;
    default:
      message('What you selected is not a number or a bolean or a string');
  }
}

function message(mess) {
  document.querySelector('h1').innerHTML = mess
}*/

//                Loops

/*var array = [ 1, 3, 4, 5, 6, 5, 7, 7, 1, 100];
for(x = 0; x < array.length; x++) {
  console.log(array[x])
}

var object = {
  firstName: "Robert",
  lastName: "Alexandru",
  doingDrugs: "Hell No",
  codingHard: "Hell Yes"
}
for( var x in object) {
  console.log(x + ' ' + object[x])
}*/


//                   string methods


/*var myStr = "Hello Hello Guyssss one two ten  Hello Hello"
console.log(myStr.length)
var word = myStr.indexOf('Hello');
console.log(word);
var wordLast = myStr.lastIndexOf('Hello');
console.log(wordLast);
var wordFind = myStr.indexOf('Hello', 20);
console.log(wordFind);
var wordSearch = myStr.search('one');
console.log(wordSearch);

function checkIt(val) {
  var checkVal = myStr.indexOf(val)
  if(checkVal < 0) {
    message("Didn't find it :O ");
  } else {
    message('Found it at ' + checkVal + ' position in the string')
  }
}

function message(mess) {
  document.querySelector('h1').innerHTML = mess
};*/

//                    document object

/*const element = document.querySelector('h1');

function message() {
  let myEle = document.getElementById('myPersonalInput');
  output(myEle.value);
}

function output(mess) {
  element.innerHTML = mess;
}*/

//               

/*const output = document.getElementById('output');
const ourBtn = document.getElementById('useBtn');
ourBtn.addEventListener('click', checkVal);

function checkVal() {
  let val = document.querySelector('input[name="ourNum"]').value;
  output.innerHTML = numCheck(val);
}

function numCheck(num) {
  let message;
  if( num % 2) {
    message =  "It is ODD";
  } else {
    message = "It is EVEN";
  }
  return message;
}*/

//             Apply the test() method to see if is true or false 
/*let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString)*/



// function update() {
//   document.querySelector('h1').innerHTML = message;
// };

// console.dir(document); //is helping you to see detailed document in the browser console.
// console.log('hey');
// document.querySelector('h1').innerHTML = "Hello everyone"; Is leting you to update any html element

// var message = "Hello World"; // Declaring a variable "message", and then we are assign a value(string) to message
// document.querySelector('h1').innerHTML = message; // Is leting you to update any html element



/*var a = "World";
var b = "Hello";
var c = b + ' ' + a;
console.log (c);*/ // In the browser console we can use typeOf a and will say if is a string, number or bolean

//                                Match a Literal String with Different Possibilities

// let petString = "Roberto bird as a pet and a cat.";
// let petRegex = /dog|cat|bird|spider/; 
// let result = petRegex.test(petString);

//                 How old will you be in 2050?

//  1. Prompt the user to provide they first name and store it in a variable firstname .

/*var firstName = prompt('Your first name:');

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

console.log(result);*/


// let userInput = prompt("Please specify your desire computer component. You can choose from: procesor, memory-ram, graphic-card, motherboard, keyboard");
// userInput = userInput.toLowerCase();

// switch(userInput) {
//   case "procesor":
//     console.log("The many advantages of 10th Gen Intel® Core™ mobile processors are almost here — built-in AI, integrated Thunderbolt™ 3 technology and Intel® Wi-Fi 6, 4K HDR, and more. Featuring new CPU and GPU architectures produced on Intel’s advanced 10nm process.");
//     break;
//   case "memory-ram":
//     console.log("CORSAIR Vengeance LPX - DIMM 288-pin");
//     break;
//   case "graphic-card":
//     console.log("GeForce® GTX 1080 G1 Gaming 8G");
//     break;
//   case "motherboard":
//     console.log("Gigabyte Z390 AORUS PRO LGA 1151 DDR4 ATX Motherboard");
//     break;
//   case "keyboard":
//     console.log("Razer Blackwidow Chroma Mechanical Keyboard");
//     break;
//   case "mouse":
//     console.log("Razer Deathadder Elite: True 16.000 5G Optical Sensor - Razer Mechanical Mouse Switches (Up To 50 Million Clicks) - Esports Gaming Mouse");
//     break;
//   default:
//     console.log("This is not a computer component");
// }

//      You want to buy your computer, and don't know any shop? Let me help you.

//  1. create six objects(store1, store2...store6)  storing the name, price, and distance from your location to your prefered store

let store1 = {
  name: "Argos",
  price: 1000,
  distance: 6.8
};
let store2 = {
  name: "Curis",
  price: 950,
  distance: 3.7
};
let store3 = {
  name: "Amazon",
  price: 935,
  distance: 2.8
};
let store4 = {
  name: "Epsilom Computers",
  price: 1300,
  distance: 4.8
};
let store5 = {
  name: "Arbico Computers",
  price: 1500,
  distance: 5.5
};
let store6 = {
  name: "PC Point",
  price: 1100,
  distance: 1.5
};

//  2. create an new variable store and add all variables stores into an array

let store = [store1, store2, store3, store4, store5, store6];
// console.log(store)

//  3.create the result variable with the Message "Here is a list with the stores that have your computer in stock"

let result = "Here is a list with the stores that have your computer in stock:";

//  4. Make use of FOR statement to print the stores in console.log with a line break the message should be This store: store.name , got this price per unit: store.price, and is not so far from your location: store.distance. miles.

for(x = 0; x < store.length; x++) {
  result += "\nThis store: " + store[x].name+  ", got this price per unit: " + store[x].price + ", and is not so far from your location: " + store[x].distance +" miles.";
}
// console.log(result)

// 5. prompt the user to enter their budger (make a variable budget) make use of parseFloat
let budget = prompt("Please let us know how much money you want to spend on your new computer:");
budget = parseFloat(budget);
// 6. prompt the user to enter the maximum distance and store it into a variable and make use of parseFloat
let distance = prompt("Please let us know how far you want to walk or drive to the nearest and available store:");
distance = parseFloat(distance);

// reset result to an empty array. Using a for statement, loop though the list of the stores. IF the store is witihin the user budget and maximum distance from his location add a sentence with a line break and containing store details to the result variable.

result = "";
counting = 0;
for(x = 0; x < store.length; x++) {
  if(store[x].price <= budget && store[x].distance <= distance){
    counting++;
    result += "\nThis store: " + store[x].name+  ", got this price per unit: " + store[x].price + ", and is not so far from your location: " + store[x].distance +" miles.";
  }
}
// console.log(result);

//  if there are not stores matching the search set the result to "Sorry, we've got no available stores for you".
// If there is only one store "Got only 1 store that having your perfect matching"
// or there are 2 stores "There are 2 stores that  having your perfect matching"

if(counting === 0){
  result = "Sorry, we've got no available stores for you."
}else if(counting === 1){
  result = "Got only " + counting +" store that having your perfect matching." + result;
}else{
  result = "There are " + counting + " stores that having your perfect matching" + result;
}
console.log(result);