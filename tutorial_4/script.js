var catNames = ['Kislinka', 'Mandarinka', 'Lisichka', 'Luna', 'kreker'];

var cat= {
	name: catNames [random(0, catNames.length -1)],
	color: '#808080',
	len: 35
};

var arrayCats = [cat, cat, cat, cat];

console.log(catNames.length-1); 
console.log(arrayCats.length);
console.log(random(0, 5));

for (var i = 0; i < arrayCats.length; i++) {
console.log(arrayCats[i]);
}

function random(min, max) {	
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
