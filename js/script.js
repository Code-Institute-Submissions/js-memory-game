// Click on card to display icon

// var card1;
var the_cards = [];
// var card2;
var matches = 0;
var moves = 0;
var second = 0;
var minute = 0;


// Click on card to display icon and add to relevant array

$('li').click(function (){
    moveCounter();
    $(this).children().show();
    $(this).addClass('clicked');
    console.log(this.type);
    the_cards.push(this);

    match();
});

function match() {
    console.log(the_cards);
    console.log("Test the_cards.length == 2 : ",  the_cards.length == 2);
    if (the_cards.length == 2) {
        console.log("We are in the if statement now");
        var card_1 = the_cards[0];
        var card_2 = the_cards[1];
        console.log("Test card_1.type == card_2.type :", card_1.type == card_2.type)
        if (card_1.type == card_2.type) {
            console.log("Test $('.clicked').addClass('match') :", $('.clicked').addClass('match'))
            console.log(the_cards);
            $('.clicked').addClass('match');
            $('.icon').removeClass('notmatch');
            $('.match').show();
            matches++;
            console.log(matches);
            console.log(the_cards);
        } else {
            console.log(the_cards);
            $('.clicked .icon').addClass('notmatch');

            setTimeout (function() {
                $('.notmatch').hide();
            }, 1000)
            console.log(the_cards);
        }
        $('.clicked').removeClass('clicked');
        the_cards = [];
    }
}

function moveCounter() {
    moves++;
    $('#moveCounter').text(moves);

    if (moves === 1){
        startTimer();
    }
    console.log('second', second)
    console.log('minute', minute)
}

function startTimer() {
    setInterval (function (){
        second++;
        if(second === 60) {
            minute++;
            second = 0;
        }
        $('#secs').text(second);
        $('#mins').text(minute);
    }, 1000)
}




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
    $(".icon").hide();
    for (var i= 0; i < shuffledCards.length; i++){
        [].forEach.call(shuffledCards, function(item){
           deck.appendChild(item);
       });
    }
}

window.onload = startGame();

