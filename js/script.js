/*----Displaying Cards----*/

// Click on card to display icon

$('li').click(function (){
    $(this).children().show();
})

// Install shuffle function on page load and start game

let card = document.getElementsByClassName("card");
let cards = [...card];

const deck = document.querySelector(".deck");
function startGame(){
   var shuffledCards = shuffle(cards);
   for (var i= 0; i < shuffledCards.length; i++){
      [].forEach.call(shuffledCards, function(item){
         deck.appendChild(item);
      });
   }
}

window.onload = startGame();