var censoredwords = ["bad", "sad", "mad"];
var customcensoredwords = [];
function censor(text){
	for(index in censoredwords){
		text = text.replace(censoredwords[index],"****");
	}
	for(index in customcensoredwords){
		text = text.replace(customcensoredwords[index],"****");
	}
	return text;
}
function getCensoredWords(){
	return censoredwords.concat(customcensoredwords);
}
function addCensoredWord(word){
	customcensoredwords.push(word);
}
exports.censor = censor;
exports.getCensoredWords = getCensoredWords;
exports.addCensoredWord = addCensoredWord;