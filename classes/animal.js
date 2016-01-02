'use strict';


class Animal {

	constructor(name) {
		this.name = name;
	}

	get age() {
		return this._age;
	}

	set age(value) {
		if (value <= 0) {
			console.log("The animal cannot have age 0");
		} else {
			this._age = value
		}
	}

	doSomething() {
		console.log("Do Something in the Animal class");
	}

	static staticMethod() {
		console.log("This is a static method");
	}

}

var animal = new Animal("Elephant");
console.log(animal.name);
animal.doSomething();
animal.age = 0;
animal.age = 10;
console.log(animal.age)
Animal.staticMethod()