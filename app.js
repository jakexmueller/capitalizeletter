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
	
	
	
	
/*	
function capitalize(wordsEntered) {
	let phrase;
	phrase = (wordsEntered);
	let capPhrase = phrase.toUpperCase(wordsEntered);
	
	
	
	return capPhrase;
	
	
} */
	
	
	
function getUserInput(wordsEntered){
	let response = prompt(wordsEntered);
	return response;
}








/*
function uppercase(str)
{
  var array1 = str.split(' ');
  var newarray1 = [];
    
  for(var x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newarray1.join(' ');
}
console.log(uppercase("the quick brown fox")); */