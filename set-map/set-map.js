'use strict';

//SET
let heroes = new Set();
heroes.add("Batman");
heroes.add("Chapolin");
heroes.add("Iron Man");
heroes.add("Superman");

//Iterate over the heroes
for (var hero of heroes) {
	console.log(hero);
}

//MAP
let cities = new Map();
cities.set(1, "Gotan City");
cities.set(2, "Mexico City");
cities.set(3, "Any place from California");
cities.set(4, "Smallvile");

//Iterate over the cities
cities.forEach(function (value, key) {
	console.log(`The key ${key} has the value ${value}`);
});