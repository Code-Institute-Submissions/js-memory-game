# JavaScript Transport Memory Game

As part of my milestone project 2 I decided to create an interactive memory game using JavaScript and jQuery.

The main goal of the project is to create a fun and easy-to-use interactive game for the user.

The game displays a container with 16 different cards with 8 different icons hidden. The objective for the user is to match all 8 icons in as little moves as possible. One click equates to one move. The user will then be given a star rating based on the number of moves it took them to complete the game. Other features inculde a timer and a restart button.
 
## UX

The purpose of the game is to create a user-friendly experience for the user. The game is intended to be easy to use and fun and suitable for users of all ages.

The game begins with a modal introducing the game and a start button. Then the user is brought to the single-page game, where they can begin playing. When the game ends, the user's star rating is generated allowing the user to gauge their performance.

## Features
 
### Existing Features

Start Game Modal - modal introducing the game accompanied with start button.

Main playing area - this displays a container with 16 different cards with 8 different icons hidden. On click the icons are revealed. If the cards match the icons stay open, if not they flip closed.

Shuffle function - employing the Fisher-Yates algorithm, the cards are shuffled once the user starts the game, when the users opts to play the game again and when the user restarts the game.

Timer - this timer starts when the user makes their first click and restarts whenever the user plays again or presses the restart button.

Move counter - the move counter increments each time the user clicks a card. This is used to generate a star rating for the user.

Restart button - a restart button is used to give the user to start the game again. The cards are reshuffled and the move counter and timer are reset too.

Game ending modal - this modal appears once all 8 matches are made. There is a congratulatory message accompanied by the users star rating and an option to play again.

### Features Left to Implement
 Feature 1: In future I would like to implement Jasmine Testing in order to test some of my functions.

 Feature 2: I would also like to include functioning links to my repositories in my portfolio and links to my social platforms.

 Feature 3: Close Modal icon for end game modal. I deleted this close modal function as I realised it was functioning quite late in my project. I figured it wasn't essential as the the playAgain function was functioning perfectly.

 Feature 4: Saving user data to local storage and displaying this in a leaderboard alongside their star rating. I attempted to do this but ran into some difficulyies. One of the items that I tried to save to the local storage was coming back as undefined, I attempted to solve the problem but as this was quite late in the process and I was under time pressure I decided to abandon this feature. I posed a question about in Stack Overflow but received no reply.

## Technologies Used
- [JavaScript]
    - The project uses JavaScript in order to create user-friendly functionality
- [JQuery](https://jquery.com)
    - The project uses **JQuery** to simplify DOM manipulation.
-  [HTML5]
    - The project uses HTML5 to structure and display information in the browser.
-  [CSS3]
    - The project uses CSS3 in order to style the HTML5 elements.


## Testing

In order to test my project I mainly used Google developer tools, I checked the project worked in different browsers and I also ensured the project worked on different devices to make sure that it's responsive.

Also I used Google Dev tools to debug certain sections of code. I used breakpoints to isolate snippets of code and test them. I also used the debugger statement to test certain functions.

I used also employed console.log statements frequently in order to test functions and print variables.

I also used a code validator to ensure my code was of a sufficient standard.

For Example: testing my match function
- First I console logged the 'the_cards' array to ensure it was empty
- Then I console logged the if statement to ensure we had moved into the if statement.
- I coninued to console log the array and each section of the if statement to ensure it was functioning.
- The if statement seemed to work effectively and I employed a debugger statement to confirm.
- I also console logged the relevant elements to ensure the 'match','unmatch' and 'clicked' classes were being added/removed.

I also tested the game in Google Dev Tools for responsiveness and also manually on the following devices:
- iPad
- iPhone

## Deployment

I deployed my project using github pages.
https://tipoki13.github.io/js-memory-game/

The process was as follows: 
    1. Click into settings in Github account.
    2. Scroll to the Source section within the Github Pages section.
    3. From the dropdown menu, select master branch and then click Save.


## Credits

### Content
- I found the Fisher-Yates Shuffle online from Stack Overflow, https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
- Icons in the cards were used from Font Awesome, (https://fontawesome.com/)
- Tutor Support and help from my mentor were used to get help with issues I was struggling with.

### Media
N/A

### Acknowledgements

- I received inspiration for this project from one of the project ideas supplied by Code Institute.


