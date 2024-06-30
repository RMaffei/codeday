function calcOutput(number) {
	let output = '';

	if (number % 3 === 0 && number % 5 === 0) {
		output = 'fizzbuzz';
	} else if (number % 3 === 0) {
		output = 'fizz';
	} else if (number % 5 === 0) {
		output = 'buzz';
	}
	return output;
}

// grab output
const outputDiv = document.getElementById('output');

// number 1-100 loop
for (let i = 1; i <= 100; i++) {
	let result = i.toString(); // put number in front as string
	let output = calcOutput(i);

	if (output) {
		result += ' ' + output;
	}
	let resultDiv = document.createElement('div');
	resultDiv.className = 'result';
	resultDiv.textContent = result;
	outputDiv.appendChild(resultDiv);
}
