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

//             Objects

var computer = {
  motherboard: 'Gigabyte',
  procesor: 'Intel core I7 8600',
  memory: '16gb 2300mhz',
  graphic: 'Nvidia Gigabyte 1080',
  ssd: '512GB Western digital',
  hdd: '2tb Western digital',
  keybord: 'Razer',
  mouse: 'Razer Deathadder'
}
document.querySelector('h1').innerHTML = computer.motherboard + ' is having an amazing ' + computer.procesor + ' on top of that the graphic card ' + computer.graphic + ' is doing the job amazingly';

// console.dir(document); //is helping you to see detailed document in the browser console.
// console.log('hey');
// document.querySelector('h1').innerHTML = "Hello everyone"; Is leting you to update any html element

// var message = "Hello World"; // Declaring a variable "message", and then we are assign a value(string) to message
// document.querySelector('h1').innerHTML = message; // Is leting you to update any html element



/*var a = "World";
var b = "Hello";
var c = b + ' ' + a;
console.log (c)*/ // In the browser console we can use typeOf a and will say if is a string, number or bolean
