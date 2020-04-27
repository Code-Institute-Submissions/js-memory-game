var the_cards = [];
var matches = 0;
var moves = 0;
var second = 0;
var minute = 0;
var timer;
var leaderboard;

// Click on card to display icon and add to relevant array

$('.card').click(function (){
    moveCounter();
    $(this).children().show();
    $(this).addClass('clicked');
    the_cards.push(this);

    match();
});

// Matching Function

function match() {
    if (the_cards.length === 2) {
        var card_1 = the_cards[0];
        var card_2 = the_cards[1];
        if (card_1.type == card_2.type) {
            $('.clicked').addClass('match');
            $('.icon').removeClass('notmatch');
            $('.match').show();
            matches++;
        } else {
            $('.clicked .icon').addClass('notmatch');
            setTimeout (function() {
                $('.notmatch').hide();
            }, 1000)
        }
        $('.clicked').removeClass('clicked');
        the_cards = [];

        if (matches === 8) {
            endGame();
        }
    }
}

// Move Counter Function

function moveCounter() {
    moves++;
    $('#moveCounter').text(moves);

    if (moves === 1){
        startTimer();
    }
}

// Timer Function

function startTimer() {
    timer = setInterval (function (){
        second++;
        if(second === 60) {
            minute++;
            second = 0;
        }
        $('#secs').text(second);
        $('#mins').text(minute);
    }, 1000)
}

// Star Rating Function

function rating() {
    // Rates User Performance Based on Number on Moves
    var stars;
    let star = "<i class='fa fa-star'></i>";

    if(moves > 16 && moves <= 24) {
        stars = 5;
    } else if(moves > 24 && moves <= 28) {
        stars = 4;
    } else if(moves > 28 && moves <= 34) {
        stars = 3;
    } else if(moves > 34 && moves <= 40) {
        stars = 2;
    } else if(moves > 40){
        stars = 1;
    }

    for(let numStars = 0; numStars < stars; numStars++) {
        $('#finalStarRating').append(star);
    }
}

// End Game Function

function endGame() {
    // Displays modal
    $('#endGameModal').show();

    matches = 0;

    rating();

    updateLeaderboard();
    
}

// Close Modal Function

function closeModal() {
    $('#closeModal').click(function (){
        $("#endGameModal").hide();
        startGame();
    })
}

// Play Again Function

function playAgain() {
    $("#finalStarRating").empty();
    $("#endGameModal").hide();
    startGame();
}

// User Input Function

function userInput() {
    $("#userInputModal").show();
}

function userStartGame () {
    //hide user input modal
    $('#userInputModal').hide();
    startGame();
}

// Define card variable and cards array

let card = document.getElementsByClassName("card");
let cards = [...card];

// Employ Shuffle Function Using The Fisher-Yates Shuffle Metho

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

// Start Game Function

function startGame(){
    
    // Shuffle cards
   let shuffledCards = shuffle(cards);
    $(".icon").hide();
    for (var i= 0; i < shuffledCards.length; i++){
        [].forEach.call(shuffledCards, function(item){
           deck.appendChild(item);
       });
    }

    // reset moves
    moves = 0;
    $('#moveCounter').text(moves);

    //reset timer
    second = 0;
    minute = 0;
    clearInterval(timer);
    $('#secs').text(second);
    $('#mins').text(minute);

    //reset matches
    matches = 0;
}

// // Saving User Name to Local Storage Item

function submit() {
    var input = $('#userInput').value;
    localStorage.setItem('name', 'input');
}

// Saving Users Star Rating to local storage

var userRating = document.getElementById('finalStarRating');
localStorage.setItem('userStars', 'userRating');

// Update Leaderboard

debugger;
function updateLeaderboard() {
    if (localStorage.getItem('name') && localStorage.getItem('userStars') === null) {
        leaderboard = 0;
    }
    else {
        leaderboard = localStorage.getItem('name') && localStorage.getItem('userStars');
    }
    leaderboard = Math.max(name, userStars);
    localStorage.setItem('leaderboard');
    let leaderboardTable = (leaderboard);
    $('#leaderboardTable').textContent = leaderboard;
}

window.onload = userInput();
