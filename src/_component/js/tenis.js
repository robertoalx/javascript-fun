//create a variable totalVotes and assignet to 0 

let totalVotes = 0;

// create an array with 2 objects storing the name and vote inside of each object

let player = [
{
  name: "Bianca Andreescu",
  vote: 0
},
{
  name: "Serena Williams",
  vote: 0
}
]

// create function countVote witch takes as a parameter "player". pass a value by reference.
function countVote(player){
  player.vote++;
  totalVotes++;
}

// create a programe 'while' the number of votes has not reached 10. If the client type 1, the vote is going to Bianca Andreescu. If they type 2 the vote is going to  Serena Williams
while(totalVotes < 10) {
  let choice = prompt("To vote Bianca Andreescu type 1. To vote Serena Williams type 2.")

  if(choice === '1'){
    countVote(player[0]);
  }else if(choice === '2') {
    countVote(player[1]);
  }
}

/* Once the number of votes reaches 10, print into console (as an upgrade next I will print it in the browser itself) depending on distribution of votes:
Results:
Bianca Andreescu: 7 votes;
Serena Williams: 4 votes;
If first tennis girl is favorite to win print "'her name' is favorite to win" or if is equal write: "no favorite to win this year!". */

console.log("Results:");
console.log(player[0].name + ": " + player[0].vote + " votes.");
console.log(player[1].name + ": " + player[1].vote + " votes");

if(player[0].vote > player[1].vote){
  console.log(player[0].name + " is favorite to win");
}else if(player[0].vote < player[1].vote){
  console.log(player[1].name + " is favorite to win");
}else {
  console.log("No favorite to win this year!");
};
console.log("bla bla")