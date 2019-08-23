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
}*/

//                    document object

const element = document.querySelector('h1')

function message() {
  let myEle = document.getElementById('myPersonalInput')
  output(myEle.value)
}

function output(mess) {
  element.innerHTML = mess;
}

// function update() {
//   document.querySelector('h1').innerHTML = message;
// }

// console.dir(document); //is helping you to see detailed document in the browser console.
// console.log('hey');
// document.querySelector('h1').innerHTML = "Hello everyone"; Is leting you to update any html element

// var message = "Hello World"; // Declaring a variable "message", and then we are assign a value(string) to message
// document.querySelector('h1').innerHTML = message; // Is leting you to update any html element



/*var a = "World";
var b = "Hello";
var c = b + ' ' + a;
console.log (c)*/ // In the browser console we can use typeOf a and will say if is a string, number or bolean
