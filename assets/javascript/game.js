window.onload=function () {


//Setting variables 
var eachGuess=[];
var wordList= ["zigzag","puzzle","pizzas","quartz","jockey","jumble","jumped","frizzy","fizzes","zenith","canoes","sizzle","hijack","simply","jacked","stormy","whales","skiing","papers","scream"];
var gameWord=""; //empty string
var puzzleWord=""; //empty string
var firstKey=true; //boolean - if/else
var wins=0;
var losses=0;
var guessesLeft=12;
var puzzletag=document.getElementById("puzzletag");
var losescore=document.getElementById("losescore");
var winscore=document.getElementById("winscore");
var Clickedkeys=document.getElementById("clickedkeys");
var numOfItemsRem=document.getElementById("numOfTurnsRem");



//press any key to start
document.onkeyup = function (event) 
{console.log(event.key);
if (firstKey) {
    //Begin game
    firstKey=false;
    buildGame();
}
else {
    //Add key to key array
    var isKeyInArray=false;
    for (var i=0; i< eachGuess.length; i++)  {
        if (eachGuess[i]==event.key) {
            isKeyInArray=true;}//compares current guess to letters guessed
    }
    if (!isKeyInArray) {
        validatePuz(event.key);
        if (guessesLeft===1) {
            winsvslosses();
            eachGuess=[];
            guessesLeft=12;
            puzzleWord="";
            buildGame();
            //did user win or lose?
            //set eachguess and guessesleft to zero or empty array
            //start new game
        }
    else {
        if (puzzleWord===gameWord) {
            winsvslosses();
            eachGuess=[];
            guessesLeft=12;
            puzzleWord="";
            buildGame();
        }
    else {
        eachGuess.push(event.key);  //pushes user guess onto array
        guessesLeft=guessesLeft-1;
        numOfItemsRem.innerHTML="Guesses Remaining: " + guessesLeft;
        Clickedkeys.innerHTML="Letter Guessed: " + eachGuess;
        console.log(eachGuess,guessesLeft);
    }
        
    }
       
    
    }

   
    //subtract one from guesses left
}
    function validatePuz(eventKey) {
        if (gameWord.indexOf(eventKey) !== -1) {
            for (var i=0; i < gameWord.length; i++) {
                if (gameWord[i] === eventKey) {
                    puzzleWord=puzzleWord.slice(0,i) + eventKey + puzzleWord.slice(i +1);
                }
            }
            puzzletag.innerHTML=puzzleWord;
        }
    }            //validate and update puzzle string
    function winsvslosses () {
        if (gameWord===puzzleWord) {
            wins=wins+1;
            winscore.innerHTML="Wins: "  + wins;
        
        }
        else {
            losses=losses+1;
            losescore.innerHTML="Losses: " + losses;

        }
    }

    function buildGame (){
        gameWord=wordList [Math.floor((Math.random() * 20))];
        for (var i=0; i <gameWord.length; i++) {
            puzzleWord += "_";
        
        }
        puzzletag.innerHTML=puzzleWord;
        losescore.innerHTML="Losses: " + losses;
        winscore.innerHTML="Wins: "  + wins;
        numOfItemsRem.innerHTML="Guesses Remaining: " + guessesLeft;
        Clickedkeys.innerHTML="Letter Guessed: " + eachGuess;
    
    }
};




//I would define a variable that counts keyup events. Instantiate it before the function that fires on keyup. Then whenever a keyup event happens, increment the counter. If the counter equals 1, the key pressed is the first.





// Press any key to get started - HTML
// flag to indetify the beginning of the game-boolean-create variable







//Build word - array? random number?
//select a random index value from word list
//create variable for correct word
//make word build a function




 


//Set number of guesses available


//User guesses by pressing letter
//event listener-get key value from key press
//if key pressed is first, start game, else otherwise play game logic

//use string function to see if letter is a match
//if so, put letter in appropriate spot, instead of dash
//compare to actual word to see if game is over

//display number of guesses remaining
//every time key is pressed decrease value by 1
//create array of used letters - compare each letter chosen to used letter array(before amount is decreased)
//display letters already used
//when guesses remaining hit zero, check if win or lose
//game over, restart game




//Better to use append for not rewriting, overwrite =
}