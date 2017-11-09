var inquirer = require("inquirer");
var fs = require("fs");
var word = require("./word.js");
var letter = require("./letter.js");
var game = require("./game.js");


function hangman() {

	inquirer.prompt([{
			name: "guess",
			message: "Guess a letter"
		
	}])
}
