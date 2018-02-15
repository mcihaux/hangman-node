//`main.js` will contain the logic of your app. Running it in Terminal/Bash will start the game.
var Word = require('./word.js');
var prompt = require('prompt');
var name = ['brandon', 'nathan', 'janeclaire', 'patrick', 'sam'];;

console.log("Welcome to Hangman!");
console.log("Coding BootCamp People");

console.log("-----------------------------");

prompt.start();



game = {
	wordBank: name,
 	
 	wordsWon: 0,
 	guesses: 10,
 	currentWrd: null,
 	
 	startGame: function (wrd) {
 		this.resetGuesses();
 		this.currentWrd = new Word(this.wordBank[Math.floor(Math.random()* this.wordBank.length)]);
 		this.currentWrd.getLet();
 		this.promptUser();
 	},

 	resetGuesses: function(){
 		this.guesses = 10;
 	},

 	promptUser: function(){
 		var self = this;
 		prompt.get(['guessLet'], function(err, result){
 			console.log("You guessed: " + result.guessLet);
 			var manyGuessed = self.currentWrd.checkLetter(result.guessLet);

 			if(manyGuessed ==0) {
 				console.log("WRONG");
 				self.guesses--;


 				
 			} else {
 				console.log("CORRECT");
 					if(self.currentWrd.findWord()){
 						console.log("You won!");
 						console.log("-------------------");

 						return;
 					}
 			}

 			console.log("Guesses remaining: " + self.guesses);
 			console.log("-------------------");
 			console.log(self.currentWrd.wordRender());
 			if((self.guesses > 0) && (self.currentWrd.found == false)){
 				self.promptUser();
 			}
 			else if(self.guesses ==0){
 				console.log("Game over. Correct Word ", self.currentWrd.target);
 			} else {
 				console.log(self.currentWrd.wordRender());
 			}
 		});

 	}


};

game.startGame();