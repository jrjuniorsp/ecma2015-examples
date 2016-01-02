'use strict';

function calc(value1, value2) {
	return new Promise((resolve, reject) => {
		resolve(value1 + value2);
	});
}

calc(6,2)
.then((result) => {
	console.log(`The sum of 6 + 2 is equals to ${result}`);
})
.catch(function (err) {
	console.log(err);
});