"use strict"


runCapitlizer ();


function runCapitlizer () {
	let wordsEntered = getUserInput("Input five words separated by a space");
	let capPhrase = capitalize(wordsEntered);
	
	console.log(capPhrase)
	
}	
	
	
	
function capitalize(wordsEntered){
	let splitPhrase = wordsEntered.split(' ');
	let capPhrase = [];
	
	for(let x= 0; x < splitPhrase.length; x++){
		capPhrase.push(splitPhrase[x].charAt(0).toUpperCase()+splitPhrase[x].slice(1));
	}
	return capPhrase.join(' ');
}
	
	
	
function getUserInput(wordsEntered){
	let response = prompt(wordsEntered);
	return response;
}
