//disney movies library
	var Disneywords = 
	["Aladdin", "Hercules","Mulan","TheLionKing", "Tarzan",
	"LiloandStitch", "Cinderella", "Pinocchio",
	"BeautyandtheBeast", "PeterPan",];

//set the preliminary data 
var winscount = 0 ;
var losscount = 0 ;
var guesses = 10; 

//set empty arrays for secret words and for total guessed
var rightwords =[];
var letterguess =[];
var numberguess =[];

//use for loop to create empty dashes for random words
var randomword = Disneywords[Math.floor(Math.random() * Disneywords.length)].toLowerCase();
for (i=0; i < randomword.length; i++) {
	rightwords.push ("_"); }
document.querySelector('#currentword').innerHTML
    = "Current word: "+ rightwords.join(" ");
console.log(randomword)


//track the current word 
var lettertrack = randomword.length;	

 //reset game
 function resetgame() {
wins = 0 ;
losses = 0 ;
guesses = 10;
var randomword = Disneywords[Math.floor(Math.random() * Disneywords.length)].toLowerCase();
for (i=0; i < randomword.length; i++) {
	rightwords.push ("_"); }
   var rightwords =[];
var letterguess =[];





 }


//When the user press key up and starts game

document.onkeyup = function(event) {
	// declares variable that the letter the user is entered
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    // make sure the letter key is entered
	if (event.keyCode >= 65 && event.keyCode <= 90) {
    // user entered a letter matched the letter of randomword and if right,
    // changed the letter in the dash 
    	for (var k=0; k < randomword.length; k++) {
    	if (randomword.charAt(k) === userGuess) {
    		rightwords[k]=userGuess;
    		document.querySelector('#currentword').innerHTML = 
    		"Current word: " + rightwords.join(" ");
    	    }
    	}
    	// display letters in the letter guessed and reduced guesses by
    	// one 
    	if (randomword.indexOf(userGuess) === -1) {
    		letterguess.push(userGuess);
    		guesses--;
       		document.querySelector('#lettersguessed').innerHTML= "Letters Already Guessed: " + letterguess.join(" ");
    		document.querySelector('#guesses').innerHTML= "Number of guesses Remaining: " + guesses
    		;return true;}
    	// no duplication of letter used 
        else {return false;}




    if (lettertrack == 0) {
    	wincount++;
    	document.querySelector('#wins').innerHTML= "wins: " + winscount;
    	setTimeout(resetgame, 2500);
    }
    else if (guesses == 0) {
    	losscount++;
    	document.querySelector('#loss').innerHTML= "loss:" + losscount;
    	setTimeout(resetgame, 2500);
    }







       }
    }








