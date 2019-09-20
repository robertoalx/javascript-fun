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
  distance: 1.9
};
let store7 = {
  name: "Cyberpower UK",
  price: 2100,
  distance: 2.5
};
let store8 = {
  name: "Freshtech Solutions",
  price: 1700,
  distance: 5.2
};
let store9 = {
  name: "AWD-IT",
  price: 3500,
  distance: 3
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

counting = counting === 0 ? result = "Sorry, we've got no available stores for you." : counting === 1 ? "Got only " + counting +" store that having your perfect matching." + result : result = "There are " + counting + " stores that having your perfect matching" + result; 

console.log(result);