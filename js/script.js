// Click on card to display icon

// var card1;
var the_cards = [];
// var card2;
var match = 0;


// Click on card to display icon and add to relevant array

$('li').click(function (){
    $(this).children().show();
    $(this).addClass('clicked');
    console.log(this.type);
    the_cards.push(this);

    console.log(the_cards);
    console.log("Test the_cards.length == 2 : ",  the_cards.length == 2);
    if (the_cards.length == 2) {
        console.log("We are in the if statement now");
        var card_1 = the_cards[0];
        var card_2 = the_cards[1];
        console.log("Test card_1.type == card_2.type :", card_1.type == card_2.type)
        if (card_1.type == card_2.type) {
            // console.log("Test $('li').children().addClass('match') :", $('li').children().addClass('match'))
            $('.clicked').addClass('match');
            match++;
        } else {
            $('.clicked').addClass('notmatch');
            setTimeout (function() {
                $('.notmatch').hide();
            }, 2000)
            the_cards = [];
            console.log(the_cards);
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
console.log('cards',cards);

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
   console.log('shuffledCards', shuffledCards);
//    for (var i= 0; i < shuffledCards.length; i++){
//       [].forEach.call(shuffledCards, function(item){
//          deck.appendChild(item);
//       });
//    }
}

window.onload = startGame();

