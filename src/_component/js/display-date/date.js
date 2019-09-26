let s = new Date();
console.log(s);

// choose a sepcific data and time
// year, month, days, minutes, seconds, miliseconds: ; if 2 arguments ar provided the rest in considerate 0 or 1(day argument).

s = new Date(2019, 5, 17, 11, 23, 35);
console.log(s);

//use an integer value representing the number of miliseconds since 01/01/1970 00:00:00 UTC.

s = new Date(20546874325479);
console.log(s);


// opposite go from date to numeric value
console.log(x.getTime());