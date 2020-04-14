// Click on card to display icon

// var card1;
var the_cards = [];
// var card2;
var card2 = [];

// Click on card to display icon and add to relevant array

$('li').click(function (){
    $(this).children().show();
    console.log(this.type);
    the_cards.push(this.type);
    console.log(the_cards);
    if (the_cards.length == 2) {
        if (the_cards[0] == the_cards[1]) {

        }
    }
    


    // call a function and do something with the card you seleceted
    // console.log(this);

    // check if card1 has been set.
    //  If not then set card1= this
    // else set card2 = this
    // then check if card1==card2



    

    


})
// Define card variable and cards array

let card = document.getElementsByClassName("card");
let cards = [...card];

// Employ Fisher-Yates shuffle

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

const deck = document.querySelector(".deck");
function startGame(){
    // Shuffle cards
   let shuffledCards = shuffle(cards);
   for (var i= 0; i < shuffledCards.length; i++){
      [].forEach.call(shuffledCards, function(item){
         deck.appendChild(item);
      });
   }
}

window.onload = startGame();

