const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);

function searchHandler(e) {
	//console.log(e.target.value);
	suggestions.innerHTML = '';
	let results = search(e.target.value);
	showSuggestions(results, e.target.value)
}

function search(str) {
	console.log("enter search with: "+str)
	let results = [];

	for (let i in fruit){
		let temp = (fruit[i]).toLowerCase();
		//console.log("word.toLowerCase:"+temp)
		if(temp.includes(str.toLowerCase()))
		results.push(fruit[i]);
	}
	console.log("search with results:"+results)
	return results;
}

function showSuggestions(results, inputVal) {
	console.log("enter showSuggestions");
	console.log("results:"+results)
	// TODO
	for(let i in results){
		const suggestion = document.createElement('li');
		suggestion.innerText = results[i];
		suggestions.appendChild(suggestion);
	}
	
}

function useSuggestion(e) {
	input.value = e.target.innerText;
}