// `letter.js` should control whether or not a letter appears as a "_" or as itself on-screen.
//pass in letter into function

var blank = "_";
var letter = function(let){
	this.charac = let;
	this.appear = false;
	this.letterRender = function(){
		if (this.appear == true){
			return let;
		}else{ 
			return blank; 
		}

		// return !(this.appear) ? "_" : this.charac;
	};
};

//export the constructor
module.exports = letter;